<script setup lang="ts">
const route = useRoute()
const { isMobileMenuOpen: isMenuOpen, toggleMobileMenu: toggleMenu, closeMobileMenu: closeMenu } = useMobileNav()

// Automatically close mobile menu when route or hash changes
watch(() => route.fullPath, () => {
  closeMenu()
})

// Prevent background scroll when mobile drawer is open
watch(isMenuOpen, (open) => {
  if (import.meta.client) {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Handle escape key to dismiss mobile menu
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

const isScrolled = ref(false)
const activeSection = ref('')
const isHome = computed(() => route.path === '/')

let observer: IntersectionObserver | null = null

const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 80
  }
}

const initSectionObserver = () => {
  if (!import.meta.client) return
  const sectionIds = ['specialties', 'specialists', 'stories', 'pricing', 'faq', 'locations']

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }
  )

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el && observer) {
      observer.observe(el)
    }
  })
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  initSectionObserver()
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('scroll', handleScroll)
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

interface NavLink {
  label: string
  to: string
  icon: string
  badge?: string
}

const navLinks: NavLink[] = [
  {
    label: 'Specialties',
    to: '/#specialties',
    icon: 'i-lucide-activity'
  },
  {
    label: 'Clinical Faculty',
    to: '/#specialists',
    icon: 'i-lucide-user-check'
  },
  {
    label: 'Case Outcomes',
    to: '/#stories',
    icon: 'i-lucide-award'
  },
  {
    label: 'Reimbursement',
    to: '/#pricing',
    icon: 'i-lucide-credit-card'
  },
  {
    label: 'FAQ',
    to: '/#faq',
    icon: 'i-lucide-help-circle'
  },
  {
    label: 'Austin Clinic',
    to: '/#locations',
    icon: 'i-lucide-clock'
  }
]
</script>

