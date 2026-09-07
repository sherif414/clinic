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

// SEO: Page-level meta tags optimized for local sports PT search queries
useSeoMeta({
  title: 'Sports Physical Therapy Austin TX | 1-on-1 Doctoral Rehab | Apex PT',
  description: 'Board-certified Doctors of Physical Therapy in Austin, TX. 1-on-1 sports rehab, ACL recovery, running gait analysis & biomechanics. 94% return-to-sport rate. Book your 60-min evaluation.',
  ogTitle: 'Apex Sports & Physical Therapy — Doctoral Sports Rehab in Austin, TX',
  ogDescription: 'Evidence-based 1-on-1 physical therapy for athletes and active professionals. Post-op surgical rehab, biomechanical gait analysis, and performance recovery.',
  ogImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPh45MfohrayyuKOuFNJsbfs8naSTZvFiuRr5kweKjq4OGBzALVlEzIACaLEXiFK3whbYCwFc8AiXgtrWPMhXcKijTc-4G9VanLNCoP-EONLCGI86qf783sGIl_3L33hmUAcRDmos83HFZKGDUQ-FCngBLNuqfGA8o7RCBjoG5Vn3h_4FRbkU2dCifsfw89nufPtxdxcYSX7PNhyCvP6mRnVQLACdg_dxISXUYUSb9oQpDqCbDT9ge',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Apex Sports & Physical Therapy - Austin Clinical Facility',
  ogType: 'website'
})

// SEO: Structured data for rich search results using nuxt-schema-org
useSchemaOrg([
  defineLocalBusiness({
    '@type': 'MedicalBusiness',
    name: 'Apex Sports & Physical Therapy',
    description: 'Evidence-based clinical rehabilitation, biomechanical analysis, and 1-on-1 sports physical therapy tailored for competitive athletes and active professionals.',
    telephone: '(512) 555-0199',
    priceRange: '$95–$195',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPh45MfohrayyuKOuFNJsbfs8naSTZvFiuRr5kweKjq4OGBzALVlEzIACaLEXiFK3whbYCwFc8AiXgtrWPMhXcKijTc-4G9VanLNCoP-EONLCGI86qf783sGIl_3L33hmUAcRDmos83HFZKGDUQ-FCngBLNuqfGA8o7RCBjoG5Vn3h_4FRbkU2dCifsfw89nufPtxdxcYSX7PNhyCvP6mRnVQLACdg_dxISXUYUSb9oQpDqCbDT9ge',
    address: {
      streetAddress: '1204 S. Congress Ave, Suite 300',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78704',
      addressCountry: 'US'
    },
    geo: {
      latitude: 30.2472,
      longitude: -97.7494
    },
    openingHours: [
      'Mo-Th 07:00-19:00',
      'Fr 07:00-18:00',
      'Sa 08:00-13:00'
    ],
    aggregateRating: {
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '340'
    }
  }),
  ...faqs.map(faq => defineQuestion({
    name: faq.question,
    acceptedAnswer: faq.answer
  }))
])

