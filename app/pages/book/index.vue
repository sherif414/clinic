<script setup lang="ts">
import type { ClinicalService, Clinician, PatientForm } from '~/types/booking'

const route = useRoute()

// Multistep state
const currentStep = ref(1)

// Service Selection State
const services: ClinicalService[] = [
  {
    id: 'initial_eval',
    name: 'Initial Clinical Assessment & Treatment',
    badge: 'Recommended',
    price: 175,
    duration: '60 Min',
    description: 'Comprehensive doctoral evaluation, motion diagnostics, force plate baseline, and immediate hands-on treatment.',
    features: ['Doctor of Physical Therapy led', 'Superbill provided for OON insurance', 'Personalized recovery roadmap']
  },
  {
    id: 'post_op',
    name: 'Post-Op Surgical Rehabilitation Evaluation',
    badge: 'Surgical Protocol',
    price: 175,
    duration: '60 Min',
    description: 'Acute post-discharge assessment, graft protection review, swelling drainage, and phase 1–4 return-to-sport planning.',
    features: ['Surgeon protocol co-management', 'Objective limb symmetry testing', 'Superbill provided for OON insurance']
  },
  {
    id: 'biomech_gait',
    name: 'Biomechanical Running & Gait Analysis',
    badge: 'Athletic Lab',
    price: 195,
    duration: '75 Min',
    description: 'High-speed multi-angle video assessment, synchronized force plate cadence analytics, and custom footwear recommendations.',
    features: ['Force vector ground reaction', 'Kinematic pelvic drop analysis', 'Frame-by-frame video report']
  },
  {
    id: 'recovery_suite',
    name: 'Performance Recovery & Tissue Modulation',
    badge: 'Elite Athletic Suite',
    price: 95,
    duration: '45 Min',
    description: 'Targeted tissue therapy including dry needling, Normatec 3 pneumatic compression, and Delfi BFR training.',
    features: ['Normatec 3 compression', 'Dry needling & e-stim', 'Metabolic clearance']
  }
]

// Service query parameter normalization
const serviceParamMap: Record<string, string> = {
  'post-op': 'post_op',
  'post_op': 'post_op',
  'biomech_gait': 'biomech_gait',
  'biomech-gait': 'biomech_gait',
  'gait': 'biomech_gait',
  'recovery_suite': 'recovery_suite',
  'recovery-suite': 'recovery_suite',
  'recovery': 'recovery_suite',
  'initial_eval': 'initial_eval',
  'initial-eval': 'initial_eval',
  'initial': 'initial_eval'
}

const resolveServiceParam = (queryVal: unknown): string => {
  if (typeof queryVal === 'string' && serviceParamMap[queryVal.toLowerCase()]) {
    return serviceParamMap[queryVal.toLowerCase()]!
  }
  return 'initial_eval'
}

const selectedServiceId = ref(resolveServiceParam(route.query.service))

const selectedService = computed(() => {
  return services.find(s => s.id === selectedServiceId.value) ?? services[0]!
})

// Clinician & Date/Time State
const clinicians: Clinician[] = [
  { id: 'any', name: 'First Available Specialist', specialty: 'Fastest appointment with our doctoral team' },
  { id: 'vance', name: 'Dr. Marcus Vance, PT, DPT, OCS', specialty: 'Knee & Shoulder Reconstruction' },
  { id: 'rostova', name: 'Dr. Elena Rostova, PT, DPT, SCS', specialty: 'Biomechanics & Running Gait' },
  { id: 'hayes', name: 'Dr. Julian Hayes, PT, DPT, FAAOMPT', specialty: 'Spine & Complex Joint Rehab' }
]

const resolveClinicianParam = (queryVal: unknown): string => {
  if (typeof queryVal === 'string') {
    const clean = queryVal.toLowerCase()
    if (clinicians.some(c => c.id === clean)) {
      return clean
    }
  }
  return 'any'
}

const selectedClinicianId = ref(resolveClinicianParam(route.query.clinician))
const selectedClinician = computed(() => {
  return clinicians.find(c => c.id === selectedClinicianId.value) ?? clinicians[0]!
})

