<script setup lang="ts">
defineProps<{
  currentStep: number
}>()

const emit = defineEmits<{
  (e: 'select-step', step: number): void
}>()
</script>

<template>
  <nav
    aria-label="Booking Progress"
    class="bg-linen-surface border border-ecru-border rounded-full p-2 sm:px-6 sm:py-3 mb-8"
  >
    <ol class="flex items-center justify-between text-xs">
      <!-- Step 1 -->
      <li class="flex items-center flex-1 last:flex-initial">
        <button
          type="button"
          class="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 rounded-full pr-2"
          :aria-current="currentStep === 1 ? 'step' : undefined"
          @click="emit('select-step', 1)"
        >
          <span
            class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0"
            :class="[
              currentStep === 1 ? 'bg-pine text-linen ring-2 ring-pine/20' : '',
              currentStep > 1 ? 'bg-pine/15 text-pine group-hover:bg-pine group-hover:text-linen' : '',
              currentStep < 1 ? 'bg-linen-darker text-charcoal-muted' : ''
            ]"
          >
            <UiIcon
              v-if="currentStep > 1"
              name="i-lucide-check"
              class="text-sm"
            />
            <span v-else>1</span>
          </span>
          <span
            class="font-semibold transition-colors"
            :class="currentStep === 1 ? 'text-pine' : currentStep > 1 ? 'text-charcoal group-hover:text-pine' : 'text-charcoal-muted'"
          >
            <span class="sr-only">Step 1: </span>
            <span class="hidden sm:inline">1. Service</span>
            <span class="sm:hidden">Service</span>
          </span>
        </button>
        <span
          class="flex-1 h-0.5 mx-2 sm:mx-3 rounded-full transition-colors"
          :class="currentStep > 1 ? 'bg-pine' : 'bg-ecru-border'"
          aria-hidden="true"
        />
      </li>

      <!-- Step 2 -->
      <li class="flex items-center flex-1 last:flex-initial">
        <button
          type="button"
          class="flex items-center gap-2 group rounded-full pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          :class="currentStep >= 2 ? 'cursor-pointer' : 'cursor-not-allowed opacity-80'"
          :disabled="currentStep < 2"
          :aria-current="currentStep === 2 ? 'step' : undefined"
          @click="currentStep > 1 ? emit('select-step', 2) : null"
        >
          <span
            class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0"
            :class="[
              currentStep === 2 ? 'bg-pine text-linen ring-2 ring-pine/20' : '',
              currentStep > 2 ? 'bg-pine/15 text-pine group-hover:bg-pine group-hover:text-linen' : '',
              currentStep < 2 ? 'bg-linen-darker text-charcoal-muted' : ''
            ]"
          >
            <UiIcon
              v-if="currentStep > 2"
              name="i-lucide-check"
              class="text-sm"
            />
            <span v-else>2</span>
          </span>
          <span
            class="font-semibold transition-colors"
            :class="currentStep === 2 ? 'text-pine' : currentStep > 2 ? 'text-charcoal group-hover:text-pine' : 'text-charcoal-muted'"
          >
            <span class="sr-only">Step 2: </span>
            <span class="hidden sm:inline">2. Schedule</span>
            <span class="sm:hidden">Schedule</span>
          </span>
        </button>
        <span
          class="flex-1 h-0.5 mx-2 sm:mx-3 rounded-full transition-colors"
          :class="currentStep > 2 ? 'bg-pine' : 'bg-ecru-border'"
          aria-hidden="true"
        />
      </li>

      <!-- Step 3 -->
      <li class="flex items-center flex-1 last:flex-initial">
        <button
          type="button"
          class="flex items-center gap-2 group rounded-full pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          :class="currentStep >= 3 ? 'cursor-pointer' : 'cursor-not-allowed opacity-80'"
          :disabled="currentStep < 3"
          :aria-current="currentStep === 3 ? 'step' : undefined"
          @click="currentStep > 2 ? emit('select-step', 3) : null"
        >
          <span
            class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0"
            :class="[
              currentStep === 3 ? 'bg-pine text-linen ring-2 ring-pine/20' : '',
              currentStep > 3 ? 'bg-pine/15 text-pine group-hover:bg-pine group-hover:text-linen' : '',
              currentStep < 3 ? 'bg-linen-darker text-charcoal-muted' : ''
            ]"
          >
            <UiIcon
              v-if="currentStep > 3"
              name="i-lucide-check"
              class="text-sm"
            />
            <span v-else>3</span>
          </span>
          <span
            class="font-semibold transition-colors"
            :class="currentStep === 3 ? 'text-pine' : currentStep > 3 ? 'text-charcoal group-hover:text-pine' : 'text-charcoal-muted'"
          >
            <span class="sr-only">Step 3: </span>
            <span class="hidden sm:inline">3. Details</span>
            <span class="sm:hidden">Details</span>
          </span>
        </button>
        <span
          class="flex-1 h-0.5 mx-2 sm:mx-3 rounded-full transition-colors"
          :class="currentStep > 3 ? 'bg-pine' : 'bg-ecru-border'"
          aria-hidden="true"
        />
      </li>

      <!-- Step 4 -->
      <li class="flex items-center">
        <div
          class="flex items-center gap-2"
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
          <span
            class="font-semibold transition-colors"
            :class="currentStep === 4 ? 'text-pine' : 'text-charcoal-muted'"
          >
            <span class="sr-only">Step 4: </span>
            <span class="hidden sm:inline">4. Confirmed</span>
            <span class="sm:hidden">Confirm</span>
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>
