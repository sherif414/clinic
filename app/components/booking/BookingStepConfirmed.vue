<script setup lang="ts">
import { clinicInfo } from '~/utils/clinic'
import type { ClinicalService, Clinician } from '~/types/booking'

const props = defineProps<{
  bookingRef: string
  service: ClinicalService
  clinician: Clinician
  date: string
  time: string
}>()

// Clinician display preserving doctoral credentials
const clinicianFullDisplay = computed(() => {
  if (props.clinician.id === 'any') {
    return 'First Available Doctoral Specialist, PT, DPT'
  }
  return props.clinician.name
})

const clinicianSpecialtyDisplay = computed(() => {
  if (props.clinician.id === 'any') {
    return 'Board-Certified Physical Therapy Specialist • Priority Queue'
  }
  return props.clinician.specialty
})

const clinicianLastName = computed(() => {
  if (props.clinician.id === 'any') return 'Specialist'
  const match = props.clinician.name.match(/Dr\.\s+([A-Za-z]+)/)
  return match ? match[1] : props.clinician.name.split(',')[0]?.split(' ').pop() || 'Specialist'
})

// Clipboard feedback
const copiedRef = ref(false)
const copiedAddress = ref(false)

async function copyRef() {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return
  try {
    await navigator.clipboard.writeText(props.bookingRef)
    copiedRef.value = true
    setTimeout(() => {
      copiedRef.value = false
    }, 2000)
  } catch {
    // clipboard failure fallback
  }
}

async function copyAddress() {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return
  try {
    await navigator.clipboard.writeText(clinicInfo.address.full)
    copiedAddress.value = true
    setTimeout(() => {
      copiedAddress.value = false
    }, 2000)
  } catch {
    // clipboard failure fallback
  }
}

// RFC 5545 Date & Time Parser
function parseAppointmentDateTime(dateStr: string, timeStr: string): { start: Date, end: Date } {
  try {
    const cleanedDate = dateStr.includes(',') ? dateStr.split(',').slice(1).join(',').trim() : dateStr
    const parsed = new Date(`${cleanedDate} ${timeStr}`)
    if (!isNaN(parsed.getTime())) {
      const durationMatch = props.service.duration.match(/\d+/)
      const durationMin = durationMatch ? parseInt(durationMatch[0]!, 10) : 60
      const end = new Date(parsed.getTime() + durationMin * 60 * 1000)
      return { start: parsed, end }
    }
  } catch {
    // fallback to current date + 1 hour
  }
  const now = new Date()
  return { start: now, end: new Date(now.getTime() + 60 * 60 * 1000) }
}

function formatIcalUtc(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
}

