<script setup lang="ts">
interface StepItem {
  step: number
  label: string
  desktopLabel: string
}

defineProps<{
  currentStep: number
}>()

const emit = defineEmits<{
  (e: 'select-step', step: number): void
}>()

const steps: StepItem[] = [
  { step: 1, label: 'Service', desktopLabel: '1. Service' },
  { step: 2, label: 'Schedule', desktopLabel: '2. Schedule' },
  { step: 3, label: 'Details', desktopLabel: '3. Details' },
  { step: 4, label: 'Confirmed', desktopLabel: '4. Confirmed' }
]
</script>

<template>
  <nav
    aria-label="Booking Progress"
    class="bg-linen-surface border border-ecru-border rounded-full px-2.5 py-2 sm:px-6 sm:py-3 mb-8 w-full max-w-full"
  >
    <ol class="flex items-center justify-between text-xs w-full">
      <li
        v-for="(item, idx) in steps"
        :key="item.step"
        class="flex items-center"
        :class="idx < steps.length - 1 ? 'flex-auto min-w-0' : 'shrink-0'"
      >
        <!-- Step Button (Steps 1-3) -->
        <button
          v-if="item.step < 4"
          type="button"
          class="flex items-center gap-1.5 sm:gap-2 group rounded-full shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 touch-manipulation py-0.5"
          :class="[
            item.step < currentStep && currentStep < 4 ? 'cursor-pointer' : 'cursor-default',
            item.step > currentStep ? 'opacity-80' : '',
            currentStep === item.step ? 'pr-1.5 sm:pr-2' : 'pr-0 sm:pr-2'
          ]"
          :disabled="item.step > currentStep || currentStep >= 4"
          :aria-current="currentStep === item.step ? 'step' : undefined"
          @click="item.step < currentStep && currentStep < 4 ? emit('select-step', item.step) : null"
        >
          <span
            class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0"
            :class="[
              currentStep === item.step ? 'bg-pine text-linen ring-2 ring-pine/20' : '',
              currentStep > item.step ? 'bg-pine/15 text-pine group-hover:bg-pine group-hover:text-linen' : '',
              currentStep < item.step ? 'bg-linen-darker text-charcoal-muted' : ''
            ]"
          >
            <UiIcon
              v-if="currentStep > item.step"
              name="i-lucide-check"
              class="text-sm"
            />
            <span v-else>{{ item.step }}</span>
          </span>

          <span class="sr-only">Step {{ item.step }}: {{ item.label }}</span>
          <span
            aria-hidden="true"
            class="font-semibold whitespace-nowrap transition-colors"
            :class="[
              currentStep === item.step
                ? 'text-pine inline'
                : currentStep > item.step
                  ? 'text-charcoal group-hover:text-pine hidden sm:inline'
                  : 'text-charcoal-muted hidden sm:inline'
            ]"
          >
            <span class="hidden sm:inline">{{ item.desktopLabel }}</span>
            <span class="sm:hidden">{{ item.label }}</span>
          </span>
        </button>

        <!-- Step 4 (Target / Goal Step, non-interactive) -->
        <div
          v-else
          class="flex items-center gap-1.5 sm:gap-2 shrink-0"
          :class="currentStep === 4 ? 'pr-1.5 sm:pr-2' : 'pr-0 sm:pr-2'"
          :aria-current="currentStep === 4 ? 'step' : undefined"
        >
          <span
            class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0"
            :class="currentStep === 4 ? 'bg-pine text-linen ring-2 ring-pine/20' : 'bg-linen-darker text-charcoal-muted'"
          >
            <UiIcon
              v-if="currentStep === 4"
              name="i-lucide-check"
              class="text-sm"
            />
            <span v-else>4</span>
          </span>

          <span class="sr-only">Step 4: Confirmed</span>
          <span
            aria-hidden="true"
            class="font-semibold whitespace-nowrap transition-colors"
            :class="currentStep === 4 ? 'text-pine inline' : 'text-charcoal-muted hidden sm:inline'"
          >
            <span class="hidden sm:inline">4. Confirmed</span>
            <span class="sm:hidden">Confirmed</span>
          </span>
        </div>

        <!-- Connector Line between steps -->
        <span
          v-if="idx < steps.length - 1"
          class="flex-1 h-0.5 mx-1.5 sm:mx-3 rounded-full transition-colors min-w-2"
          :class="currentStep > item.step ? 'bg-pine' : 'bg-ecru-border'"
          aria-hidden="true"
        />
      </li>
    </ol>
  </nav>
</template>