const { toggleMobileMenu } = useMobileNav()
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section: True 50/50 Full-Bleed Split-Screen (Reference-Inspired) -->
    <section class="relative w-full overflow-hidden bg-pine-dark min-h-[90vh] lg:min-h-screen flex flex-col justify-between">
      <!-- The Split Screen Grid: On mobile (image top, copy bottom); on desktop (50/50 split with left-contained nav) -->
      <div class="w-full flex-1 flex flex-col lg:grid lg:grid-cols-2">
        <!-- MOBILE-ONLY HEADER (Above the mobile image) -->
        <div class="lg:hidden w-full px-5 pt-6 pb-4 flex items-center justify-between z-20">
          <NuxtLink to="/" class="flex items-center gap-2.5 group shrink-0">
            <img
              src="/logo.svg"
              alt="Apex Sports &amp; Physical Therapy"
              class="w-7 h-7 rounded-xl object-contain brightness-110 shrink-0"
            >
            <span class="font-serif text-lg font-bold tracking-tight text-linen whitespace-nowrap">
              Apex Sports<span class="font-normal text-linen/70"> PT</span>
            </span>
          </NuxtLink>

          <!-- Mobile Quick Action Cluster -->
          <div class="flex items-center gap-2">
            <a
              href="tel:5125550199"
              aria-label="Call clinic at (512) 555-0199"
              class="w-9 h-9 rounded-xl bg-linen/10 hover:bg-linen/20 border border-linen/20 flex items-center justify-center text-linen transition-colors active:scale-95"
            >
              <UiIcon name="i-lucide-phone" class="text-sm" />
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              class="w-9 h-9 rounded-xl bg-linen/10 hover:bg-linen/20 border border-linen/20 flex items-center justify-center text-linen transition-colors active:scale-95 cursor-pointer"
              @click="toggleMobileMenu"
            >
              <UiIcon name="i-lucide-menu" class="text-base" />
            </button>
          </div>
        </div>

        <!-- RIGHT HALF ON DESKTOP (50%) / TOP ON MOBILE: Clinical Photography + Top-Right Phone Action on Desktop -->
        <div class="order-1 lg:order-2 relative w-full h-[280px] xs:h-[340px] sm:h-[440px] lg:h-auto min-h-[260px] lg:min-h-full overflow-hidden bg-pine-dark">
          <!-- Full-Bleed Image -->
          <img
            alt="Doctor of Physical Therapy coaching athlete in dynamic sports rehabilitation at Apex Sports clinic"
            class="absolute inset-0 w-full h-full object-cover object-[50%_25%] lg:object-[50%_35%]"
            fetchpriority="high"
            width="1200"
            height="896"
            src="/images/hero-sports-rehab.jpg"
          >

          <!-- Subtle Natural Contrast Vignette -->
          <div class="absolute inset-0 bg-gradient-to-t from-pine-dark/70 via-transparent to-pine-dark/30 pointer-events-none" />

          <!-- Top Right Corner Action on Desktop (Aligned with Left Header) -->
          <div class="absolute top-8 right-6 sm:right-10 lg:right-12 hidden lg:flex items-center gap-3 z-10">
            <a
              href="tel:5125550199"
              class="px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-pine text-xs font-semibold backdrop-blur-md border border-white/40 shadow-sm transition-all flex items-center gap-2"
            >
              <UiIcon name="i-lucide-phone" class="text-xs text-pine" />
              <span>(512) 555-0199</span>
            </a>
          </div>
        </div>

        <!-- LEFT HALF ON DESKTOP (50%) / BOTTOM ON MOBILE: Integrated Brand Nav, Editorial Typography & Video Proof -->
        <div class="order-2 lg:order-1 bg-pine-dark text-linen flex flex-col justify-between px-5 sm:px-10 lg:px-14 xl:px-20 py-8 sm:py-10 lg:py-12 relative z-10 lg:border-r border-pine-muted/30">
          <!-- Desktop Brand & Navigation Bar (Left Side Only, Grouped for Clean Split Alignment) -->
          <div class="hidden lg:flex items-center gap-6 lg:gap-10 mb-10 sm:mb-14 lg:mb-16">
            <NuxtLink to="/" class="flex items-center gap-3 group shrink-0">
              <img
                src="/logo.svg"
                alt="Apex Sports &amp; Physical Therapy"
                class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-contain brightness-110"
              >
              <span class="font-serif text-xl sm:text-2xl font-bold tracking-tight text-linen whitespace-nowrap">
                Apex Sports<span class="font-normal text-linen/70"> PT</span>
              </span>
            </NuxtLink>

            <nav class="flex items-center gap-5 lg:gap-7 text-xs font-medium text-linen/70">
              <a href="#specialties" class="hover:text-linen transition-colors whitespace-nowrap">Specialties</a>
              <a href="#specialists" class="hover:text-linen transition-colors whitespace-nowrap">Clinical Faculty</a>
              <a href="#stories" class="hover:text-linen transition-colors whitespace-nowrap">Case Outcomes</a>
              <a href="#pricing" class="hover:text-linen transition-colors whitespace-nowrap">Reimbursement</a>
              <a href="#locations" class="hover:text-linen transition-colors whitespace-nowrap">Austin Clinic</a>
            </nav>
          </div>

          <!-- Hero Headline & Core Value Proposition -->
          <div class="my-auto py-2 sm:py-6 lg:py-8 max-w-xl">
            <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-linen leading-[1.08] sm:leading-[1.04] tracking-tight mb-4 sm:mb-6 text-balance">
              Targeted sports rehab to get you <span class="italic font-serif text-linen/90">back in the game.</span>
            </h1>

            <p class="text-sm sm:text-lg text-linen/75 font-normal leading-relaxed mb-6 sm:mb-10 max-w-lg">
              Evidence-based clinical rehabilitation, biomechanical analysis, and 1-on-1 sports physical therapy tailored for competitive athletes and active professionals in Austin, TX.
            </p>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <UiButton
                to="/book"
                size="lg"
                variant="inverted"
                class="w-full sm:w-auto font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 justify-center"
                trailing-icon="i-lucide-arrow-right"
              >
                Book Assessment
              </UiButton>
              <UiButton
                to="#specialties"
                size="lg"
                variant="outline-inverted"
                class="w-full sm:w-auto font-medium text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 hover:scale-[1.01] transition-all duration-200 justify-center"
              >
                Explore Specialties
              </UiButton>
            </div>
          </div>

          <!-- Bottom Proof Card (Video / Patient Story Thumbnail) -->
          <div class="pt-5 sm:pt-7 mt-6 sm:mt-8 border-t border-linen/15 flex items-center gap-3.5 sm:gap-4 max-w-lg">
            <a
              href="#stories"
              aria-label="Watch athlete recovery case study video"
              class="relative w-14 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-linen/20 bg-pine-muted/50 group block"
            >
              <img
                src="/images/hero-clinical-detail.jpg"
                alt="Clinical sports physical therapy session"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              >
              <div class="absolute inset-0 bg-black/35 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/90 text-pine flex items-center justify-center shadow-xs">
                  <UiIcon name="i-lucide-play" class="text-xs ml-0.5" />
                </div>
              </div>
            </a>
            <div class="text-xs text-linen/75 leading-snug">
              <div class="text-[11px] font-semibold uppercase tracking-wider text-clay-soft mb-0.5">
                Patient Case Study
              </div>
              <p class="text-linen/95 font-medium line-clamp-1 text-xs sm:text-sm">
                From post-op ACL tear to marathon finish line in 6 months.
              </p>
              <a
                href="#stories"
                class="inline-flex items-center gap-1.5 text-linen/75 hover:text-white font-medium transition-colors mt-0.5"
              >
                <span>Watch 2-min clinical recovery</span>
                <UiIcon name="i-lucide-arrow-right" class="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Partner Ribbon (Below the Split, matching Rulebase bottom bar) -->
      <div class="w-full bg-linen border-t border-ecru-border py-3.5 sm:py-5 px-4 sm:px-10 lg:px-16 overflow-hidden">
        <div class="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-2.5 sm:gap-4">
          <span class="text-[11px] sm:text-xs font-semibold text-charcoal-muted uppercase tracking-wider shrink-0 text-center xl:text-left">
            Trusted by Austin athletes, runners &amp; surgeons:
          </span>
          <div class="w-full xl:w-auto overflow-x-auto no-scrollbar py-1">
            <div class="flex items-center justify-start sm:justify-center xl:justify-end gap-x-4 sm:gap-x-7 text-[11px] sm:text-xs font-semibold tracking-wider text-charcoal/75 uppercase whitespace-nowrap min-w-max mx-auto px-2">
              <span class="hover:text-pine transition-colors">Austin Marathon</span>
              <span class="text-charcoal-light/40 select-none">&bull;</span>
              <span class="hover:text-pine transition-colors">Hyrox Austin</span>
              <span class="text-charcoal-light/40 select-none">&bull;</span>
              <span class="hover:text-pine transition-colors">Austin Orthopedics</span>
              <span class="text-charcoal-light/40 select-none">&bull;</span>
              <span class="hover:text-pine transition-colors">Texas Running Co</span>
              <span class="text-charcoal-light/40 select-none">&bull;</span>
              <span class="hover:text-pine transition-colors">Cap10K</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alpine Pine Stats Ribbon -->
    <section
      aria-label="Clinical Metrics & Standards"
      class="bg-pine text-linen py-12 lg:py-14 border-y border-pine-muted/30"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <dl class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 lg:divide-x divide-pine-muted/40">
          <div class="pb-6 border-b border-pine-muted/30 lg:border-b-0 lg:pb-0 lg:px-6 first:pl-0 flex flex-col">
            <dt class="sr-only">Clinical Experience</dt>
            <dd class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              15+ Years
            </dd>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              Clinical Excellence
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Sports orthopedics &amp; spinal restoration care.
            </p>
          </div>
          <div class="pb-6 border-b border-pine-muted/30 lg:border-b-0 lg:pb-0 lg:px-6 flex flex-col">
            <dt class="sr-only">Completed Treatments</dt>
            <dd class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              12,000+
            </dd>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              Sessions Completed
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Competitive athletic training &amp; surgical recovery.
            </p>
          </div>
          <div class="pt-6 sm:pt-0 lg:px-6 flex flex-col">
            <dt class="sr-only">Session Structure</dt>
            <dd class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              1-on-1 Care
            </dd>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              60-Min Doctor Visits
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Guaranteed licensed DPT care. Zero aides or techs.
            </p>
          </div>
          <div class="pt-6 sm:pt-0 lg:px-6 flex flex-col">
            <dt class="sr-only">Doctor Credentials</dt>
            <dd class="font-serif text-3xl sm:text-4xl text-linen font-normal tracking-tight mb-1">
              100%
            </dd>
            <div class="text-sm font-semibold text-linen/90 mb-1 text-balance">
              Board-Certified DPTs
            </div>
            <p class="text-xs text-linen/70 leading-relaxed text-balance">
              Fellowship-trained doctoral clinical specialists.
            </p>
          </div>
        </dl>
      </div>
    </section>

    <!-- Clinical Programs: Editorial Ledger & Dossier (Replaces repetitive card grid) -->
    <section
      id="specialties"
      class="py-24 lg:py-32 bg-linen scroll-mt-20 border-b border-ecru-border"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <!-- Master Editorial 2-Column Split: Sticky thesis on left, deep ledger on right -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <!-- Left Column: Editorial Thesis & Philosophy Anchor -->
          <div class="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div class="space-y-4">
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-pine tracking-tight leading-[1.15] text-balance">
                Comprehensive Sports Rehabilitation &amp; Human Performance
              </h2>
              <p class="text-base text-charcoal-muted leading-relaxed font-normal">
                Every diagnosis begins with objective biomechanical assessment to target root musculoskeletal dysfunctions, not just temporary symptom relief.
              </p>
            </div>

            <!-- Clinical Standard Highlights -->
            <div class="p-6 sm:p-7 rounded-2xl bg-white border border-ecru-border space-y-4">
              <div class="font-serif text-lg text-pine font-medium">
                The Apex Standard of Care
              </div>
              <ul class="space-y-3 text-xs text-charcoal-muted">
                <li class="flex items-start gap-2.5">
                  <UiIcon name="i-lucide-check" class="text-pine text-sm shrink-0 mt-0.5" />
                  <span>100% Doctor of Physical Therapy appointments&mdash;zero aides or assistants</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <UiIcon name="i-lucide-check" class="text-pine text-sm shrink-0 mt-0.5" />
                  <span>Objective force plate dynamometry &amp; high-speed motion diagnostics</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <UiIcon name="i-lucide-check" class="text-pine text-sm shrink-0 mt-0.5" />
                  <span>Direct communication and milestone reporting to your orthopedic surgeon</span>
                </li>
              </ul>
              <div class="pt-4 border-t border-ecru-border">
                <UiButton
                  to="/book"
                  class="w-full justify-center rounded-full bg-pine hover:bg-pine-light text-linen text-xs font-semibold py-3"
                  trailing-icon="i-lucide-arrow-right"
                >
                  Schedule Initial Assessment
                </UiButton>
              </div>
            </div>
          </div>

          <!-- Right Column: Editorial Clinical Ledger (Card-Free Structured Pacing) -->
          <div class="lg:col-span-7 divide-y divide-ecru-border">
            <!-- Program 01: Post-Op Rehab -->
            <article class="py-10 first:pt-0 group">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div class="flex items-center gap-3">
                  <span class="font-serif text-sm text-clay-dark font-medium">01</span>
                  <h3 class="font-serif text-2xl sm:text-3xl text-pine font-normal group-hover:text-pine-light transition-colors">
                    Post-Op Surgical Rehabilitation
                  </h3>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold uppercase tracking-wider border border-clay/20">
                    $175 &bull; 60 Min
                  </span>
                  <span class="text-xs text-charcoal-light font-medium">Phase 1&ndash;4</span>
                </div>
              </div>

              <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6 max-w-2xl font-normal">
                Structured clinical protocols from acute surgical discharge through multi-stage strength dynamometry to full athletic clearance. Co-managed closely with Austin's premier orthopedic surgeons.
              </p>

              <!-- Diagnostic & Recovery Tags Grid -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  ACL, meniscus, labral &amp; rotator cuff staging
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Limb symmetry dynamometry &amp; force plates
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Graduated graft protection loading
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Multi-planar cutting &amp; sport clearance
                </span>
              </div>

              <div>
                <NuxtLink
                  to="/book?service=post-op"
                  class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine hover:text-clay transition-colors"
                >
                  <span>Explore Post-Op Protocol &amp; Book</span>
                  <UiIcon name="i-lucide-arrow-right" class="text-sm" />
                </NuxtLink>
              </div>
            </article>

            <!-- Program 02: Sports Orthopedic Evaluation -->
            <article class="py-10 group">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div class="flex items-center gap-3">
                  <span class="font-serif text-sm text-clay-dark font-medium">02</span>
                  <h3 class="font-serif text-2xl sm:text-3xl text-pine font-normal group-hover:text-pine-light transition-colors">
                    Sports Orthopedic Evaluation &amp; Rehab
                  </h3>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold uppercase tracking-wider border border-clay/20">
                    $175 &bull; 60 Min
                  </span>
                  <span class="text-xs text-charcoal-light font-medium">Acute &amp; Overuse</span>
                </div>
              </div>

              <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6 max-w-2xl font-normal">
                Doctoral clinical evaluation, joint biomechanics triage, and personalized manual treatment for acute and overuse sports injuries. Tailored for athletes dealing with knee, shoulder, hip, or spinal dysfunction.
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Acute knee sprain &amp; rotator cuff triage
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Joint mobility restoration &amp; manual therapy
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Spinal decompression &amp; core stabilization
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Take-home milestone roadmap
                </span>
              </div>

              <div>
                <NuxtLink
                  to="/book?service=initial_eval"
                  class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine hover:text-clay transition-colors"
                >
                  <span>Explore Orthopedic Evaluation &amp; Book</span>
                  <UiIcon name="i-lucide-arrow-right" class="text-sm" />
                </NuxtLink>
              </div>
            </article>

            <!-- Program 03: Biomechanics & Gait Analysis -->
            <article class="py-10 group">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div class="flex items-center gap-3">
                  <span class="font-serif text-sm text-clay-dark font-medium">03</span>
                  <h3 class="font-serif text-2xl sm:text-3xl text-pine font-normal group-hover:text-pine-light transition-colors">
                    Biomechanics &amp; Running Gait Analysis
                  </h3>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold uppercase tracking-wider border border-clay/20">
                    $195 &bull; 75 Min
                  </span>
                  <span class="text-xs text-charcoal-light font-medium">Kinematic Lab</span>
                </div>
              </div>

              <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6 max-w-2xl font-normal">
                High-speed multi-angle video assessment, synchronized force plate cadence analytics, and customized footwear prescription for persistent lower-extremity overuse injuries.
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Ground reaction force profiling
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Pelvic drop &amp; knee valgus capture
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Plantar fasciitis &amp; Achilles modulation
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Footwear prescription &amp; mileage staging
                </span>
              </div>

              <div>
                <NuxtLink
                  to="/book?service=biomech_gait"
                  class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine hover:text-clay transition-colors"
                >
                  <span>Book Gait Analysis Session</span>
                  <UiIcon name="i-lucide-arrow-right" class="text-sm" />
                </NuxtLink>
              </div>
            </article>

            <!-- Program 04: Performance Recovery & Modulation -->
            <article class="py-10 last:pb-0 group">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div class="flex items-center gap-3">
                  <span class="font-serif text-sm text-clay-dark font-medium">04</span>
                  <h3 class="font-serif text-2xl sm:text-3xl text-pine font-normal group-hover:text-pine-light transition-colors">
                    Performance Recovery &amp; Modulation
                  </h3>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold uppercase tracking-wider border border-clay/20">
                    $95 &bull; 45 Min
                  </span>
                  <span class="text-xs text-charcoal-light font-medium">Athletic Suite</span>
                </div>
              </div>

              <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6 max-w-2xl font-normal">
                Doctor-administered clinical tissue therapies designed to accelerate neuromuscular restitution and clear systemic inflammation between training blocks and competitive fixtures.
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Delfi PTS Blood Flow Restriction (BFR)
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Therapeutic dry needling &amp; e-stim
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Normatec 3 pneumatic compression
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-ecru-border text-xs text-charcoal">
                  <UiIcon name="i-lucide-activity" class="text-pine text-xs shrink-0" />
                  Pre-competition neuromuscular reset
                </span>
              </div>

              <div>
                <NuxtLink
                  to="/book?service=recovery_suite"
                  class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine hover:text-clay transition-colors"
                >
                  <span>Explore Recovery Suite &amp; Book</span>
                  <UiIcon name="i-lucide-arrow-right" class="text-sm" />
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Transparent Financial Model & Superbill Pipeline (Replaces repetitive card boxes) -->
    <section
      id="pricing"
      class="py-24 lg:py-32 bg-white scroll-mt-20 border-b border-ecru-border"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-pine tracking-tight leading-tight mb-5 text-balance">
            Transparent Pricing. 1-on-1 Doctoral Care. Zero Surprise Bills.
          </h2>
          <p class="text-base text-charcoal-muted font-normal leading-relaxed">
            Apex operates strictly out-of-network so our Doctors of Physical Therapy can focus 100% on your recovery&mdash;never double-booking appointments, handing you off to aides, or letting insurance adjusters dictate your care timeline.
          </p>
        </div>

        <!-- Unified Seamless Reimbursement Pipeline -->
        <div class="rounded-3xl bg-linen p-8 sm:p-12 border border-ecru-border mb-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
            <!-- Stage 1 -->
            <div class="space-y-3 relative md:pr-4">
              <div class="flex items-center justify-between">
                <span class="font-serif text-2xl text-pine font-medium">Stage 01</span>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-clay-dark">Upfront Clarity</span>
              </div>
              <h3 class="font-serif text-xl text-pine font-normal">
                Flat-Rate Pricing
              </h3>
              <p class="text-sm text-charcoal-muted leading-relaxed">
                Know your exact investment before stepping foot in the clinic. Comprehensive 60-minute doctor evaluations are $175. No surprise facility fees or unexpected copay bills arriving months later.
              </p>
              <div class="pt-3 text-xs font-medium text-pine flex items-center gap-1.5">
                <UiIcon name="i-lucide-check" class="text-xs shrink-0" />
                <span>Dedicated 60&ndash;75 min doctoral visits</span>
              </div>
            </div>

            <!-- Stage 2 -->
            <div class="space-y-3 relative md:border-l md:border-ecru-border md:pl-8 md:pr-4">
              <div class="flex items-center justify-between">
                <span class="font-serif text-2xl text-pine font-medium">Stage 02</span>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-clay-dark">Itemized Coding</span>
              </div>
              <h3 class="font-serif text-xl text-pine font-normal">
                Doctoral Superbill Provided
              </h3>
              <p class="text-sm text-charcoal-muted leading-relaxed">
                Following each session, your clinician provides an itemized medical Superbill populated with standard ICD-10 diagnostic and CPT treatment codes required by private health plans.
              </p>
              <div class="pt-3 text-xs font-medium text-pine flex items-center gap-1.5">
                <UiIcon name="i-lucide-check" class="text-xs shrink-0" />
                <span>Full medical diagnosis coding included</span>
              </div>
            </div>

            <!-- Stage 3 -->
            <div class="space-y-3 relative md:border-l md:border-ecru-border md:pl-8">
              <div class="flex items-center justify-between">
                <span class="font-serif text-2xl text-pine font-medium">Stage 03</span>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-clay-dark">Reimbursement</span>
              </div>
              <h3 class="font-serif text-xl text-pine font-normal">
                PPO &amp; HSA / FSA Eligible
              </h3>
              <p class="text-sm text-charcoal-muted leading-relaxed">
                Submit your Superbill directly to your PPO insurance provider (BCBS, Aetna, Cigna, United) for direct 50%&ndash;80% out-of-network reimbursement. You can also pay seamlessly using your HSA or FSA card.
              </p>
              <div class="pt-3 text-xs font-medium text-pine flex items-center gap-1.5">
                <UiIcon name="i-lucide-check" class="text-xs shrink-0" />
                <span>HSA / FSA cards accepted at checkout</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust & Reassurance Affirmations -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-charcoal">
          <div class="flex items-center gap-3 p-4 rounded-xl bg-linen/50 border border-ecru-border">
            <UiIcon name="i-lucide-shield-check" class="text-pine text-lg shrink-0" />
            <span class="font-medium">Texas Direct Access: No Physician Referral Required to Begin</span>
          </div>
          <div class="flex items-center gap-3 p-4 rounded-xl bg-linen/50 border border-ecru-border">
            <UiIcon name="i-lucide-credit-card" class="text-pine text-lg shrink-0" />
            <span class="font-medium">HSA &amp; FSA Approved Out-of-Pocket Healthcare Expense</span>
          </div>
          <div class="flex items-center gap-3 p-4 rounded-xl bg-linen/50 border border-ecru-border">
            <UiIcon name="i-lucide-user-check" class="text-pine text-lg shrink-0" />
            <span class="font-medium">100% Doctor of PT Care &mdash; Never Handed Off to Aides or Techs</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Verified Outcomes: Editorial Case Study Feature (Replaces repetitive quote cards) -->
    <section
      id="stories"
      class="py-24 lg:py-32 bg-linen scroll-mt-20 border-b border-ecru-border"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-pine tracking-tight leading-tight mb-4 text-balance">
            Verified Clinical Outcomes &amp; Athlete Benchmarks
          </h2>
          <p class="text-base text-charcoal-muted leading-relaxed font-normal">
            Real timelines, objective strength milestones, and verified return-to-sport achievements documented across 12,000+ clinical sessions.
          </p>
        </div>

        <!-- Asymmetric Case Study Feature Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <!-- Featured Lead Case Study (Left, 7 Cols) -->
          <article class="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-ecru-border flex flex-col justify-between">
            <div class="space-y-6">
              <header class="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-ecru-border">
                <div class="flex items-center gap-3">
                  <span class="px-3 py-1 rounded-full bg-clay-soft text-clay-dark text-[11px] font-semibold uppercase tracking-wider border border-clay/20">
                    Lead Clinical Case
                  </span>
                  <span class="text-xs text-charcoal-light font-medium">7 Month Protocol</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <UiRatingStars :rating="5" />
                  <span class="text-xs font-semibold text-charcoal ml-1">5.0</span>
                </div>
              </header>

              <div>
                <div class="text-xs font-semibold text-clay-dark uppercase tracking-wider mb-2">
                  ACL Reconstruction Return-to-Run
                </div>
                <blockquote class="font-serif text-xl sm:text-2xl text-pine font-normal leading-relaxed italic">
                  &ldquo;After tearing my ACL during trail training, Dr. Vance&rsquo;s data-driven loading protocol gave me total clarity. We hit 98% quad symmetry before I was cleared, and I just finished the Austin Half-Marathon completely pain-free.&rdquo;
                </blockquote>
              </div>

              <!-- Clinical Validation Badges -->
              <div class="flex flex-wrap gap-2.5 pt-2">
                <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                  98% Quad Limb Symmetry
                </span>
                <span class="px-3 py-1 rounded-full bg-linen border border-ecru-border text-xs font-medium text-charcoal">
                  Multi-Planar Cutting Clearance
                </span>
                <span class="px-3 py-1 rounded-full bg-linen border border-ecru-border text-xs font-medium text-charcoal">
                  Austin Half-Marathon Finisher
                </span>
              </div>
            </div>

            <footer class="pt-8 mt-8 border-t border-ecru-border flex items-center justify-between">
              <div>
                <cite class="text-base font-semibold text-charcoal not-italic block">
                  Claire M.
                </cite>
                <div class="text-xs text-charcoal-light">
                  Sub-3:30 Marathon Runner &bull; Co-managed with Dr. Marcus Vance, PT, DPT, OCS
                </div>
              </div>
              <UiIcon name="i-lucide-check-circle" class="text-pine text-xl shrink-0" />
            </footer>
          </article>

          <!-- Secondary Case Study Docket (Right, 5 Cols) -->
          <div class="lg:col-span-5 flex flex-col justify-between gap-6">
            <!-- Case 02: David T. -->
            <article class="bg-white rounded-3xl p-7 sm:p-8 border border-ecru-border flex flex-col justify-between flex-1">
              <div>
                <header class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs text-charcoal-light font-medium">12-Week Protocol</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                    100% Pain-Free
                  </span>
                </header>
                <h3 class="font-serif text-lg text-pine font-medium mb-2">
                  L5/S1 Disc Herniation &amp; Barbell Deadlift Return
                </h3>
                <blockquote class="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-normal not-italic">
                  &ldquo;I was told surgery was inevitable for my severe disc bulge. Dr. Hayes diagnosed my directional preference in visit one. Within 8 weeks radicular pain was zero, and by week 12 I resumed heavy barbell pulls.&rdquo;
                </blockquote>
              </div>
              <footer class="pt-4 mt-4 border-t border-ecru-border flex items-center justify-between">
                <div>
                  <cite class="text-xs font-semibold text-charcoal not-italic block">David T.</cite>
                  <div class="text-[11px] text-charcoal-light">Competitive Masters Crossfit Athlete</div>
                </div>
                <span class="text-xs text-charcoal-muted font-medium">Dr. Julian Hayes, DPT</span>
              </footer>
            </article>

            <!-- Case 03: Sienna K. -->
            <article class="bg-white rounded-3xl p-7 sm:p-8 border border-ecru-border flex flex-col justify-between flex-1">
              <div>
                <header class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs text-charcoal-light font-medium">10-Week Protocol</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                    PR Maintained
                  </span>
                </header>
                <h3 class="font-serif text-lg text-pine font-medium mb-2">
                  Subacromial Impingement &amp; Scapular Restitution
                </h3>
                <blockquote class="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-normal not-italic">
                  &ldquo;Dr. Rostova caught a major scapular dyskinesis that previous clinics missed. Combined with dry needling and high-velocity eccentric rotator cuff loading, I dropped my 200m fly time without inflammation.&rdquo;
                </blockquote>
              </div>
              <footer class="pt-4 mt-4 border-t border-ecru-border flex items-center justify-between">
                <div>
                  <cite class="text-xs font-semibold text-charcoal not-italic block">Sienna K.</cite>
                  <div class="text-[11px] text-charcoal-light">Division I Collegiate Swimmer</div>
                </div>
                <span class="text-xs text-charcoal-muted font-medium">Dr. Elena Rostova, DPT</span>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Clinical Faculty Roster (Architectural Showcase) -->
    <section
      id="specialists"
      class="py-24 lg:py-32 bg-white scroll-mt-20 border-b border-ecru-border"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="max-w-2xl">
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-pine tracking-tight leading-tight text-balance">
              Doctoral Clinical Faculty
            </h2>
            <p class="text-base text-charcoal-muted mt-3 font-normal leading-relaxed">
              Every clinician holds a Doctorate of Physical Therapy and board-certified clinical specialty credentials. Dedicated 1-on-1 care from your doctor at every appointment.
            </p>
          </div>
          <div class="shrink-0 text-xs text-charcoal-light font-medium">
            Zero Aides &bull; Zero Techs &bull; Guaranteed Licensed DPT
          </div>
        </div>

        <!-- Architectural Faculty Roster Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <!-- Specialist 1: Dr. Marcus Vance -->
          <article class="flex flex-col group">
            <figure class="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-linen-darker border border-ecru-border m-0">
              <img
                alt="Dr. Marcus Vance, Board-Certified Orthopedic Clinical Specialist"
                class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI4HGZy8D1KC8I17BtdM4lYsg30MRRohsWHBb6ODvX8aoP7Ye5yVnz5qpBKpTT2PoWl5PBj0yHhOYE4Esoi-RF5clarDtSEvgepkdfdxEVS8ASYPo98a0Ab1E4XpWrp5FldYFh-rU4rgDMJsWQ5W5RqDFmNlZLx4TWaCXVvOU4QblLOni7ClrLTamuHVZyQXw8qiKyO4vYR4TY_NDquS9Qq98au-Cpv5H95D7CUojscQneSAJkHKd-"
              >
              <figcaption class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-pine text-[11px] font-medium border border-ecru-border">
                14 Yrs Experience
              </figcaption>
            </figure>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-baseline justify-between mb-1">
                  <h3 class="font-serif text-2xl font-normal text-pine">
                    Dr. Marcus Vance
                  </h3>
                  <span class="text-xs font-semibold text-clay-dark tracking-wide uppercase">
                    PT, DPT, OCS
                  </span>
                </div>
                <div class="text-xs font-medium text-charcoal-light mb-3">
                  Knee &amp; Shoulder Reconstruction Specialist
                </div>
                <p class="text-sm text-charcoal-muted leading-relaxed font-normal mb-6">
                  Board-Certified Orthopedic Clinical Specialist leading postoperative ACL and complex overhead athlete return-to-competition protocols across Austin.
                </p>
              </div>

              <footer class="pt-4 border-t border-ecru-border flex items-center justify-between">
                <NuxtLink
                  to="/book?clinician=vance"
                  class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine hover:text-clay transition-colors"
                >
                  <span>Book with Dr. Vance</span>
                  <UiIcon name="i-lucide-arrow-right" class="text-sm" />
                </NuxtLink>
              </footer>
            </div>
          </article>

          <!-- Specialist 2: Dr. Elena Rostova -->
          <article class="flex flex-col group">
            <figure class="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-linen-darker border border-ecru-border m-0">
              <img
                alt="Dr. Elena Rostova, Board-Certified Sports Clinical Specialist"
                class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt-LzHOZ3VxfVV7c1Ijnv1GhKCqzdTmyBZMpgOfZaje10pEDqt-ppFs344Z9owhCs88vF_LsbG5sMqPzVJiHQFRc5v0Tp5Gw62dpD9rfGQJBD795uINYHcMesgintHWqIq5MJGNo_qLO_Xkuc7jyjUuyu40sM-P1-2ts-4oUTLZQ8tGUpZj3rqtofMBF80ZWuYjD-YmVkNC1TcO1_hWDHGz0D6AE77X_B2x4fMIgrDtqWBvBF5bhyW"
              >
              <figcaption class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-pine text-[11px] font-medium border border-ecru-border">
                11 Yrs Experience
              </figcaption>
            </figure>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-baseline justify-between mb-1">
                  <h3 class="font-serif text-2xl font-normal text-pine">
                    Dr. Elena Rostova
                  </h3>
                  <span class="text-xs font-semibold text-clay-dark tracking-wide uppercase">
                    PT, DPT, SCS
                  </span>
                </div>
                <div class="text-xs font-medium text-charcoal-light mb-3">
                  Biomechanics &amp; Running Gait Director
                </div>
                <p class="text-sm text-charcoal-muted leading-relaxed font-normal mb-6">
                  Board-Certified Sports Clinical Specialist and former US Track &amp; Field consultant. Directs kinematic lower-extremity gait analysis and tendon loading.
                </p>
              </div>

              <footer class="pt-4 border-t border-ecru-border flex items-center justify-between">
                <NuxtLink
                  to="/book?clinician=rostova"
                  class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine hover:text-clay transition-colors"
                >
                  <span>Book with Dr. Rostova</span>
                  <UiIcon name="i-lucide-arrow-right" class="text-sm" />
                </NuxtLink>
              </footer>
            </div>
          </article>

          <!-- Specialist 3: Dr. Julian Hayes -->
          <article class="flex flex-col group">
            <figure class="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-linen-darker border border-ecru-border m-0">
              <img
                alt="Dr. Julian Hayes, Fellow of the American Academy of Orthopaedic Manual Physical Therapists"
                class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2J9apBKKhLNQGHXH5KsxTWtAOzIhmyKIIANm0V8ZYW1UERCFVr1VIYxnDYybw2RefiBrEgBx9E2OZRU8WuLFoVGzbaYDSiSrFfFLAqKahD3E3zXWL-DkuboBLGpkF9BJwcflj7Nf8Im-mTbim8ZyifEQ8WBs-_B3aHp98nw6tJHedI9Vx0ktmpWzBgB59zsbGSk5s1UVuU3nseJRuh1gfAn9WBnUmMZQH0POG3XHPaMb3xzb881Mo"
              >
              <figcaption class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-pine text-[11px] font-medium border border-ecru-border">
                16 Yrs Experience
              </figcaption>
            </figure>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-baseline justify-between mb-1">
                  <h3 class="font-serif text-2xl font-normal text-pine">
                    Dr. Julian Hayes
                  </h3>
                  <span class="text-xs font-semibold text-clay-dark tracking-wide uppercase">
                    PT, DPT, FAAOMPT
                  </span>
                </div>
                <div class="text-xs font-medium text-charcoal-light mb-3">
                  Spine &amp; Complex Joint Rehab Fellow
                </div>
                <p class="text-sm text-charcoal-muted leading-relaxed font-normal mb-6">
                  Fellow of the American Academy of Orthopaedic Manual Physical Therapists. Specializes in spinal mobilization, radiculopathy, and athletic core restoration.
                </p>
              </div>

              <footer class="pt-4 border-t border-ecru-border flex items-center justify-between">
                <NuxtLink
                  to="/book?clinician=hayes"
                  class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine hover:text-clay transition-colors"
                >
                  <span>Book with Dr. Hayes</span>
                  <UiIcon name="i-lucide-arrow-right" class="text-sm" />
                </NuxtLink>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Frequently Asked Questions Section -->
    <section
      id="faq"
      class="py-24 lg:py-32 bg-white scroll-mt-20 border-b border-ecru-border"
    >
      <div class="max-w-4xl mx-auto px-6 sm:px-8">
        <div class="text-center mb-16">
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-pine tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-xl mx-auto font-normal">
            Everything you need to know about our doctoral care model, Texas Direct Access laws, insurance reimbursement, and what to expect on visit one.
          </p>
        </div>

        <!-- Accordion Stack -->
        <UiAccordion
          :items="faqs"
          default-value="item-0"
        />

        <!-- Still have questions banner -->
        <div class="mt-12 p-6 sm:p-8 rounded-2xl bg-linen/70 border border-ecru-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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
              :aria-label="clinicInfo.phone.ariaLabel"
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

    <!-- Location & Schedule: Integrated Facility Pavilion -->
    <section
      id="locations"
      class="py-24 lg:py-32 bg-linen scroll-mt-20 border-b border-ecru-border"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Left: Information & Schedule -->
          <div class="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-ecru-border flex flex-col justify-between">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2.5 mb-6">
                <span class="text-xs font-semibold uppercase tracking-wider text-pine">
                  Austin Performance Facility
                </span>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen text-pine text-xs font-medium border border-ecru-border whitespace-nowrap shrink-0">
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
                      class="text-lg text-pine"
                    />
                  </div>
                  <div>
                    <span class="block text-[11px] uppercase tracking-wider text-charcoal-light font-medium">Direct Clinical Line</span>
                    <a
                      class="font-semibold text-pine hover:text-clay transition-colors"
                      :href="`tel:${clinicInfo.phone.tel}`"
                      :aria-label="clinicInfo.phone.ariaLabel"
                    >{{ clinicInfo.phone.display }}</a>
                  </div>
                </div>

                <div class="flex items-center gap-3.5 text-charcoal">
                  <div class="w-10 h-10 rounded-2xl bg-linen flex items-center justify-center text-pine shrink-0 border border-ecru-border/60">
                    <UiIcon
                      name="i-lucide-parking-meter"
                      class="text-lg text-pine"
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
          <figure
            aria-label="Clinic Map & Directions"
            class="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-ecru-border flex flex-col justify-between m-0"
          >
            <div class="relative flex-1 min-h-[340px] bg-linen-darker">
              <img
                alt="Map overview showing Austin clinic location at 1204 S. Congress Ave"
                class="w-full h-full object-cover"
                loading="lazy"
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
            <figcaption class="p-5 sm:p-6 bg-white border-t border-ecru-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Bottom Consultation CTA Banner -->
    <section class="bg-pine text-linen py-20 lg:py-28 text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center">
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
            :aria-label="clinicInfo.phone.ariaLabel"
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
