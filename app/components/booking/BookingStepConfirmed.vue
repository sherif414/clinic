<script setup lang="ts">
import type { ClinicalService, Clinician } from '~/types/booking'

const props = defineProps<{
  bookingRef: string
  service: ClinicalService
  clinician: Clinician
  date: string
  time: string
}>()

function downloadIcs() {
  if (typeof window === 'undefined') return

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Apex Sports & Physical Therapy//Booking Funnel//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${props.service.name} — Apex Physical Therapy`,
    `DESCRIPTION:Clinical assessment with ${props.clinician.name}. Reference: ${props.bookingRef}. Superbill provided post-treatment.`,
    'LOCATION:742 Performance Way, Ste 300, Austin TX 78756',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `apex-appointment-${props.bookingRef.replace('#', '')}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function handlePrint() {
  if (typeof window !== 'undefined') {
    window.print()
  }
}
</script>

<template>
  <div class="p-8 sm:p-12 text-center">
    <!-- Success Icon in Pine -->
    <div class="w-16 h-16 rounded-2xl bg-pine/10 text-pine border border-pine/20 flex items-center justify-center mx-auto mb-5">
      <UiIcon
        name="i-lucide-check-circle-2"
        class="text-3xl text-pine"
      />
    </div>

    <UiBadge
      color="pine"
      variant="subtle"
      class="rounded-full px-3.5 py-1 text-xs font-semibold mb-3 tracking-wider"
    >
      Clinical Evaluation Confirmed
    </UiBadge>

    <h1 class="text-3xl sm:text-4xl font-serif text-charcoal font-medium mb-2 tracking-tight">
      Your Appointment is Reserved
    </h1>
    <p class="text-sm sm:text-base text-charcoal-muted max-w-lg mx-auto mb-8 leading-relaxed">
      A confirmation email and SMS with intake paperwork and calendar invite have been sent to your inbox.
    </p>

    <!-- Summary Card (Pure Flat Layering) -->
    <div class="max-w-xl mx-auto bg-linen rounded-3xl border border-ecru-border p-6 sm:p-8 text-left mb-8">
      <div class="flex items-center justify-between pb-4 border-b border-ecru-border mb-4">
        <span class="text-xs uppercase tracking-wider text-charcoal-muted font-semibold">Reference Code</span>
        <span class="font-mono font-bold text-pine text-base">{{ bookingRef }}</span>
      </div>

      <div class="space-y-3.5 text-xs sm:text-sm">
        <div class="flex justify-between">
          <span class="text-charcoal-muted">Clinical Service</span>
          <span class="font-semibold text-charcoal text-right">{{ service.name }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-charcoal-muted">Doctor / Specialist</span>
          <span class="font-semibold text-charcoal">
            {{ clinician.id === 'any' ? 'First Available Doctoral Specialist' : clinician.name.split(',')[0] }}
          </span>
        </div>
        <div class="flex justify-between">
          <span class="text-charcoal-muted">Scheduled Time</span>
          <span class="font-semibold text-pine">{{ date }} at {{ time }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-charcoal-muted">Facility Location</span>
          <span class="font-semibold text-charcoal text-right">742 Performance Way, Ste 300, Austin TX</span>
        </div>
        <div class="flex justify-between pt-3 border-t border-ecru-border font-serif text-base">
          <div>
            <span class="font-semibold text-charcoal block">Total Fee</span>
            <span class="font-sans text-[11px] text-charcoal-muted font-normal">Billed post-treatment (HSA/FSA/Card)</span>
          </div>
          <span class="font-bold text-pine">${{ service.price }}</span>
        </div>
      </div>
    </div>

    <!-- Instructions & Protocol Handoff Grid -->
    <div class="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left text-xs text-charcoal">
      <div class="p-4 bg-white rounded-2xl border border-ecru-border">
        <div class="flex items-center gap-2 font-semibold text-pine mb-1">
          <UiIcon
            name="i-lucide-car"
            class="text-base text-clay-dark"
          />
          <span>Dedicated Patient Parking</span>
        </div>
        <p class="text-charcoal-muted leading-relaxed">
          Level 1 garage stalls 101–125 are reserved for Apex patients. Elevator connects directly to Suite 300.
        </p>
      </div>

      <div class="p-4 bg-white rounded-2xl border border-ecru-border">
        <div class="flex items-center gap-2 font-semibold text-pine mb-1">
          <UiIcon
            name="i-lucide-file-text"
            class="text-base text-clay-dark"
          />
          <span>Surgeon Notes &amp; Imaging</span>
        </div>
        <p class="text-charcoal-muted leading-relaxed">
          Bring any MRI CDs or post-op protocol packets, or reply directly with attachments to your email.
        </p>
      </div>
    </div>

    <!-- Action Launchpad -->
    <div class="flex flex-wrap items-center justify-center gap-3">
      <UiButton
        variant="outline"
        class="rounded-full border-ecru-border text-charcoal hover:bg-linen-darker px-5 py-2.5"
        leading-icon="i-lucide-calendar-plus"
        @click="downloadIcs"
      >
        Add to Calendar (.ics)
      </UiButton>
      <UiButton
        variant="outline"
        class="rounded-full border-ecru-border text-charcoal hover:bg-linen-darker px-5 py-2.5"
        leading-icon="i-lucide-printer"
        @click="handlePrint"
      >
        Print Summary
      </UiButton>
      <UiButton
        to="/"
        class="rounded-full bg-pine hover:bg-pine-light text-linen font-medium px-7 py-2.5"
        trailing-icon="i-lucide-arrow-right"
      >
        Return to Home
      </UiButton>
    </div>
  </div>
</template>