// Google Calendar Direct Web Intent URL
const googleCalendarUrl = computed(() => {
  const { start, end } = parseAppointmentDateTime(props.date, props.time)
  const startIso = formatIcalUtc(start)
  const endIso = formatIcalUtc(end)
  const title = encodeURIComponent(`${props.service.name} — Apex Sports Physical Therapy`)
  const details = encodeURIComponent(`Doctoral Clinical Session with ${clinicianFullDisplay.value}.\nReference: ${props.bookingRef}\nParking: Level 1 garage stalls 101–125 (direct Suite 300 elevator).\nAttire: Athletic shorts and training shoes for 3D motion capture and force plate diagnostics.\nLocation: ${clinicInfo.address.full}`)
  const location = encodeURIComponent(clinicInfo.address.full)
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`
})

// RFC 5545 Compliant .ics Download
function downloadIcs() {
  if (typeof window === 'undefined') return

  const { start, end } = parseAppointmentDateTime(props.date, props.time)
  const now = new Date()
  const uid = `apex-${props.bookingRef.replace(/[^A-Za-z0-9]/g, '')}-${now.getTime()}@apexpt.com`

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Apex Sports & Physical Therapy//Clinical Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcalUtc(now)}`,
    `DTSTART:${formatIcalUtc(start)}`,
    `DTEND:${formatIcalUtc(end)}`,
    `SUMMARY:${props.service.name} — Apex Physical Therapy`,
    `DESCRIPTION:Clinical assessment with ${clinicianFullDisplay.value}. Reference: ${props.bookingRef}. Location: ${clinicInfo.address.full}. Level 1 garage parking stalls 101–125. Attire: athletic shorts & training shoes for motion capture diagnostics.`,
    `LOCATION:${clinicInfo.address.full}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `apex-appointment-${props.bookingRef.replace(/[^A-Za-z0-9]/g, '')}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function handlePrint() {
  if (typeof window !== 'undefined') {
    window.print()
  }
}

// Digital Intake Paperwork State
const intakeState = ref<'idle' | 'in_progress' | 'completed'>('idle')
const intakeGoal = ref('Return to sports without knee pain')
const intakePainScore = ref(4)
const intakeImaging = ref<string[]>(['MRI Disc / Radiology Report'])

const imagingOptions = [
  'MRI Disc / Radiology Report',
  'X-Ray Scans',
  'Surgeon Protocol Packet',
  'No Prior Imaging'
]

const goalPresets = [
  'Return to running/sprinting',
  'Post-op ligament reconstruction rehab',
  'Shoulder & rotator cuff mobility',
  'Spine / core pain-free loading'
]

function toggleImaging(option: string) {
  if (intakeImaging.value.includes(option)) {
    intakeImaging.value = intakeImaging.value.filter(i => i !== option)
  } else {
    intakeImaging.value.push(option)
  }
}

function submitIntake() {
  intakeState.value = 'completed'
}
</script>

<template>
  <div class="p-4 sm:p-8 lg:p-10 text-center appointment-confirmed-view">
    <!-- Compact, High-Impact Status Hero (Replaces vertical chrome bloat) -->
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/10 text-pine border border-pine/20 text-xs font-semibold mb-2.5 tracking-wide">
      <UiIcon
        name="i-lucide-check-circle-2"
        class="text-sm text-pine shrink-0"
        aria-hidden="true"
      />
      <span>Clinical Evaluation Reserved</span>
    </div>

    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif text-charcoal font-medium mb-2 tracking-tight">
      Your Appointment is Confirmed
    </h1>
    <p class="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto mb-6 leading-relaxed">
      A confirmation email and SMS with intake paperwork and calendar invite have been sent to your inbox.
    </p>

    <!-- The Athlete Clinical Pass -->
    <div class="max-w-2xl sm:max-w-xl mx-auto bg-linen rounded-2xl sm:rounded-3xl border border-ecru-border p-4.5 sm:p-7 text-left mb-8 relative">
      <!-- Pass Header & Reference Code with 1-Tap Copy -->
      <div class="flex items-center justify-between pb-3.5 border-b border-ecru-border gap-2">
        <span class="text-[11px] sm:text-xs uppercase tracking-widest font-mono font-bold text-pine whitespace-nowrap">
          Clinical Pass
        </span>

        <div class="flex items-center gap-1.5 shrink-0">
          <span class="text-[11px] sm:text-xs uppercase tracking-wider text-charcoal-muted font-semibold">Ref:</span>
          <span class="font-mono font-bold text-pine text-xs sm:text-sm whitespace-nowrap">{{ bookingRef }}</span>
          <button
            type="button"
            class="p-1 rounded-md text-charcoal-muted hover:text-pine hover:bg-linen-darker transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 cursor-pointer shrink-0"
            :title="copiedRef ? 'Copied' : 'Copy Reference Code'"
            @click="copyRef"
          >
            <UiIcon
              :name="copiedRef ? 'i-lucide-check' : 'i-lucide-copy'"
              class="text-xs shrink-0"
              :class="copiedRef ? 'text-pine font-bold' : 'text-charcoal-muted'"
              aria-hidden="true"
            />
            <span class="sr-only">{{ copiedRef ? 'Reference code copied' : 'Copy reference code' }}</span>
          </button>
        </div>
      </div>

      <!-- Appointment Spotlight Box (White card inside linen pass, as in mobile) -->
      <div class="bg-white rounded-xl sm:rounded-2xl border border-ecru-border p-3.5 sm:p-4 my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-pine text-linen flex items-center justify-center shrink-0">
            <UiIcon
              name="i-lucide-calendar"
              class="text-lg text-linen"
              aria-hidden="true"
            />
          </div>
          <div>
            <p class="text-[11px] sm:text-xs uppercase tracking-wider text-charcoal-muted font-semibold">
              Scheduled Appointment
            </p>
            <p class="font-semibold text-charcoal text-sm sm:text-base">
              {{ date }} at {{ time }}
            </p>
          </div>
        </div>

        <UiBadge
          color="pine"
          variant="subtle"
          class="rounded-full px-2.5 py-1 text-[11px] sm:text-xs font-semibold self-start sm:self-center shrink-0"
        >
          {{ service.duration }} Full Session
        </UiBadge>
      </div>

      <!-- Clinical Information Description List -->
      <!-- Mobile: flex justify-between with text-right (preserves mobile view exactly) -->
      <!-- Desktop: sm:grid sm:grid-cols-[160px_1fr] with text-left (eliminates 300px void and jagged right alignment) -->
      <dl class="space-y-3.5 sm:space-y-4 text-xs sm:text-sm pt-1">
        <!-- Clinical Service -->
        <div class="flex justify-between items-start gap-3 sm:grid sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-4 sm:text-left">
          <dt class="text-charcoal-muted shrink-0 sm:shrink">
            Clinical Service
          </dt>
          <dd class="font-semibold text-charcoal text-right sm:text-left">
            {{ service.name }}
          </dd>
        </div>

        <!-- Doctor / Specialist -->
        <div class="flex justify-between items-start gap-3 sm:grid sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-4 sm:text-left">
          <dt class="text-charcoal-muted shrink-0 sm:shrink">
            Doctor / Specialist
          </dt>
          <dd class="text-right sm:text-left">
            <span class="font-semibold text-charcoal block">{{ clinicianFullDisplay }}</span>
            <span class="text-[11px] text-charcoal-muted block font-normal mt-0.5">{{ clinicianSpecialtyDisplay }}</span>
          </dd>
        </div>

        <!-- Facility Location -->
        <div class="flex justify-between items-start gap-3 sm:grid sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-4 sm:text-left">
          <dt class="text-charcoal-muted shrink-0 sm:shrink">
            Facility Location
          </dt>
          <dd class="text-right sm:text-left">
            <span class="font-semibold text-charcoal block">{{ clinicInfo.address.full }}</span>
            <div class="flex items-center justify-end sm:justify-start gap-2.5 mt-1">
              <a
                :href="clinicInfo.address.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-[11px] font-semibold text-pine hover:underline"
              >
                <UiIcon
                  name="i-lucide-map-pin"
                  class="text-xs"
                  aria-hidden="true"
                />
                <span>Open in Maps</span>
                <UiIcon
                  name="i-lucide-external-link"
                  class="text-[11px]"
                  aria-hidden="true"
                />
              </a>
              <span
                class="text-ecru-border"
                aria-hidden="true"
              >•</span>
              <button
                type="button"
                class="inline-flex items-center gap-1 text-[11px] font-semibold text-charcoal-muted hover:text-pine cursor-pointer focus-visible:outline-none"
                @click="copyAddress"
              >
                <UiIcon
                  :name="copiedAddress ? 'i-lucide-check' : 'i-lucide-copy'"
                  class="text-xs"
                  aria-hidden="true"
                />
                <span>{{ copiedAddress ? 'Address Copied' : 'Copy Address' }}</span>
              </button>
            </div>
          </dd>
        </div>

        <!-- Total Clinical Fee -->
        <div class="flex items-center justify-between pt-3.5 border-t border-ecru-border">
          <div>
            <dt class="font-semibold text-charcoal text-sm sm:text-base">
              Total Clinical Fee
            </dt>
            <dd class="text-[11px] text-charcoal-muted font-normal mt-0.5">
              Billed post-treatment • HSA / FSA / Card • OON Superbill generated
            </dd>
          </div>
          <span class="font-bold text-pine text-xl sm:text-2xl font-serif shrink-0 whitespace-nowrap">
            ${{ service.price }}
          </span>
        </div>
      </dl>
    </div>

    <!-- Section: Preparing for Your Clinical Session -->
    <div class="max-w-2xl mx-auto text-left mb-3">
      <h2 class="text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal flex items-center gap-2">
        <UiIcon
          name="i-lucide-clipboard-check"
          class="text-base text-pine"
          aria-hidden="true"
        />
        <span>Preparing for Your Clinical Session</span>
      </h2>
    </div>

    <div class="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-left text-xs">
      <!-- Attire & Footwear Card -->
      <div class="p-3.5 sm:p-4 bg-white rounded-2xl border border-ecru-border">
        <div class="flex items-center gap-2 font-semibold text-pine mb-1">
          <UiIcon
            name="i-lucide-activity"
            class="text-base text-clay"
            aria-hidden="true"
          />
          <span>Session Attire</span>
        </div>
        <p class="text-charcoal-muted leading-relaxed">
          Wear athletic shorts &amp; running shoes. Doctoral assessment includes dynamic 3D motion capture and force-plate symmetry testing.
        </p>
      </div>

      <!-- Parking Protocol Card -->
      <div class="p-3.5 sm:p-4 bg-white rounded-2xl border border-ecru-border">
        <div class="flex items-center gap-2 font-semibold text-pine mb-1">
          <UiIcon
            name="i-lucide-car"
            class="text-base text-pine"
            aria-hidden="true"
          />
          <span>Dedicated Parking</span>
        </div>
        <p class="text-charcoal-muted leading-relaxed">
          Level 1 garage stalls 101–125 are reserved for Apex patients. Elevator connects directly to Suite 300.
        </p>
      </div>

      <!-- Surgeon Notes & Imaging Card -->
      <div class="p-3.5 sm:p-4 bg-white rounded-2xl border border-ecru-border">
        <div class="flex items-center gap-2 font-semibold text-pine mb-1">
          <UiIcon
            name="i-lucide-file-text"
            class="text-base text-pine"
            aria-hidden="true"
          />
          <span>Surgeon Notes</span>
        </div>
        <p class="text-charcoal-muted leading-relaxed">
          Bring any MRI CDs or post-op protocol packets, or submit records directly in the intake section below.
        </p>
      </div>
    </div>

    <!-- Section: Digital Intake Paperwork Module (Direct Intake Action) -->
    <div class="max-w-2xl mx-auto bg-white rounded-2xl border border-ecru-border p-4 sm:p-6 text-left mb-6 no-print">
      <!-- Idle State -->
      <div
        v-if="intakeState === 'idle'"
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-clay-soft text-clay-dark border border-clay/20 text-[11px] font-semibold mb-2">
            <UiIcon
              name="i-lucide-clock"
              class="text-xs"
              aria-hidden="true"
            />
            <span>Action Recommended • 3 Min</span>
          </div>
          <h3 class="text-base font-semibold text-charcoal mb-1">
            Complete Digital Intake Paperwork Ahead of Time
          </h3>
          <p class="text-xs text-charcoal-muted leading-relaxed max-w-md">
            Save 15 minutes at clinic check-in. Share your injury history and primary athletic goals so Dr. {{ clinicianLastName }} can prepare your biomechanics protocol.
          </p>
        </div>

        <UiButton
          size="sm"
          class="rounded-full bg-clay hover:bg-clay-hover text-white font-medium text-xs sm:text-sm px-5 py-2.5 whitespace-nowrap self-start sm:self-center shrink-0"
          trailing-icon="i-lucide-arrow-right"
          @click="intakeState = 'in_progress'"
        >
          Start Intake Now
        </UiButton>
      </div>

      <!-- In Progress State: Interactive Micro-Intake Form -->
      <div
        v-else-if="intakeState === 'in_progress'"
        class="space-y-4"
      >
        <div class="flex items-center justify-between pb-3 border-b border-ecru-border">
          <div>
            <h3 class="text-sm font-semibold text-charcoal">
              Digital Intake Questionnaire
            </h3>
            <p class="text-xs text-charcoal-muted">
              Attaches directly to clinical appointment Ref: {{ bookingRef }}
            </p>
          </div>
          <button
            type="button"
            class="text-xs text-charcoal-muted hover:text-charcoal cursor-pointer"
            @click="intakeState = 'idle'"
          >
            Cancel
          </button>
        </div>

        <!-- Question 1: Primary Goal -->
        <div>
          <label class="block text-xs font-semibold text-charcoal mb-1.5">
            1. What is your primary athletic or functional recovery goal?
          </label>
          <div class="flex flex-wrap gap-1.5 mb-2">
            <button
              v-for="preset in goalPresets"
              :key="preset"
              type="button"
              class="px-2.5 py-1 text-[11px] rounded-full border transition-colors cursor-pointer"
              :class="intakeGoal === preset ? 'bg-pine text-linen border-pine' : 'bg-linen border-ecru-border text-charcoal hover:bg-linen-darker'"
              @click="intakeGoal = preset"
            >
              {{ preset }}
            </button>
          </div>
          <input
            v-model="intakeGoal"
            type="text"
            class="w-full px-3 py-2 text-xs rounded-xl border border-ecru-border bg-linen focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine/20 text-charcoal"
            placeholder="E.g. Return to sprinting without patellar tendon pain"
          >
        </div>

        <!-- Question 2: Pain Rating -->
        <div>
          <label class="block text-xs font-semibold text-charcoal mb-1.5">
            2. Current resting discomfort level (0 = None, 10 = Severe)
          </label>
          <div class="flex items-center gap-1.5">
            <button
              v-for="num in 11"
              :key="num - 1"
              type="button"
              class="w-7 h-7 rounded-lg text-xs font-medium border transition-colors flex items-center justify-center cursor-pointer"
              :class="intakePainScore === (num - 1) ? 'bg-pine text-linen border-pine font-bold' : 'bg-linen border-ecru-border text-charcoal hover:bg-linen-darker'"
              @click="intakePainScore = num - 1"
            >
              {{ num - 1 }}
            </button>
            <span class="text-xs text-charcoal-muted ml-2 font-medium">Score: {{ intakePainScore }}/10</span>
          </div>
        </div>

        <!-- Question 3: Prior Imaging -->
        <div>
          <label class="block text-xs font-semibold text-charcoal mb-1.5">
            3. Prior clinical records or imaging available
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              v-for="opt in imagingOptions"
              :key="opt"
              type="button"
              class="p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between cursor-pointer"
              :class="intakeImaging.includes(opt) ? 'bg-pine/5 border-pine text-pine font-semibold' : 'bg-linen border-ecru-border text-charcoal hover:bg-linen-darker'"
              @click="toggleImaging(opt)"
            >
              <span>{{ opt }}</span>
              <UiIcon
                :name="intakeImaging.includes(opt) ? 'i-lucide-check-circle-2' : 'i-lucide-circle'"
                class="text-sm shrink-0"
                :class="intakeImaging.includes(opt) ? 'text-pine' : 'text-charcoal-muted/40'"
              />
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2 flex justify-end">
          <UiButton
            size="sm"
            class="rounded-full bg-pine hover:bg-pine-light text-linen font-medium text-xs px-6 py-2.5 cursor-pointer"
            trailing-icon="i-lucide-check"
            @click="submitIntake"
          >
            Submit Intake Profile
          </UiButton>
        </div>
      </div>

      <!-- Completed State -->
      <div
        v-else-if="intakeState === 'completed'"
        class="flex items-center gap-3 p-2 text-left"
      >
        <div class="w-9 h-9 rounded-full bg-pine/15 text-pine flex items-center justify-center shrink-0">
          <UiIcon
            name="i-lucide-check"
            class="text-lg text-pine"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-pine">
            Intake Profile Attached to Ref {{ bookingRef }}
          </h3>
          <p class="text-xs text-charcoal-muted">
            Goal "{{ intakeGoal }}" and pain baseline ({{ intakePainScore }}/10) have been transmitted to Dr. {{ clinicianLastName }}'s clinical schedule.
          </p>
        </div>
      </div>
    </div>

    <!-- Action Launchpad: Isolated Mobile & Desktop Views -->
    <div class="max-w-3xl mx-auto no-print">
      <!-- MOBILE VIEW (< sm): 100% Preserved 2-Col Calendar + Full-Width Primary Return -->
      <div class="sm:hidden flex flex-col items-stretch justify-center gap-2.5">
        <!-- Calendar Pair (2-column on mobile) -->
        <div class="grid grid-cols-2 gap-2">
          <!-- Google Calendar -->
          <a
            :href="googleCalendarUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-1.5 rounded-full border border-ecru-border bg-white text-charcoal hover:bg-linen-darker transition-colors px-3 py-2.5 text-xs font-semibold min-h-[44px] whitespace-nowrap text-center shrink-0"
          >
            <UiIcon
              name="i-lucide-calendar-plus"
              class="text-sm text-pine shrink-0"
              aria-hidden="true"
            />
            <span>Google Cal</span>
          </a>

          <!-- Apple Calendar -->
          <UiButton
            variant="outline"
            class="!rounded-full border-ecru-border text-charcoal hover:bg-linen-darker px-3 py-2.5 text-xs font-semibold min-h-[44px] whitespace-nowrap justify-center shrink-0"
            leading-icon="i-simple-icons-apple"
            @click="downloadIcs"
          >
            <span>Apple (.ics)</span>
          </UiButton>
        </div>

        <!-- Return to Home -->
        <UiButton
          to="/"
          class="w-full !rounded-full bg-pine hover:bg-pine-light text-linen font-medium px-6 py-2.5 text-xs min-h-[44px] whitespace-nowrap justify-center shrink-0"
          trailing-icon="i-lucide-arrow-right"
        >
          Return to Home
        </UiButton>
      </div>

      <!-- DESKTOP VIEW (sm: and above): Two-Tiered Hierarchy (Utilities Top Row, Return to Home Centered Below) -->
      <div class="hidden sm:flex sm:flex-col sm:items-center sm:gap-3.5">
        <!-- Utilities Row: Calendar & Print -->
        <div class="flex items-center justify-center gap-3">
          <!-- Google Calendar -->
          <a
            :href="googleCalendarUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-ecru-border bg-white text-charcoal hover:bg-linen-darker transition-colors px-5 py-2.5 text-sm font-semibold min-h-[44px] whitespace-nowrap text-center shrink-0"
          >
            <UiIcon
              name="i-lucide-calendar-plus"
              class="text-base text-pine shrink-0"
              aria-hidden="true"
            />
            <span>Google Calendar</span>
          </a>

          <!-- Apple Calendar -->
          <UiButton
            variant="outline"
            class="!rounded-full border-ecru-border text-charcoal hover:bg-linen-darker px-5 py-2.5 text-sm font-semibold min-h-[44px] whitespace-nowrap justify-center shrink-0"
            leading-icon="i-simple-icons-apple"
            @click="downloadIcs"
          >
            <span>Apple Calendar</span>
          </UiButton>

          <!-- Print Summary -->
          <UiButton
            variant="outline"
            class="!rounded-full border-ecru-border text-charcoal hover:bg-linen-darker px-5 py-2.5 text-sm font-semibold min-h-[44px] whitespace-nowrap shrink-0"
            leading-icon="i-lucide-printer"
            @click="handlePrint"
          >
            <span>Print Summary</span>
          </UiButton>
        </div>

        <!-- Return to Home (Centered Prominent CTA) -->
        <UiButton
          to="/"
          class="!rounded-full bg-pine hover:bg-pine-light text-linen font-medium px-8 py-3 text-sm min-h-[44px] whitespace-nowrap justify-center shrink-0"
          trailing-icon="i-lucide-arrow-right"
        >
          Return to Home
        </UiButton>
      </div>
    </div>

    <!-- Concierge Assistance Line -->
    <p class="text-xs text-charcoal-muted max-w-lg mx-auto mt-6 leading-relaxed no-print">
      Need to reschedule or request mobility accommodations? Call our clinic concierge at
      <a
        :href="`tel:${clinicInfo.phone.tel}`"
        class="font-semibold text-pine underline underline-offset-2 hover:text-pine-light"
      >{{ clinicInfo.phone.display }}</a>
      or reply directly to your confirmation SMS.
    </p>
  </div>
</template>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
  .appointment-confirmed-view {
    padding: 0 !important;
  }
}
</style>
