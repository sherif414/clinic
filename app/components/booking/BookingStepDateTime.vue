<script setup lang="ts">
import type { DateValue, CalendarDate } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
import type { Clinician } from '~/types/booking'

defineProps<{
  clinicians: Clinician[]
  selectedClinicianId: string
  selectedDate: string
  selectedTime: string
  morningSlots: string[]
  afternoonSlots: string[]
}>()

const emit = defineEmits<{
  'update:selectedClinicianId': [id: string]
  'update:selectedDate': [date: string]
  'update:selectedTime': [time: string]
  'back': []
  'next': []
}>()

const tz = getLocalTimeZone()
const df = new DateFormatter('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

// Current date
const now = today(tz)

// Initialize date from tomorrow
const calendarDate = shallowRef<CalendarDate>(now.add({ days: 1 }))

// Keep prop synced
watch(calendarDate, (val) => {
  if (val) {
    emit('update:selectedDate', df.format(val.toDate(tz)))
  }
}, { immediate: true })

// Mark Sundays as unavailable (clinic closed)
const isDateUnavailable = (date: DateValue) => {
  return date.toDate(tz).getDay() === 0
}
</script>

<template>
  <div class="p-6 sm:p-10">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
      <div>
        <h1 class="text-2xl sm:text-3xl font-serif text-charcoal font-medium tracking-tight">
          Select Date &amp; Clinic Time Slot
        </h1>
        <p class="text-xs sm:text-sm text-charcoal-muted mt-0.5">
          Appointments scheduled in Central Time (Austin Clinic, CT).
        </p>
      </div>
    </div>

    <!-- Clinician Selector -->
    <div class="mb-8 p-4 sm:p-5 bg-linen rounded-2xl border border-ecru-border">
      <div class="flex items-center justify-between mb-3">
        <label class="block text-xs font-semibold text-charcoal uppercase tracking-wider">
          Select Treating Clinician
        </label>
        <span class="text-xs text-charcoal-muted">All appointments are 1-on-1 with a Doctor of PT</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <button
          v-for="doc in clinicians"
          :key="doc.id"
          type="button"
          :aria-pressed="selectedClinicianId === doc.id"
          class="p-3.5 text-left rounded-xl border transition-all text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          :class="selectedClinicianId === doc.id ? 'border-pine bg-white ring-1 ring-pine' : 'border-ecru-border bg-white/70 hover:bg-white'"
          @click="emit('update:selectedClinicianId', doc.id)"
        >
          <div class="flex items-center justify-between mb-1">
            <span class="font-semibold text-charcoal text-sm">{{ doc.name.split(',')[0] }}</span>
            <span
              v-if="doc.id === 'any'"
              class="text-[11px] font-semibold text-pine bg-pine/10 px-1.5 py-0.5 rounded-full"
            >
              Recommended
            </span>
          </div>
          <span
            v-if="doc.name.split(',').length > 1"
            class="block text-xs text-clay-dark font-medium"
          >
            {{ doc.name.split(',').slice(1).join(',') }}
          </span>
          <span class="block text-xs text-charcoal-muted mt-1 leading-snug">{{ doc.specialty }}</span>
        </button>
      </div>
    </div>

    <!-- Calendar + Slots Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 bg-linen p-5 rounded-2xl border border-ecru-border mb-8">
      <!-- Reka UI Calendar Component (5 cols) -->
      <div class="md:col-span-5 bg-white p-3 sm:p-4 rounded-2xl border border-ecru-border flex flex-col justify-between">
        <UiCalendar
          v-model="calendarDate"
          :min-value="now"
          :is-date-unavailable="isDateUnavailable"
          class="w-full flex flex-col"
        />
        <div class="mt-4 pt-3 border-t border-ecru-border text-xs flex items-center justify-between">
          <span class="flex items-center gap-1.5 text-pine font-medium">
            <span class="w-2 h-2 rounded-full bg-pine" /> Available
          </span>
          <span class="font-semibold text-pine">{{ selectedDate }}</span>
        </div>
      </div>

      <!-- Time Slots (7 cols) -->
      <div class="md:col-span-7 flex flex-col justify-between space-y-4">
        <!-- Morning -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-charcoal-muted uppercase tracking-wider flex items-center gap-1.5">
              <UiIcon
                name="i-lucide-sun"
                class="text-clay text-sm"
              />
              Morning (8:00 AM – 12:00 PM)
            </span>
            <span class="text-xs text-charcoal-muted font-medium">4 SLOTS OPEN</span>
          </div>
          <div class="grid grid-cols-2 gap-2.5">
            <button
              v-for="slot in morningSlots"
              :key="slot"
              type="button"
              :aria-pressed="selectedTime === slot"
              class="py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
              :class="selectedTime === slot ? 'bg-pine text-white border-pine' : 'bg-white border-ecru-border text-charcoal hover:border-pine hover:bg-linen'"
              @click="emit('update:selectedTime', slot)"
            >
              {{ slot }}
            </button>
          </div>
        </div>

        <!-- Afternoon -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-charcoal-muted uppercase tracking-wider flex items-center gap-1.5">
              <UiIcon
                name="i-lucide-sunset"
                class="text-clay text-sm"
              />
              Afternoon (1:00 PM – 5:30 PM)
            </span>
            <span class="text-xs text-charcoal-muted font-medium">4 SLOTS OPEN</span>
          </div>
          <div class="grid grid-cols-2 gap-2.5">
            <button
              v-for="slot in afternoonSlots"
              :key="slot"
              type="button"
              :aria-pressed="selectedTime === slot"
              class="py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
              :class="selectedTime === slot ? 'bg-pine text-white border-pine' : 'bg-white border-ecru-border text-charcoal hover:border-pine hover:bg-linen'"
              @click="emit('update:selectedTime', slot)"
            >
              {{ slot }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex items-center justify-between pt-4 border-t border-ecru-border">
      <UiButton
        variant="outline"
        class="rounded-full border-ecru-border text-charcoal px-6 py-2.5 hover:bg-linen-darker"
        @click="emit('back')"
      >
        Back
      </UiButton>
      <UiButton
        size="lg"
        class="rounded-full bg-pine hover:bg-pine-light text-linen font-medium px-8 py-3.5"
        trailing-icon="i-lucide-arrow-right"
        @click="emit('next')"
      >
        Continue to Patient Details
      </UiButton>
    </div>
  </div>
</template>