<template>
  <header
    class="z-50 transition-all duration-300"
    :class="[
      isHome
        ? (isScrolled ? 'fixed top-3 sm:top-4 inset-x-0 pointer-events-auto' : 'fixed top-0 inset-x-0 -translate-y-full opacity-0 pointer-events-none')
        : 'sticky top-0 bg-linen/95 backdrop-blur-md border-b border-ecru-border'
    ]"
  >
    <!-- On Homepage: Floating Editorial Capsule when scrolled; On other routes: Standard Full-Width Header -->
    <div
      :class="[
        isHome && isScrolled
          ? 'max-w-6xl mx-auto px-3 sm:px-6'
          : 'max-w-7xl mx-auto px-4 sm:px-8'
      ]"
    >
      <div
        class="transition-all duration-300 flex items-center justify-between"
        :class="[
          isHome && isScrolled
            ? 'h-13 sm:h-14 px-3 sm:px-5 rounded-full bg-white/95 backdrop-blur-md border border-ecru-border shadow-md shadow-pine-dark/5 gap-2 lg:gap-4'
            : 'h-16 sm:h-20 gap-3 sm:gap-6'
        ]"
      >
        <!-- Brand Logo & Title -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2 sm:gap-2.5 group shrink-0"
          @click="closeMenu"
        >
          <img
            src="/logo.svg"
            alt="Apex Sports &amp; Physical Therapy"
            class="rounded-xl object-contain transition-all"
            :class="isHome && isScrolled ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-8 h-8 sm:w-10 sm:h-10'"
          >
          <div class="flex items-baseline gap-1">
            <span
              class="font-serif font-bold tracking-tight text-pine leading-tight whitespace-nowrap"
              :class="isHome && isScrolled ? 'text-sm' : 'text-base sm:text-xl'"
            >
              Apex Sports
            </span>
            <span
              class="font-serif font-medium text-pine/70 whitespace-nowrap"
              :class="isHome && isScrolled ? 'text-xs' : 'text-xs sm:text-sm hidden sm:inline'"
            >
              PT
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links (Large viewports) -->
        <nav
          aria-label="Main Navigation"
          class="hidden lg:flex items-center shrink-0"
          :class="isHome && isScrolled ? 'gap-0.5 xl:gap-1.5' : 'gap-4 xl:gap-6 2xl:gap-8'"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="transition-all duration-200 flex items-center gap-1.5 relative group whitespace-nowrap shrink-0"
            :class="[
              isHome && isScrolled
                ? [
                  'px-2.5 xl:px-3 py-1 rounded-full text-xs font-medium',
                  activeSection === link.to.replace('/#', '')
                    ? 'bg-linen-darker text-pine font-semibold'
                    : 'text-charcoal hover:text-pine hover:bg-linen/60'
                ]
                : 'text-sm font-medium text-charcoal hover:text-pine py-1.5'
            ]"
          >
            <span class="whitespace-nowrap">{{ link.label }}</span>
            <span
              v-if="link.badge"
              class="px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded bg-clay-soft text-clay-dark leading-none whitespace-nowrap"
            >
              {{ link.badge }}
            </span>
          </NuxtLink>
        </nav>

        <!-- Direct Contact & Booking CTA -->
        <div class="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <!-- Direct Phone Link: visible on 2xl+ when scrolled, or on sm+ when not scrolled -->
          <a
            class="hidden sm:flex items-center justify-center gap-1.5 text-charcoal hover:text-pine hover:bg-linen-darker transition-colors font-medium rounded-full border border-transparent whitespace-nowrap shrink-0"
            :class="[
              isHome && isScrolled
                ? 'hidden xl:flex px-3 py-1.5 text-xs bg-linen/60 border-ecru-border/60'
                : 'text-sm p-2 sm:px-3 xl:px-4 sm:py-2 sm:bg-white/90 sm:border-ecru-border'
            ]"
            :href="`tel:${clinicInfo.phone.tel}`"
            :aria-label="clinicInfo.phone.ariaLabel"
          >
            <UiIcon
              name="i-lucide-phone"
              class="text-pine shrink-0"
              :class="isHome && isScrolled ? 'text-xs' : 'text-base'"
            />
            <span class="font-semibold text-charcoal text-xs whitespace-nowrap">{{ clinicInfo.phone.display }}</span>
          </a>

          <!-- Quick Book CTA Button -->
          <UiButton
            v-if="!route.path.startsWith('/book')"
            to="/book"
            size="sm"
            :class="isHome && isScrolled
              ? '!rounded-full bg-pine hover:bg-pine-light text-linen font-medium transition-all duration-200 whitespace-nowrap shrink-0 text-xs px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-xs'
              : '!rounded-full bg-pine hover:bg-pine-light text-linen font-medium transition-all duration-200 whitespace-nowrap shrink-0 text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 border border-transparent hover:border-pine-dark'"
            trailing-icon="i-lucide-arrow-right"
          >
            <span class="inline sm:hidden whitespace-nowrap">Book</span>
            <span class="hidden sm:inline whitespace-nowrap">Book</span>
          </UiButton>
          <a
            v-else
            :href="`tel:${clinicInfo.phone.tel}`"
            class="sm:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-pine bg-pine/10 hover:bg-pine/20 px-3 py-1.5 rounded-full border border-pine/20 transition-colors whitespace-nowrap shrink-0"
            :aria-label="clinicInfo.phone.ariaLabel"
          >
            <UiIcon
              name="i-lucide-phone"
              class="text-xs text-pine shrink-0"
            />
            <span>{{ clinicInfo.phone.display }}</span>
          </a>

          <!-- Mobile / Tablet Hamburger Toggle Button -->
          <button
            type="button"
            class="lg:hidden flex items-center justify-center rounded-xl border border-ecru-border bg-white text-charcoal hover:text-pine hover:bg-linen-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 transition-all cursor-pointer shrink-0"
            :class="isHome && isScrolled ? 'w-9 h-9' : 'w-11 h-11'"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-navigation-menu"
            aria-label="Toggle mobile navigation menu"
            @click="toggleMenu"
          >
            <UiIcon
              :name="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
              :class="isMenuOpen ? 'text-lg rotate-90 transition-transform duration-200' : 'text-lg transition-transform duration-200'"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Backdrop Overlay & Navigation Panel -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity ease-out duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-in duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 top-16 sm:top-20 bg-charcoal/40 backdrop-blur-xs z-40 lg:hidden"
          aria-hidden="true"
          @click="closeMenu"
        />
      </Transition>

      <!-- Mobile Menu Slide-Down Panel -->
      <Transition
        enter-active-class="transition-all ease-out duration-200"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition-all ease-in duration-150"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div
          v-if="isMenuOpen"
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          class="fixed top-16 sm:top-20 inset-x-0 bottom-0 sm:bottom-auto sm:max-h-[calc(100vh-5rem)] overflow-y-auto bg-linen border-b border-ecru-border z-50 lg:hidden flex flex-col justify-between"
        >
          <!-- Navigation Links -->
          <div class="px-4 sm:px-6 py-4 space-y-1">
            <div class="text-[11px] font-semibold tracking-wider uppercase text-charcoal-light px-3 py-1">
              Clinic Navigation
            </div>
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-white active:bg-linen-darker text-charcoal hover:text-pine transition-all font-medium text-sm border border-transparent hover:border-ecru-border"
              @click="closeMenu"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white border border-ecru-border/80 flex items-center justify-center text-pine">
                  <UiIcon
                    :name="link.icon"
                    class="text-base"
                  />
                </div>
                <span class="text-charcoal font-medium text-sm sm:text-base">{{ link.label }}</span>
              </div>

              <div class="flex items-center gap-2">
                <span
                  v-if="link.badge"
                  class="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-clay-soft text-clay"
                >
                  {{ link.badge }}
                </span>
                <UiIcon
                  name="i-lucide-chevron-right"
                  class="text-sm text-charcoal-light"
                />
              </div>
            </NuxtLink>
          </div>

          <!-- Quick Action CTAs inside Drawer -->
          <div class="px-4 sm:px-6 py-4 border-t border-ecru-border bg-white/50 space-y-3">
            <UiButton
              v-if="!route.path.startsWith('/book')"
              to="/book"
              size="md"
              class="w-full rounded-xl bg-pine hover:bg-pine-light text-linen font-medium text-sm py-3 justify-center min-h-[44px]"
              trailing-icon="i-lucide-arrow-right"
              @click="closeMenu"
            >
              Book Assessment
            </UiButton>

            <a
              :href="`tel:${clinicInfo.phone.tel}`"
              class="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl border border-ecru-border bg-white text-charcoal hover:text-pine font-medium text-sm transition-colors min-h-[44px]"
              @click="closeMenu"
            >
              <UiIcon
                name="i-lucide-phone"
                class="text-base text-pine"
              />
              <span>Call Clinic: <strong>{{ clinicInfo.phone.display }}</strong></span>
            </a>
          </div>

          <!-- Clinic Quick Info Footer inside Drawer -->
          <div class="mt-auto px-5 sm:px-6 py-4 bg-linen-darker/60 border-t border-ecru-border text-xs text-charcoal-muted space-y-2">
            <div class="flex items-center gap-2 text-pine font-semibold">
              <span class="w-2 h-2 rounded-full bg-clay animate-pulse" />
              <span>Accepting New Athletes &amp; Patients</span>
            </div>
            <div class="flex items-start gap-2">
              <UiIcon
                name="i-lucide-map-pin"
                class="text-sm text-pine shrink-0 mt-0.5"
              />
              <span>{{ clinicInfo.address.full }}</span>
            </div>
            <div class="flex items-start gap-2">
              <UiIcon
                name="i-lucide-clock"
                class="text-sm text-pine shrink-0 mt-0.5"
              />
              <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
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
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
