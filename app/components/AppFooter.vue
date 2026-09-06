<template>
  <footer class="bg-linen border-t border-ecru-border">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <!-- Brand & Accreditation Row -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
        <div class="md:col-span-5">
          <div class="flex items-center gap-3 mb-4">
            <img
              src="/logo.svg"
              alt="Apex Sports &amp; Physical Therapy"
              class="w-9 h-9 rounded-xl object-contain"
            >
            <span class="font-serif text-xl font-medium text-pine tracking-tight">Apex Sports &amp; Physical Therapy</span>
          </div>
          <p class="text-xs sm:text-sm text-charcoal-muted max-w-sm mb-6 leading-relaxed">
            Pioneering orthopedic sports medicine through 1-on-1 doctoral physical therapy, high-fidelity kinematic biomechanics, and personalized athletic recovery protocols.
          </p>
          <div class="flex flex-wrap items-center gap-2.5 mb-6">
            <span class="px-3 py-1 rounded-full bg-white border border-ecru-border text-[11px] font-medium text-charcoal-muted">
              APTA Accredited
            </span>
            <span class="px-3 py-1 rounded-full bg-white border border-ecru-border text-[11px] font-medium text-charcoal-muted">
              BOC Certified
            </span>
            <span class="px-3 py-1 rounded-full bg-white border border-ecru-border text-[11px] font-medium text-charcoal-muted">
              HIPAA Compliant
            </span>
          </div>
          <div class="space-y-2 text-xs text-charcoal-muted">
            <div class="flex items-start gap-2 text-charcoal">
              <UiIcon
                name="i-lucide-map-pin"
                class="text-sm text-pine shrink-0 mt-0.5"
              />
              <span>{{ clinicInfo.address.full }}</span>
            </div>
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
              <UiIcon
                name="i-lucide-phone"
                class="text-sm text-pine shrink-0"
              />
              <a
                :href="`tel:${clinicInfo.phone.tel}`"
                class="hover:text-pine transition-colors font-medium text-charcoal whitespace-nowrap"
              >
                {{ clinicInfo.phone.display }}
              </a>
              <span class="text-charcoal-light hidden sm:inline">&bull;</span>
              <span class="whitespace-nowrap">{{ clinicInfo.hours.weekdays || clinicInfo.hours.summary }}</span>
              <span
                v-if="clinicInfo.hours.saturday"
                class="text-charcoal-light hidden sm:inline"
              >&bull;</span>
              <span
                v-if="clinicInfo.hours.saturday"
                class="whitespace-nowrap"
              >{{ clinicInfo.hours.saturday }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation Links Columns -->
        <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          <div>
            <h4 class="text-xs font-semibold text-pine uppercase tracking-wider mb-4">
              Clinical Care
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-sm">
              <li>
                <NuxtLink
                  to="/#specialties"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Post-Op Surgical Rehab
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#specialties"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Spine &amp; Radiculopathy Care
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#specialties"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Biomechanical Analysis
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#specialties"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Performance Recovery
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-semibold text-pine uppercase tracking-wider mb-4">
              Patients &amp; Team
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-sm">
              <li>
                <NuxtLink
                  to="/#specialists"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Our Clinical Team
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#stories"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Patient Case Studies
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#faq"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Patient Superbill FAQs
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#locations"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Live Clinic Hours
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#faq"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Frequently Asked Questions
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-semibold text-pine uppercase tracking-wider mb-4">
              Legal &amp; Policy
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  :href="`tel:${clinicInfo.phone.tel}`"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Urgent Clinical Triage
                </a>
              </li>
              <li>
                <NuxtLink
                  to="/#faq"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  HIPAA &amp; Superbill Compliance
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#faq"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Texas Direct Access Terms
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#faq"
                  class="text-charcoal-muted hover:text-pine transition-colors"
                >
                  Privacy Practices
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Divider & Legal Copyright -->
      <div class="border-t border-ecru-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-light text-center md:text-left">
        <div class="text-balance">
          &copy; {{ new Date().getFullYear() }} Apex Sports &amp; Physical Therapy. All rights reserved. Accredited by APTA and BOC.
        </div>
        <div class="flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-1.5">
          <NuxtLink
            class="hover:text-pine transition-colors whitespace-nowrap"
            to="/#faq"
          >Notice of Privacy Practices</NuxtLink>
          <span class="hidden sm:inline text-charcoal-light">&bull;</span>
          <NuxtLink
            class="hover:text-pine transition-colors whitespace-nowrap"
            to="/#faq"
          >Patient Bill of Rights</NuxtLink>
          <span class="hidden sm:inline text-charcoal-light">&bull;</span>
          <NuxtLink
            class="hover:text-pine transition-colors whitespace-nowrap"
            to="/#faq"
          >Nondiscrimination Notice</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
