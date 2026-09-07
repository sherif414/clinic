<script setup lang="ts">
import type { PatientForm } from '~/types/booking'

defineProps<{
  injuryOptions: string[]
}>()

const emit = defineEmits<{
  back: []
  submit: []
}>()

const form = defineModel<PatientForm>({ required: true })
</script>

<template>
  <div class="p-6 sm:p-10 space-y-8">
    <div>
      <h2 class="text-2xl sm:text-3xl font-serif text-charcoal font-medium mb-1 tracking-tight">
        Patient &amp; Clinical Details
      </h2>
      <p class="text-xs sm:text-sm text-charcoal-muted">
        Please enter your contact information and brief clinical history.
      </p>
    </div>

    <form
      class="space-y-6"
      @submit.prevent="emit('submit')"
    >
      <!-- Name Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            for="patient-first-name"
            class="block text-xs font-semibold text-charcoal mb-1.5"
          >
            First Name *
          </label>
          <input
            id="patient-first-name"
            v-model="form.firstName"
            type="text"
            required
            autocomplete="given-name"
            placeholder="Marcus"
            class="w-full px-4 py-2.5 rounded-xl border border-ecru-border focus:border-pine focus:ring-2 focus:ring-pine/20 focus:outline-none text-sm bg-linen/20 transition-all"
          >
        </div>
        <div>
          <label
            for="patient-last-name"
            class="block text-xs font-semibold text-charcoal mb-1.5"
          >
            Last Name *
          </label>
          <input
            id="patient-last-name"
            v-model="form.lastName"
            type="text"
            required
            autocomplete="family-name"
            placeholder="Sterling"
            class="w-full px-4 py-2.5 rounded-xl border border-ecru-border focus:border-pine focus:ring-2 focus:ring-pine/20 focus:outline-none text-sm bg-linen/20 transition-all"
          >
        </div>
      </div>

      <!-- Contact Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            for="patient-email"
            class="block text-xs font-semibold text-charcoal mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="patient-email"
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            placeholder="athlete@example.com"
            class="w-full px-4 py-2.5 rounded-xl border border-ecru-border focus:border-pine focus:ring-2 focus:ring-pine/20 focus:outline-none text-sm bg-linen/20 transition-all"
          >
        </div>
        <div>
          <label
            for="patient-phone"
            class="block text-xs font-semibold text-charcoal mb-1.5"
          >
            Mobile Phone *
          </label>
          <input
            id="patient-phone"
            v-model="form.phone"
            type="tel"
            required
            autocomplete="tel"
            placeholder="(512) 555-0199"
            class="w-full px-4 py-2.5 rounded-xl border border-ecru-border focus:border-pine focus:ring-2 focus:ring-pine/20 focus:outline-none text-sm bg-linen/20 transition-all"
          >
        </div>
      </div>

      <!-- Clinical Focus Area -->
      <div>
        <label
          for="patient-injury-area"
          class="block text-xs font-semibold text-charcoal mb-1.5"
        >
          Primary Focus Area
        </label>
        <select
          id="patient-injury-area"
          v-model="form.injuryArea"
          class="w-full px-4 py-2.5 rounded-xl border border-ecru-border focus:border-pine focus:ring-2 focus:ring-pine/20 focus:outline-none text-sm bg-linen/20 transition-all"
        >
          <option
            v-for="opt in injuryOptions"
            :key="opt"
            :value="opt"
          >
            {{ opt }}
          </option>
        </select>
      </div>

      <!-- Notes -->
      <div>
        <label
          for="patient-notes"
          class="block text-xs font-semibold text-charcoal mb-1.5"
        >
          Brief Description of Injury or Performance Goal
        </label>
        <textarea
          id="patient-notes"
          v-model="form.notes"
          rows="3"
          placeholder="e.g. ACL surgery 6 weeks ago; aiming for return to soccer. Or persistent Achilles tightness during 10k training."
          class="w-full px-4 py-2.5 rounded-xl border border-ecru-border focus:border-pine focus:ring-2 focus:ring-pine/20 focus:outline-none text-sm bg-linen/20 transition-all"
        />
      </div>

      <!-- Checkboxes & Progressive Disclosure -->
      <div class="space-y-3 pt-2">
        <div class="flex items-center gap-3">
          <input
            id="patient-first-visit"
            v-model="form.isFirstVisit"
            type="checkbox"
            class="w-4 h-4 rounded border-ecru-border text-pine focus:ring-pine"
          >
          <label
            for="patient-first-visit"
            class="cursor-pointer text-xs sm:text-sm text-charcoal select-none"
          >
            This is my first visit to Apex Sports &amp; Physical Therapy
          </label>
        </div>
        <div>
          <div class="flex items-center gap-3">
            <input
              id="patient-has-referral"
              v-model="form.hasReferral"
              type="checkbox"
              aria-controls="referral-protocol-note"
              :aria-expanded="form.hasReferral"
              class="w-4 h-4 rounded border-ecru-border text-pine focus:ring-pine"
            >
            <label
              for="patient-has-referral"
              class="cursor-pointer text-xs sm:text-sm text-charcoal select-none"
            >
              I have a physician referral / surgical operative report (Optional)
            </label>
          </div>
          <!-- Progressive Disclosure Note -->
          <div
            v-if="form.hasReferral"
            id="referral-protocol-note"
            role="region"
            aria-live="polite"
            class="mt-2.5 ml-7 p-3 rounded-xl bg-linen-surface border border-ecru-border text-xs text-charcoal-muted leading-relaxed"
          >
            <span class="font-semibold text-pine block mb-0.5">Surgeon Protocol Co-Management:</span>
            Please bring your operative notes, imaging CD/report, or surgeon protocol to your appointment. You can also reply directly with attachments to your confirmation email.
          </div>
        </div>
      </div>

      <!-- Trust, Superbill & Financial Guarantee Card -->
      <div class="bg-linen-surface border border-ecru-border rounded-2xl p-4 sm:p-5 space-y-3">
        <div class="flex items-center gap-2 text-xs font-semibold text-pine tracking-wider">
          <UiIcon
            name="i-lucide-shield-check"
            class="text-clay-dark text-base"
          />
          <span>Apex Care &amp; Billing Commitment</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-charcoal">
          <div class="flex items-start gap-2.5">
            <UiIcon
              name="i-lucide-credit-card"
              class="text-pine shrink-0 mt-0.5 text-base"
            />
            <div>
              <span class="font-semibold block text-charcoal mb-0.5">No Prepayment Required</span>
              <span class="text-charcoal-muted leading-relaxed">No card charged today. Fee is collected post-treatment via Card, HSA, or FSA.</span>
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <UiIcon
              name="i-lucide-file-text"
              class="text-pine shrink-0 mt-0.5 text-base"
            />
            <div>
              <span class="font-semibold block text-charcoal mb-0.5">Itemized Superbill</span>
              <span class="text-charcoal-muted leading-relaxed">CPT &amp; ICD-10 diagnostic codes emailed within 24h for direct insurance reimbursement.</span>
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <UiIcon
              name="i-lucide-calendar-x"
              class="text-pine shrink-0 mt-0.5 text-base"
            />
            <div>
              <span class="font-semibold block text-charcoal mb-0.5">Flexible Cancellation</span>
              <span class="text-charcoal-muted leading-relaxed">Complimentary reschedule or cancellation up to 24 hours prior to your evaluation.</span>
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
          type="submit"
          size="lg"
          class="rounded-full bg-pine hover:bg-pine-light text-linen font-medium px-8 py-3.5"
          trailing-icon="i-lucide-calendar-check"
        >
          Confirm Appointment
        </UiButton>
      </div>
    </form>
  </div>
</template>
