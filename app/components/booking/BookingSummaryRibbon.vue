<script setup lang="ts">
import type { ClinicalService, Clinician } from '~/types/booking'

defineProps<{
  service: ClinicalService
  clinician: Clinician
  date?: string
  time?: string
  showDateTime?: boolean
}>()
</script>

<template>
  <div class="bg-white rounded-2xl border border-ecru-border p-4 sm:px-6 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
    <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-charcoal">
      <span class="inline-flex items-center gap-1.5 font-semibold text-pine">
        <UiIcon
          name="i-lucide-calendar-check"
          class="text-clay-dark text-base"
        />
        {{ service.name }}
      </span>
      <span
        class="text-charcoal-light/50"
        aria-hidden="true"
      >•</span>
      <span class="text-charcoal-muted font-medium">
        {{ clinician.id === 'any' ? 'First Available Specialist' : clinician.name.split(',')[0] }}
      </span>
      <template v-if="showDateTime && date && time">
        <span
          class="text-charcoal-light/50"
          aria-hidden="true"
        >•</span>
        <span class="font-medium text-charcoal">{{ date }} at {{ time }}</span>
      </template>
    </div>
    <div class="flex items-center gap-2.5 ml-auto">
      <UiBadge
        color="secondary"
        variant="subtle"
        class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      >
        HSA/FSA Eligible
      </UiBadge>
      <span class="font-serif text-lg font-bold text-pine">${{ service.price }}</span>
    </div>
  </div>
</template>