// Keep route query synchronized
watch(() => route.query, (newQuery) => {
  if (newQuery.service) {
    selectedServiceId.value = resolveServiceParam(newQuery.service)
  }
  if (newQuery.clinician) {
    selectedClinicianId.value = resolveClinicianParam(newQuery.clinician)
  }
})

// Date and slot options
const selectedDate = ref('Thursday, Oct 23, 2025')
const selectedTime = ref('9:15 AM')

const morningSlots = ['8:30 AM', '9:15 AM', '10:30 AM', '11:15 AM']
const afternoonSlots = ['1:00 PM', '2:15 PM', '3:30 PM', '4:45 PM']

// Patient Form State
const patientForm = reactive<PatientForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  injuryArea: 'Knee / ACL Reconstruction',
  notes: '',
  isFirstVisit: true,
  hasReferral: false
})

const injuryOptions = [
  'Knee / ACL Reconstruction',
  'Shoulder / Rotator Cuff / Labrum',
  'Spine / Lumbar / Neck Care',
  'Hip / Groin / Impingement',
  'Foot & Ankle / Achilles',
  'Running Biomechanics / Gait',
  'General Athletic Conditioning'
]

// Confirmation code
const bookingRef = ref('#APX-84920')

function goToStep(step: number) {
  if (step >= 1 && step <= 4) {
    currentStep.value = step
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

function handleConfirm() {
  bookingRef.value = `#APX-${Math.floor(10000 + Math.random() * 90000)}`
  goToStep(4)
}
</script>

<template>
  <div
    class="py-5 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    :class="{ 'max-w-3xl': currentStep === 4 }"
  >
    <!-- Breadcrumb & Direct Access Notice (Active during wizard steps) -->
    <div
      v-if="currentStep < 4"
      class="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
    >
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-charcoal-muted hover:text-pine transition-colors"
      >
        <UiIcon
          name="i-lucide-arrow-left"
          class="text-base"
        />
        <span>Back to Home</span>
      </NuxtLink>
      <span class="text-xs font-semibold text-charcoal-muted tracking-wide">
        Direct Access Intake • Confidential &amp; HIPAA Compliant
      </span>
    </div>

    <!-- Stepper Navigation Bar (Only displayed during active booking steps) -->
    <BookingStepper
      v-if="currentStep < 4"
      :current-step="currentStep"
      @select-step="goToStep"
    />

    <!-- Active Summary Ribbon (Shown on Steps 2 & 3) -->
    <BookingSummaryRibbon
      v-if="currentStep === 2 || currentStep === 3"
      :service="selectedService"
      :clinician="selectedClinician"
      :date="selectedDate"
      :time="selectedTime"
      :show-date-time="currentStep === 3"
    />

    <!-- Main Funnel Card (Pure Flat Tonal Layering) -->
    <div
      class="bg-white rounded-3xl border border-ecru-border overflow-hidden"
      role="region"
      aria-live="polite"
      aria-label="Clinical Booking Funnel"
    >
      <!-- Step 1: Select Service -->
      <BookingStepService
        v-if="currentStep === 1"
        v-model="selectedServiceId"
        :services="services"
        @next="goToStep(2)"
      />

      <!-- Step 2: Date & Time -->
      <BookingStepDateTime
        v-else-if="currentStep === 2"
        v-model:selected-clinician-id="selectedClinicianId"
        v-model:selected-date="selectedDate"
        v-model:selected-time="selectedTime"
        :clinicians="clinicians"
        :morning-slots="morningSlots"
        :afternoon-slots="afternoonSlots"
        @back="goToStep(1)"
        @next="goToStep(3)"
      />

      <!-- Step 3: Patient Details -->
      <BookingStepPatient
        v-else-if="currentStep === 3"
        v-model="patientForm"
        :injury-options="injuryOptions"
        @back="goToStep(2)"
        @submit="handleConfirm"
      />

      <!-- Step 4: Confirmed -->
      <BookingStepConfirmed
        v-else-if="currentStep === 4"
        :booking-ref="bookingRef"
        :service="selectedService"
        :clinician="selectedClinician"
        :date="selectedDate"
        :time="selectedTime"
      />
    </div>
  </div>
</template>
