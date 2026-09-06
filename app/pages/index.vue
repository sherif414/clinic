<script setup lang="ts">
const faqs = [
  {
    question: 'Do I need a physician referral or prescription before booking?',
    answer: 'No. Under Texas Direct Access legislation, you can be evaluated and treated directly by a Doctor of Physical Therapy for up to 10–15 consecutive business days without a physician prescription. If your recovery plan requires ongoing care beyond the Direct Access window, our clinical team coordinates directly with your primary care doctor or orthopedic specialist to secure necessary documentation without you having to schedule extra doctor visits.'
  },
  {
    question: 'How does out-of-network insurance and Superbill reimbursement work?',
    answer: 'Apex operates on an out-of-network, fee-for-service model so our clinicians can deliver dedicated 1-on-1 care without the arbitrary treatment limits, mandatory group therapy, or rushed 15-minute visits enforced by in-network insurers. Following each appointment, we automatically provide an itemized medical Superbill with all required diagnostic (ICD-10) and treatment (CPT) codes. Most patients with PPO health plans submit these electronically and receive 50%–80% direct reimbursement according to their out-of-network benefits. You can also pay directly using HSA or FSA cards.'
  },
  {
    question: 'What happens during my initial 60-minute clinical evaluation?',
    answer: 'Your first session is conducted 100% by your board-certified Doctor of Physical Therapy. We begin with a comprehensive clinical history and movement diagnostic, conduct baseline force plate symmetry and joint mobility testing, and deliver immediate hands-on manual therapy or tissue treatment. You will leave session one with pain relief strategies, an initial home recovery routine, and a transparent milestone roadmap outlining your expected recovery timeline.'
  },
  {
    question: 'How do you coordinate with my surgeon if I am recovering from surgery?',
    answer: 'For post-operative patients (ACL reconstructions, rotator cuff repairs, labral repairs, spinal procedures), we request and review your surgeon\'s specific surgical notes and operative protocol prior to visit one. We conduct objective limb symmetry dynamometry at each phase transition and fax/email clinical progress summaries directly to your orthopedic surgical team before your follow-up MD consultations.'
  },
  {
    question: 'I am an active amateur or weekend runner, not a pro athlete. Is Apex right for me?',
    answer: 'Absolutely. Over 60% of our patients are active professionals, marathon runners, CrossFitters, and recreational tennis or pickleball players. We believe everyone deserves the same caliber of diagnostic technology, 1-on-1 doctoral focus, and objective return-to-activity testing typically reserved for professional sports franchises.'
  },
  {
    question: 'What should I wear and bring to my initial consultation?',
    answer: 'Please wear comfortable athletic clothing that permits uninhibited movement and full visual inspection of the injured joint (e.g. shorts for knee/hip/ankle injuries, athletic tank or sports bra for shoulder/neck injuries). If you are undergoing a running gait analysis, please bring your primary running shoes. Also bring any relevant MRI/X-ray reports or surgeon discharge instructions.'
  }
]

const openFaqIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="relative pt-12 pb-20 lg:py-24 overflow-hidden bg-linen">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left Column -->
          <div class="lg:col-span-6 flex flex-col items-start">
            <!-- Pill Badge -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-ecru-border text-pine text-xs font-medium tracking-wide mb-8">
              <span class="w-2 h-2 rounded-full bg-clay" />
              <span class="tracking-wider uppercase text-[11px] font-semibold text-charcoal">Accepting New Patients</span>
            </div>

            <!-- Headline -->
            <h1 class="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal text-pine leading-[1.12] tracking-tight mb-6 text-balance max-w-2xl">
              Targeted Sports Rehab to Get You <span class="italic font-serif">Back in the Game.</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg text-charcoal-muted mb-8 max-w-xl font-normal leading-relaxed">
              Evidence-based clinical rehabilitation, biomechanical analysis, and 1-on-1 sports physical therapy tailored for competitive athletes and active professionals.
            </p>

            <!-- CTA Buttons with Nuxt UI -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-3 w-full sm:w-auto">
              <UiButton
                to="/book"
                size="lg"
                class="w-full sm:w-auto justify-center rounded-full bg-pine hover:bg-pine-light text-linen font-medium text-sm sm:text-base px-7 py-3.5 border border-transparent hover:border-pine-dark transition-all duration-200"
                trailing-icon="i-lucide-arrow-right"
              >
                Book Assessment
              </UiButton>
              <UiButton
                to="#specialties"
                size="lg"
                variant="outline"
                class="w-full sm:w-auto justify-center rounded-full bg-white hover:bg-linen-darker text-pine border-ecru-border font-medium text-sm sm:text-base px-7 py-3.5 transition-all duration-200"
              >
                View Specialties
              </UiButton>
            </div>

            <!-- Booking Commitment Reassurance Microcopy -->
            <div class="flex items-start gap-2 text-xs text-charcoal-muted mb-8">
              <UiIcon
                name="i-lucide-shield-check"
                class="text-pine text-sm shrink-0 mt-0.5"
              />
              <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 leading-relaxed">
                <span class="whitespace-nowrap">No upfront payment required</span>
                <span class="hidden sm:inline text-charcoal-light">&bull;</span>
                <span class="whitespace-nowrap">Free cancellation up to 24h</span>
                <span class="hidden sm:inline text-charcoal-light">&bull;</span>
                <span class="whitespace-nowrap">Superbill provided</span>
              </div>
            </div>

            <!-- Review Proof Row -->
            <div class="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs sm:text-sm text-charcoal-muted">
              <UiRatingStars :rating="4.9" class="shrink-0" />
              <div class="h-3.5 w-px bg-ecru-border shrink-0" />
              <span class="whitespace-nowrap">
                <strong class="font-semibold text-charcoal">4.9 / 5.0</strong> from 340+ athletes &amp; patients
              </span>
            </div>
          </div>

          <!-- Right Column: Sculpted Arch Frame & Clean Benchmark Anchor -->
          <div class="lg:col-span-6 relative">
            <div class="relative mx-auto max-w-[500px] lg:max-w-none">
              <!-- Main Arch Image -->
              <div class="arch-mask overflow-hidden border border-ecru-border bg-white aspect-[4/4.5] max-h-[320px] sm:max-h-[460px] relative">
                <img
                  alt="Physical therapy session in clinical wellness space"
                  class="w-full h-full object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPh45MfohrayyuKOuFNJsbfs8naSTZvFiuRr5kweKjq4OGBzALVlEzIACaLEXiFK3whbYCwFc8AiXgtrWPMhXcKijTc-4G9VanLNCoP-EONLCGI86qf783sGIl_3L33hmUAcRDmos83HFZKGDUQ-FCngBLNuqfGA8o7RCBjoG5Vn3h_4FRbkU2dCifsfw89nufPtxdxcYSX7PNhyCvP6mRnVQLACdg_dxISXUYUSb9oQpDqCbDT9ge"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-pine-dark/30 via-transparent to-transparent pointer-events-none" />
              </div>

              <!-- Anchored Clinical Benchmark Card -->
              <div class="mt-4 bg-white/95 backdrop-blur-md border border-ecru-border rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
                <div class="font-serif text-3xl sm:text-4xl text-pine font-medium leading-none shrink-0">
                  94%
                </div>
                <div class="h-9 w-px bg-ecru-border shrink-0" />
                <p class="text-xs sm:text-sm text-charcoal-muted leading-snug">
                  <strong class="font-semibold text-charcoal">Clinical Benchmark:</strong> Pain reduction &amp; full return-to-sport clearance within target discharge timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alpine Pine Stats Ribbon -->
    <section class="bg-pine text-linen py-12 lg:py-14 border-y border-pine-muted/30">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 lg:divide-x divide-pine-muted/40">
          <div class="pb-6 border-b border-pine-muted/30 lg:border-b-0 lg:pb-0 lg:px-6 first:pl-0 flex flex-col">
            <div class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              15+ Years
            </div>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              Clinical Excellence
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Sports orthopedics &amp; spinal restoration care.
            </p>
          </div>
          <div class="pb-6 border-b border-pine-muted/30 lg:border-b-0 lg:pb-0 lg:px-6 flex flex-col">
            <div class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              12,000+
            </div>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              Sessions Completed
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Competitive athletic training &amp; surgical recovery.
            </p>
          </div>
          <div class="lg:px-6 flex flex-col">
            <div class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              1-on-1 Care
            </div>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              60-Min Doctor Visits
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Guaranteed licensed DPT care. Zero aides or techs.
            </p>
          </div>
          <div class="lg:px-6 flex flex-col">
            <div class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              100%
            </div>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              Board-Certified DPTs
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Fellowship-trained doctoral clinical specialists.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section (2x2 Grid) -->
    <section
      id="specialties"
      class="py-24 bg-linen-darker/60 scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-ecru-border text-charcoal-muted text-[11px] font-semibold uppercase tracking-wider mb-3">
              Specialized Clinical Programs
            </div>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-pine tracking-tight leading-tight text-balance">
              Comprehensive Sports Rehabilitation &amp; Human Performance
            </h2>
          </div>
          <p class="text-sm sm:text-base text-charcoal-muted max-w-md font-normal leading-relaxed">
            Every diagnosis begins with objective biomechanical assessment to target root musculoskeletal dysfunctions, not just temporary symptom relief.
          </p>
        </div>

        <!-- 2x2 Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card 1: Post-Op Rehab -->
          <div class="relative bg-white rounded-3xl p-6 sm:p-10 border border-ecru-border hover:border-pine/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-6">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-linen-darker flex items-center justify-center text-pine group-hover:bg-pine group-hover:text-white transition-colors shrink-0">
                  <UiIcon
                    name="i-lucide-briefcase-medical"
                    class="text-xl sm:text-2xl"
                  />
                </div>
                <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold tracking-wider uppercase border border-clay/20 whitespace-nowrap shrink-0">
                    $175 &bull; 60 Min
                  </span>
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-linen border border-ecru-border text-[11px] font-semibold text-charcoal-muted uppercase tracking-wider whitespace-nowrap shrink-0">
                    Phase 1-4 Protocols
                  </span>
                </div>
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl text-pine mb-3 font-normal text-balance">
                Post-Op Surgical Rehabilitation
              </h3>
              <p class="text-sm sm:text-base text-charcoal-muted mb-8 leading-relaxed font-normal">
                Structured clinical protocols from acute surgical discharge through multi-stage strength dynamometry to full athletic clearance. Co-managed closely with Austin's premier orthopedic surgeons.
              </p>
              <div class="space-y-3 mb-8">
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>ACL, meniscus, labral &amp; rotator cuff post-surgical staging</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Objective limb symmetry dynamometry &amp; force plate testing</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Graduated graft protection loading &amp; surgeon progress reports</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>High-velocity multi-planar cutting &amp; sport-specific clearance</span>
                </div>
              </div>
            </div>
            <NuxtLink
              to="/book?service=post-op"
              class="inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-clay-dark transition-colors pt-4 border-t border-ecru-border after:absolute after:inset-0"
            >
              <span>Explore Post-Op Protocol</span>
              <UiIcon
                name="i-lucide-arrow-right"
                class="text-base"
              />
            </NuxtLink>
          </div>

          <!-- Card 2: Sports Orthopedic Evaluation & Rehab -->
          <div class="relative bg-white rounded-3xl p-6 sm:p-10 border border-ecru-border hover:border-pine/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-6">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-linen-darker flex items-center justify-center text-pine group-hover:bg-pine group-hover:text-white transition-colors shrink-0">
                  <UiIcon
                    name="i-lucide-activity"
                    class="text-xl sm:text-2xl"
                  />
                </div>
                <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold tracking-wider uppercase border border-clay/20 whitespace-nowrap shrink-0">
                    $175 &bull; 60 Min
                  </span>
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-linen border border-ecru-border text-[11px] font-semibold text-charcoal-muted uppercase tracking-wider whitespace-nowrap shrink-0">
                    Acute &amp; Overuse Triage
                  </span>
                </div>
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl text-pine mb-3 font-normal text-balance">
                Sports Orthopedic Evaluation &amp; Rehab
              </h3>
              <p class="text-sm sm:text-base text-charcoal-muted mb-8 leading-relaxed font-normal">
                Doctoral clinical evaluation, joint biomechanics triage, and personalized manual treatment for acute and overuse sports injuries. Tailored for athletes and active individuals dealing with knee, shoulder, hip, or spinal dysfunction.
              </p>
              <div class="space-y-3 mb-8">
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Acute knee sprain, meniscus &amp; rotator cuff triage</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Joint mobility restoration, directional loading &amp; manual therapy</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Spinal decompression, radiculopathy &amp; core stabilization</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Immediate take-home recovery roadmap &amp; MD co-management</span>
                </div>
              </div>
            </div>
            <NuxtLink
              to="/book?service=initial_eval"
              class="inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-clay-dark transition-colors pt-4 border-t border-ecru-border after:absolute after:inset-0"
            >
              <span>Explore Orthopedic Evaluation</span>
              <UiIcon
                name="i-lucide-arrow-right"
                class="text-base"
              />
            </NuxtLink>
          </div>

          <!-- Card 3: Biomechanics & Running Gait -->
          <div class="relative bg-white rounded-3xl p-6 sm:p-10 border border-ecru-border hover:border-pine/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-6">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-linen-darker flex items-center justify-center text-pine group-hover:bg-pine group-hover:text-white transition-colors shrink-0">
                  <UiIcon
                    name="i-lucide-compass"
                    class="text-xl sm:text-2xl"
                  />
                </div>
                <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold tracking-wider uppercase border border-clay/20 whitespace-nowrap shrink-0">
                    $195 &bull; 75 Min
                  </span>
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-linen border border-ecru-border text-[11px] font-semibold text-charcoal-muted uppercase tracking-wider whitespace-nowrap shrink-0">
                    Kinematic Lab
                  </span>
                </div>
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl text-pine mb-3 font-normal text-balance">
                Biomechanics &amp; Running Gait
              </h3>
              <p class="text-sm sm:text-base text-charcoal-muted mb-8 leading-relaxed font-normal">
                High-speed multi-angle video assessment, synchronized force plate cadence analytics, and customized footwear prescription for persistent lower-extremity overuse injuries.
              </p>
              <div class="space-y-3 mb-8">
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Ground reaction force profiling &amp; step cadence optimization</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Pelvic drop &amp; knee valgus collapse kinematic video capture</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Plantar fasciitis, shin splints &amp; Achilles load modulation</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Footwear prescription &amp; graduated return-to-mileage staging</span>
                </div>
              </div>
            </div>
            <NuxtLink
              to="/book?service=biomech_gait"
              class="inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-clay-dark transition-colors pt-4 border-t border-ecru-border after:absolute after:inset-0"
            >
              <span>Book Gait Analysis</span>
              <UiIcon
                name="i-lucide-arrow-right"
                class="text-base"
              />
            </NuxtLink>
          </div>

          <!-- Card 4: Performance Recovery & Modulation -->
          <div class="relative bg-white rounded-3xl p-6 sm:p-10 border border-ecru-border hover:border-pine/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-6">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-linen-darker flex items-center justify-center text-pine group-hover:bg-pine group-hover:text-white transition-colors shrink-0">
                  <UiIcon
                    name="i-lucide-heart-pulse"
                    class="text-xl sm:text-2xl"
                  />
                </div>
                <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold tracking-wider uppercase border border-clay/20 whitespace-nowrap shrink-0">
                    $95 &bull; 45 Min
                  </span>
                  <span class="px-2.5 sm:px-3 py-1 rounded-full bg-linen border border-ecru-border text-[11px] font-semibold text-charcoal-muted uppercase tracking-wider whitespace-nowrap shrink-0">
                    Elite Athletic Suite
                  </span>
                </div>
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl text-pine mb-3 font-normal text-balance">
                Performance Recovery &amp; Modulation
              </h3>
              <p class="text-sm sm:text-base text-charcoal-muted mb-8 leading-relaxed font-normal">
                Doctor-administered clinical tissue therapies designed to accelerate neuromuscular restitution and clear systemic inflammation between training blocks and competitive fixtures.
              </p>
              <div class="space-y-3 mb-8">
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Personalized Blood Flow Restriction (Delfi PTS BFR)</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Therapeutic dry needling &amp; intramuscular electro-stimulation</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Normatec 3 dynamic pneumatic compression recovery cycles</span>
                </div>
                <div class="flex items-start gap-2.5 text-charcoal text-sm">
                  <UiIcon
                    name="i-lucide-check-circle"
                    class="text-pine text-lg shrink-0 mt-0.5"
                  />
                  <span>Pre-competition active flush &amp; neuromuscular reset programming</span>
                </div>
              </div>
            </div>
            <NuxtLink
              to="/book?service=recovery_suite"
              class="inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-clay-dark transition-colors pt-4 border-t border-ecru-border after:absolute after:inset-0"
            >
              <span>Explore Recovery Suite</span>
              <UiIcon
                name="i-lucide-arrow-right"
                class="text-base"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Transparent Financial Model & Insurance Superbills Explainer -->
    <section class="py-20 lg:py-24 bg-white border-y border-ecru-border">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="max-w-3xl mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-linen border border-ecru-border text-pine text-[11px] font-semibold uppercase tracking-wider mb-3">
            Financial Transparency
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl text-pine tracking-tight leading-tight mb-4 text-balance">
            Transparent Pricing. 1-on-1 Doctoral Care. Zero Surprise Bills.
          </h2>
          <p class="text-sm sm:text-base text-charcoal-muted font-normal leading-relaxed">
            Apex operates strictly out-of-network so our Doctors of Physical Therapy can focus 100% on your recovery&mdash;never double-booking appointments, handing you off to aides, or letting insurance adjusters dictate your care timeline.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Step 1 -->
          <div class="rounded-2xl bg-linen border border-ecru-border p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <span class="w-9 h-9 rounded-xl bg-white border border-ecru-border flex items-center justify-center font-serif text-lg font-medium text-pine">1</span>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-clay-dark">Upfront Clarity</span>
              </div>
              <h3 class="font-serif text-xl text-pine font-normal mb-2">
                Flat-Rate Pricing
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Know your exact investment before stepping foot in the clinic. Comprehensive 60-minute doctor evaluations are $175. No surprise facility fees or unexpected copay bills arriving months later.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-ecru-border text-xs text-charcoal-light flex items-center gap-2">
              <UiIcon
                name="i-lucide-check"
                class="text-pine text-sm shrink-0"
              />
              <span>Dedicated 60&ndash;75 min doctoral visits</span>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="rounded-2xl bg-linen border border-ecru-border p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <span class="w-9 h-9 rounded-xl bg-white border border-ecru-border flex items-center justify-center font-serif text-lg font-medium text-pine">2</span>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-clay-dark">Itemized Documentation</span>
              </div>
              <h3 class="font-serif text-xl text-pine font-normal mb-2">
                Doctoral Superbill Provided
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Following each session, your clinician provides an itemized medical Superbill populated with standard ICD-10 diagnostic and CPT treatment codes required by private health plans.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-ecru-border text-xs text-charcoal-light flex items-center gap-2">
              <UiIcon
                name="i-lucide-check"
                class="text-pine text-sm shrink-0"
              />
              <span>Full medical diagnosis coding included</span>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="rounded-2xl bg-linen border border-ecru-border p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <span class="w-9 h-9 rounded-xl bg-white border border-ecru-border flex items-center justify-center font-serif text-lg font-medium text-pine">3</span>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-clay-dark">Direct Reimbursement</span>
              </div>
              <h3 class="font-serif text-xl text-pine font-normal mb-2">
                PPO &amp; HSA / FSA Eligible
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Submit your Superbill directly to your PPO insurance provider (e.g. BCBS, Aetna, Cigna, United) for direct out-of-network reimbursement. You can also pay seamlessly using your HSA or FSA card.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-ecru-border text-xs text-charcoal-light flex items-center gap-2">
              <UiIcon
                name="i-lucide-check"
                class="text-pine text-sm shrink-0"
              />
              <span>HSA / FSA cards accepted at checkout</span>
            </div>
          </div>
        </div>

        <!-- Trust Badges Row -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-linen-darker/60 border border-ecru-border text-xs text-charcoal">
          <div class="flex items-start sm:items-center gap-2.5 font-medium">
            <UiIcon
              name="i-lucide-shield-check"
              class="text-pine text-base shrink-0 mt-0.5 sm:mt-0"
            />
            <span>Texas Direct Access: No Physician Referral Required to Begin</span>
          </div>
          <div class="flex items-start sm:items-center gap-2.5 font-medium">
            <UiIcon
              name="i-lucide-credit-card"
              class="text-pine text-base shrink-0 mt-0.5 sm:mt-0"
            />
            <span>HSA &amp; FSA Approved Healthcare Expense</span>
          </div>
          <div class="flex items-start sm:items-center gap-2.5 font-medium">
            <UiIcon
              name="i-lucide-user-check"
              class="text-pine text-base shrink-0 mt-0.5 sm:mt-0"
            />
            <span>100% Doctor of Physical Therapy Care &mdash; Never Aides or Techs</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Patient Recovery Stories (Testimonials) -->
    <section
      id="stories"
      class="py-24 bg-linen scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-ecru-border text-charcoal-muted text-[11px] font-semibold uppercase tracking-wider mb-3">
            Verified Outcomes
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl font-normal text-pine tracking-tight mb-4 text-balance">
            Patient Recovery Stories
          </h2>
          <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Real timelines, objective strength milestones, and verified athlete return-to-sport achievements guided by our clinical team.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Story 1 -->
          <div class="bg-white rounded-3xl p-7 sm:p-8 border border-ecru-border hover:border-ecru-muted transition-colors flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <span class="px-2.5 py-1 rounded-md bg-linen-darker text-charcoal text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap shrink-0">Marathoner</span>
                <span class="text-xs text-charcoal-light font-medium whitespace-nowrap shrink-0">7 Month Protocol</span>
              </div>
              <div class="mb-4">
                <UiRatingStars :rating="5" />
              </div>
              <h3 class="font-serif text-lg font-medium text-pine mb-3 text-balance">
                Complete ACL Reconstruction Return-to-Run
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6 font-normal">
                &ldquo;After tearing my ACL during trail training, Dr. Vance&rsquo;s data-driven loading protocol gave me total clarity. We hit 98% quad symmetry before I was cleared, and I just finished the Austin Half-Marathon completely pain-free.&rdquo;
              </p>
            </div>
            <div class="pt-4 border-t border-ecru-border flex items-center justify-between gap-3">
              <div>
                <div class="text-sm font-semibold text-charcoal leading-snug whitespace-nowrap">
                  Claire M.
                </div>
                <div class="text-xs text-charcoal-light whitespace-nowrap">
                  Sub-3:30 Marathon Runner
                </div>
              </div>
              <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold shrink-0 whitespace-nowrap">
                98% Symmetry
              </span>
            </div>
          </div>

          <!-- Story 2 -->
          <div class="bg-white rounded-3xl p-7 sm:p-8 border border-ecru-border hover:border-ecru-muted transition-colors flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <span class="px-2.5 py-1 rounded-md bg-linen-darker text-charcoal text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap shrink-0">Masters Crossfitter</span>
                <span class="text-xs text-charcoal-light font-medium whitespace-nowrap shrink-0">12 Week Protocol</span>
              </div>
              <div class="mb-4">
                <UiRatingStars :rating="5" />
              </div>
              <h3 class="font-serif text-lg font-medium text-pine mb-3 text-balance">
                L5/S1 Herniation &amp; Pain-Free Deadlift Return
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6 font-normal">
                &ldquo;I was told surgery was inevitable for my severe disc bulge and sciatic pain. Dr. Hayes diagnosed my directional preference in visit one. Within 8 weeks the radicular pain was zero, and by week 12 I resumed heavy barbell pulls.&rdquo;
              </p>
            </div>
            <div class="pt-4 border-t border-ecru-border flex items-center justify-between gap-3">
              <div>
                <div class="text-sm font-semibold text-charcoal leading-snug whitespace-nowrap">
                  David T.
                </div>
                <div class="text-xs text-charcoal-light whitespace-nowrap">
                  Competitive Masters Athlete
                </div>
              </div>
              <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold shrink-0 whitespace-nowrap">
                100% Pain-Free
              </span>
            </div>
          </div>

          <!-- Story 3 -->
          <div class="bg-white rounded-3xl p-7 sm:p-8 border border-ecru-border hover:border-ecru-muted transition-colors flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <span class="px-2.5 py-1 rounded-md bg-linen-darker text-charcoal text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap shrink-0">Collegiate Swimmer</span>
                <span class="text-xs text-charcoal-light font-medium whitespace-nowrap shrink-0">10 Week Protocol</span>
              </div>
              <div class="mb-4">
                <UiRatingStars :rating="5" />
              </div>
              <h3 class="font-serif text-lg font-medium text-pine mb-3 text-balance">
                Chronic Subacromial Impingement Resolution
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6 font-normal">
                &ldquo;Dr. Rostova caught a major scapular dyskinesis that two previous clinics missed. Combined with dry needling and high-velocity eccentric rotator cuff loading, I dropped my 200m butterfly time without any shoulder inflammation.&rdquo;
              </p>
            </div>
            <div class="pt-4 border-t border-ecru-border flex items-center justify-between gap-3">
              <div>
                <div class="text-sm font-semibold text-charcoal leading-snug whitespace-nowrap">
                  Sienna K.
                </div>
                <div class="text-xs text-charcoal-light whitespace-nowrap">
                  Division I Athlete
                </div>
              </div>
              <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold shrink-0 whitespace-nowrap">
                PR Maintained
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clinical Team Section -->
    <section
      id="specialists"
      class="py-24 bg-linen-darker/60 scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-ecru-border text-charcoal-muted text-[11px] font-semibold uppercase tracking-wider mb-3">
            Clinical Excellence
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl font-normal text-pine tracking-tight mb-4 text-balance">
            Meet Your Clinical Team
          </h2>
          <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Every clinician holds a Doctorate of Physical Therapy and board-certified clinical specialty credentials. No aides, no assistants&mdash;just doctoral-level sports rehabilitation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Specialist 1: Marcus -->
          <div class="relative bg-white rounded-3xl p-6 border border-ecru-border hover:border-pine/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
            <div class="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-linen-darker">
              <img
                alt="Dr. Marcus Vance"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI4HGZy8D1KC8I17BtdM4lYsg30MRRohsWHBb6ODvX8aoP7Ye5yVnz5qpBKpTT2PoWl5PBj0yHhOYE4Esoi-RF5clarDtSEvgepkdfdxEVS8ASYPo98a0Ab1E4XpWrp5FldYFh-rU4rgDMJsWQ5W5RqDFmNlZLx4TWaCXVvOU4QblLOni7ClrLTamuHVZyQXw8qiKyO4vYR4TY_NDquS9Qq98au-Cpv5H95D7CUojscQneSAJkHKd-"
              >
              <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-pine text-[11px] font-medium border border-ecru-border whitespace-nowrap">
                Knee &amp; Shoulder Reconstruction
              </span>
            </div>
            <div class="flex-1 flex flex-col">
              <h3 class="font-serif text-2xl font-normal text-pine mb-1">
                Dr. Marcus Vance
              </h3>
              <p class="text-xs font-semibold text-clay-dark tracking-wide uppercase mb-3 whitespace-nowrap">
                PT, DPT, OCS
              </p>
              <p class="text-xs sm:text-sm text-charcoal-muted mb-6 flex-1 leading-relaxed font-normal">
                Board-Certified Orthopedic Clinical Specialist with 14 years leading postoperative ACL and complex overhead athlete return-to-competition protocols.
              </p>
              <div class="pt-4 border-t border-ecru-border flex items-center justify-between gap-2">
                <span class="text-xs font-medium text-charcoal-light whitespace-nowrap shrink-0">14 Yrs Experience</span>
                <NuxtLink
                  to="/book?clinician=vance"
                  class="inline-flex items-center gap-1 text-sm font-semibold text-pine hover:text-clay-dark transition-colors after:absolute after:inset-0 whitespace-nowrap shrink-0"
                >
                  <span>Book with Marcus</span>
                  <UiIcon
                    name="i-lucide-arrow-right"
                    class="text-base"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Specialist 2: Elena -->
          <div class="relative bg-white rounded-3xl p-6 border border-ecru-border hover:border-pine/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
            <div class="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-linen-darker">
              <img
                alt="Dr. Elena Rostova"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt-LzHOZ3VxfVV7c1Ijnv1GhKCqzdTmyBZMpgOfZaje10pEDqt-ppFs344Z9owhCs88vF_LsbG5sMqPzVJiHQFRc5v0Tp5Gw62dpD9rfGQJBD795uINYHcMesgintHWqIq5MJGNo_qLO_Xkuc7jyjUuyu40sM-P1-2ts-4oUTLZQ8tGUpZj3rqtofMBF80ZWuYjD-YmVkNC1TcO1_hWDHGz0D6AE77X_B2x4fMIgrDtqWBvBF5bhyW"
              >
              <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-pine text-[11px] font-medium border border-ecru-border whitespace-nowrap">
                Biomechanics &amp; Running Gait
              </span>
            </div>
            <div class="flex-1 flex flex-col">
              <h3 class="font-serif text-2xl font-normal text-pine mb-1">
                Dr. Elena Rostova
              </h3>
              <p class="text-xs font-semibold text-clay-dark tracking-wide uppercase mb-3 whitespace-nowrap">
                PT, DPT, SCS
              </p>
              <p class="text-xs sm:text-sm text-charcoal-muted mb-6 flex-1 leading-relaxed font-normal">
                Board-Certified Sports Clinical Specialist and former US Track &amp; Field consultant. Directs kinematic lower-extremity gait and tendon load management.
              </p>
              <div class="pt-4 border-t border-ecru-border flex items-center justify-between gap-2">
                <span class="text-xs font-medium text-charcoal-light whitespace-nowrap shrink-0">11 Yrs Experience</span>
                <NuxtLink
                  to="/book?clinician=rostova"
                  class="inline-flex items-center gap-1 text-sm font-semibold text-pine hover:text-clay-dark transition-colors after:absolute after:inset-0 whitespace-nowrap shrink-0"
                >
                  <span>Book with Elena</span>
                  <UiIcon
                    name="i-lucide-arrow-right"
                    class="text-base"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Specialist 3: Julian -->
          <div class="relative bg-white rounded-3xl p-6 border border-ecru-border hover:border-pine/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
            <div class="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-linen-darker">
              <img
                alt="Dr. Julian Hayes"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2J9apBKKhLNQGHXH5KsxTWtAOzIhmyKIIANm0V8ZYW1UERCFVr1VIYxnDYybw2RefiBrEgBx9E2OZRU8WuLFoVGzbaYDSiSrFfFLAqKahD3E3zXWL-DkuboBLGpkF9BJwcflj7Nf8Im-mTbim8ZyifEQ8WBs-_B3aHp98nw6tJHedI9Vx0ktmpWzBgB59zsbGSk5s1UVuU3nseJRuh1gfAn9WBnUmMZQH0POG3XHPaMb3xzb881Mo"
              >
              <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-pine text-[11px] font-medium border border-ecru-border whitespace-nowrap">
                Spine &amp; Complex Joint Rehab
              </span>
            </div>
            <div class="flex-1 flex flex-col">
              <h3 class="font-serif text-2xl font-normal text-pine mb-1">
                Dr. Julian Hayes
              </h3>
              <p class="text-xs font-semibold text-clay-dark tracking-wide uppercase mb-3 whitespace-nowrap">
                PT, DPT, FAAOMPT
              </p>
              <p class="text-xs sm:text-sm text-charcoal-muted mb-6 flex-1 leading-relaxed font-normal">
                Fellow of the American Academy of Orthopaedic Manual Physical Therapists. Specializes in advanced spinal mobilization, radiculopathy, and athletic core restoration.
              </p>
              <div class="pt-4 border-t border-ecru-border flex items-center justify-between gap-2">
                <span class="text-xs font-medium text-charcoal-light whitespace-nowrap shrink-0">16 Yrs Experience</span>
                <NuxtLink
                  to="/book?clinician=hayes"
                  class="inline-flex items-center gap-1 text-sm font-semibold text-pine hover:text-clay-dark transition-colors after:absolute after:inset-0 whitespace-nowrap shrink-0"
                >
                  <span>Book with Julian</span>
                  <UiIcon
                    name="i-lucide-arrow-right"
                    class="text-base"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Frequently Asked Questions Section -->
    <section
      id="faq"
      class="py-24 bg-white scroll-mt-20 border-y border-ecru-border"
    >
      <div class="max-w-4xl mx-auto px-6 sm:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-linen border border-ecru-border text-charcoal-muted text-[11px] font-semibold uppercase tracking-wider mb-3">
            Patient Logistics &amp; Clarity
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-pine tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our doctoral care model, Texas Direct Access laws, insurance reimbursement, and what to expect on visit one.
          </p>
        </div>

        <!-- Accordion Stack -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="rounded-2xl border border-ecru-border bg-linen/60 hover:border-pine/30 transition-all overflow-hidden"
          >
            <button
              type="button"
              class="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
              :aria-expanded="openFaqIndex === index"
              @click="toggleFaq(index)"
            >
              <span class="font-serif text-lg sm:text-xl text-pine font-normal text-balance">
                {{ faq.question }}
              </span>
              <span class="w-8 h-8 rounded-full bg-white border border-ecru-border flex items-center justify-center text-pine shrink-0 transition-transform duration-200">
                <UiIcon
                  :name="openFaqIndex === index ? 'i-lucide-minus' : 'i-lucide-plus'"
                  class="text-sm"
                />
              </span>
            </button>
            <div
              v-show="openFaqIndex === index"
              class="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-linen"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- Still have questions banner -->
        <div class="mt-12 p-6 rounded-2xl bg-linen/70 border border-ecru-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 class="font-serif text-lg text-pine font-medium mb-1 text-balance">
              Have a specific clinical or surgical question?
            </h3>
            <p class="text-xs sm:text-sm text-charcoal-muted text-balance">
              Speak directly with our clinical coordinator or message a Doctor of Physical Therapy.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <a
              :href="`tel:${clinicInfo.phone.tel}`"
              class="w-full sm:w-auto justify-center inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-ecru-border bg-white hover:bg-linen text-pine text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <UiIcon
                name="i-lucide-phone"
                class="text-sm text-pine shrink-0"
              />
              <span>{{ clinicInfo.phone.display }}</span>
            </a>
            <UiButton
              to="/book"
              size="sm"
              class="w-full sm:w-auto justify-center rounded-full bg-pine hover:bg-pine-light text-linen text-xs px-5 py-2.5 whitespace-nowrap"
            >
              Book Assessment
            </UiButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Schedule -->
    <section
      id="locations"
      class="py-24 bg-linen scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Left: Information & Schedule -->
          <div class="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-ecru-border flex flex-col justify-between">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2.5 mb-6">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen text-pine text-[11px] font-semibold uppercase tracking-wider border border-ecru-border whitespace-nowrap shrink-0">
                  Main Performance Center
                </div>
                <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-linen-darker text-pine text-xs font-medium border border-ecru-border whitespace-nowrap shrink-0">
                  <span class="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>{{ clinicInfo.hours.statusText }}</span>
                </div>
              </div>

              <h2 class="font-serif text-2xl sm:text-3xl text-pine mb-2 font-normal">
                {{ clinicInfo.address.facilityName }}
              </h2>
              <p class="text-sm sm:text-base text-charcoal-muted mb-8 font-normal">
                {{ clinicInfo.address.full }}
              </p>

              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3.5 text-charcoal">
                  <div class="w-10 h-10 rounded-2xl bg-linen flex items-center justify-center text-pine shrink-0 border border-ecru-border/60">
                    <UiIcon
                      name="i-lucide-phone"
                      class="text-xl text-pine"
                    />
                  </div>
                  <div>
                    <span class="block text-[11px] uppercase tracking-wider text-charcoal-light font-medium">Direct Clinical Line</span>
                    <a
                      class="font-semibold text-pine hover:text-clay transition-colors"
                      :href="`tel:${clinicInfo.phone.tel}`"
                    >{{ clinicInfo.phone.display }}</a>
                  </div>
                </div>

                <div class="flex items-center gap-3.5 text-charcoal">
                  <div class="w-10 h-10 rounded-2xl bg-linen flex items-center justify-center text-pine shrink-0 border border-ecru-border/60">
                    <UiIcon
                      name="i-lucide-parking-meter"
                      class="text-xl text-pine"
                    />
                  </div>
                  <div>
                    <span class="block text-[11px] uppercase tracking-wider text-charcoal-light font-medium">Patient Parking</span>
                    <span class="text-xs sm:text-sm text-charcoal-muted">{{ clinicInfo.address.parking }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t border-ecru-border pt-6">
              <h3 class="text-xs font-semibold text-pine uppercase tracking-wider mb-4">
                Weekly Clinic Operating Hours
              </h3>
              <div class="space-y-2.5 text-xs sm:text-sm">
                <div
                  v-for="item in clinicInfo.hours.schedule"
                  :key="item.days"
                  class="flex items-center justify-between py-1.5 border-b border-linen last:border-b-0 gap-2"
                >
                  <span :class="item.isClosed ? 'font-medium text-charcoal-light whitespace-nowrap' : 'font-medium text-charcoal whitespace-nowrap'">{{ item.days }}</span>
                  <span :class="item.isClosed ? 'text-charcoal-light italic whitespace-nowrap' : 'text-charcoal-muted whitespace-nowrap'">{{ item.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Map Preview -->
          <div class="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-ecru-border flex flex-col justify-between">
            <div class="relative flex-1 min-h-[340px] bg-linen-darker">
              <img
                alt="Map overview of Austin clinic location"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClYlu4ojMC74sP481YXzNTzzFaTFdpTLKBsAacKF5rWtr1aZz71Ih6d9gQ__hOZ4mqTabFSpv2_x1ri73tenQFnxiBHWHAGpMGHgpEcX8DJ_BzLlzRmv9XRNP5cOMy55Zi-RxXm-pAymncuTw9BpT6_JmcQyLAlnFy5dJiyLO_wmq6SKnbjPeyN6JVb3fO1_TrDqQWCnJhWg8TDswKB--mLjtqepgRPZTeB_hyNGjHvMdeqVDw6wH-"
              >
              <!-- Pin Overlay -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-ecru-border flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-clay shrink-0" />
                <div>
                  <span class="block text-xs font-bold text-pine leading-none">{{ clinicInfo.name }}</span>
                  <span class="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-light mt-0.5">{{ clinicInfo.address.landmark }}</span>
                </div>
              </div>
            </div>

            <!-- Route Banner & Action -->
            <div class="p-5 sm:p-6 bg-white border-t border-ecru-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-charcoal">
                <UiIcon
                  name="i-lucide-signpost"
                  class="text-pine text-base shrink-0 mt-0.5 sm:mt-0"
                />
                <span class="leading-snug">{{ clinicInfo.address.fastestRoute }}</span>
              </div>
              <UiButton
                :to="clinicInfo.address.mapsUrl"
                target="_blank"
                size="sm"
                class="w-full sm:w-auto justify-center rounded-lg bg-pine hover:bg-pine-light text-white font-medium text-xs sm:text-sm px-4 py-2 whitespace-nowrap shrink-0"
                trailing-icon="i-lucide-external-link"
              >
                Google Maps
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Consultation CTA Banner -->
    <section class="bg-pine text-linen py-20 lg:py-24 text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-linen/20 text-linen/90 text-[11px] font-semibold uppercase tracking-widest mb-6">
          Doctoral 1-on-1 Consultations
        </div>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-linen leading-tight mb-5 text-balance max-w-3xl">
          Ready to Return to Peak Physical Performance?
        </h2>
        <p class="text-sm sm:text-base text-linen/80 max-w-2xl mb-8 leading-relaxed font-normal">
          Begin with a comprehensive 60-minute evaluation with our board-certified physical therapists. No generic exercise sheets&mdash;only personalized athletic recovery.
        </p>
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
          <UiButton
            to="/book"
            size="lg"
            class="w-full sm:w-auto justify-center rounded-full !bg-linen hover:!bg-white !text-pine font-semibold text-sm sm:text-base px-8 py-3.5 transition-all shadow-none"
            trailing-icon="i-lucide-arrow-right"
          >
            Book Assessment
          </UiButton>
          <a
            :href="`tel:${clinicInfo.phone.tel}`"
            class="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-full border border-linen/30 hover:border-linen text-linen px-7 py-3 text-sm sm:text-base font-medium transition-all hover:bg-white/10"
          >
            Call Clinic: {{ clinicInfo.phone.display }}
          </a>
        </div>

        <!-- Booking Commitment Reassurance Microcopy -->
        <div class="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs text-linen/75">
          <span class="whitespace-nowrap">No upfront payment required</span>
          <span class="hidden sm:inline">&bull;</span>
          <span class="whitespace-nowrap">100% Doctor of PT care</span>
          <span class="hidden sm:inline">&bull;</span>
          <span class="whitespace-nowrap">HSA &amp; FSA accepted</span>
        </div>
      </div>
    </section>
  </div>
</template>
