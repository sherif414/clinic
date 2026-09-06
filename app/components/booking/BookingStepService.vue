<script setup lang="ts">
import type { ClinicalService } from '~/types/booking'

defineProps<{
  services: ClinicalService[]
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'next'): void
}>()
</script>

<template>
  <div class="p-6 sm:p-10">
    <div class="max-w-2xl mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clay-soft text-clay-dark border border-clay/20 text-[11px] font-semibold tracking-wider mb-3">
        <UiIcon
          name="i-lucide-stethoscope"
          class="text-sm text-clay-dark"
        />
        <span>Direct Access Protocol</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-serif text-charcoal font-medium mb-2 tracking-tight">
        Select Your Clinical Service
      </h1>
      <p class="text-sm sm:text-base text-charcoal-muted">
        Direct 1-on-1 doctoral care with fellowship-trained physical therapists. Zero referral needed in Texas.
      </p>
    </div>

    <!-- Service Cards List powered by Reka UI RadioGroup -->
    <RadioGroupRoot
      :model-value="modelValue"
      class="space-y-4 mb-8"
      aria-label="Clinical Service Options"
      @update:model-value="emit('update:modelValue', $event as string)"
    >
      <RadioGroupItem
        v-for="service in services"
        :key="service.id"
        :value="service.id"
        class="relative w-full text-left rounded-2xl border-2 p-5 sm:p-6 transition-all cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
        :class="modelValue === service.id ? 'border-pine bg-pine/[0.02]' : 'border-ecru-border bg-white hover:border-pine-light hover:bg-linen/40'"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <!-- Custom Radio Indicator with Reka UI Indicator -->
            <div
              class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 bg-linen transition-colors"
              :class="modelValue === service.id ? 'border-pine' : 'border-ecru-muted'"
            >
              <RadioGroupIndicator class="flex items-center justify-center w-full h-full">
                <div class="h-2.5 w-2.5 rounded-full bg-pine" />
              </RadioGroupIndicator>
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2.5 mb-1.5">
                <h2 class="font-sans text-lg sm:text-xl font-semibold text-charcoal">
                  {{ service.name }}
                </h2>
                <UiBadge
                  v-if="service.badge"
                  color="secondary"
                  variant="subtle"
                  class="rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider"
                >
                  {{ service.badge }}
                </UiBadge>
              </div>
              <p class="text-xs sm:text-sm text-charcoal-muted mb-3 max-w-xl leading-relaxed">
                {{ service.description }}
              </p>
              <div class="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-charcoal-muted">
                <span
                  v-for="(feat, idx) in service.features"
                  :key="idx"
                  class="flex items-center gap-1.5 text-charcoal"
                >
                  <UiIcon
                    name="i-lucide-check"
                    class="text-clay-dark text-sm"
                  />
                  {{ feat }}
                </span>
              </div>
            </div>
          </div>

          <!-- Price & Duration -->
          <div class="text-right shrink-0">
            <div class="font-serif text-2xl sm:text-3xl text-pine font-semibold">
              ${{ service.price }}
            </div>
            <div class="text-xs font-medium uppercase tracking-wider text-charcoal-muted flex items-center justify-end gap-1 mt-0.5">
              <UiIcon
                name="i-lucide-clock"
                class="text-xs"
              />
              {{ service.duration }}
            </div>
          </div>
        </div>
      </RadioGroupItem>
    </RadioGroupRoot>

    <!-- Next Button -->
    <div class="flex justify-end pt-4 border-t border-ecru-border">
      <UiButton
        size="lg"
        class="rounded-full bg-pine hover:bg-pine-light text-linen font-medium px-8 py-3.5"
        trailing-icon="i-lucide-arrow-right"
        @click="emit('next')"
      >
        Continue to Date &amp; Time
      </UiButton>
    </div>
  </div>
</template>
