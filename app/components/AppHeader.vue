<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

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

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
  window.removeEventListener('keydown', handleKeyDown)
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
    label: 'Clinical Team',
    to: '/#specialists',
    icon: 'i-lucide-user-check'
  },
  {
    label: 'Patient Stories',
    to: '/#stories',
    icon: 'i-lucide-award'
  },
  {
    label: 'Clinic & Hours',
    to: '/#locations',
    icon: 'i-lucide-clock'
  },
  {
    label: 'FAQ',
    to: '/#faq',
    icon: 'i-lucide-help-circle'
  }
]
</script>

<template>
  <header class="bg-linen/95 backdrop-blur-md border-b border-ecru-border sticky top-0 z-50 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
      <!-- Brand Logo & Title -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5 sm:gap-3.5 group shrink-0"
        @click="closeMenu"
      >
        <img
          src="/logo.svg"
          alt="Apex Sports &amp; Physical Therapy"
          class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-contain"
        >
        <div class="flex flex-col">
          <span class="font-serif text-lg sm:text-2xl font-bold tracking-tight text-pine leading-tight whitespace-nowrap">
            Apex Sports<span class="hidden sm:inline"> &amp; Physical Therapy</span>
          </span>
          <span class="hidden md:block text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal-muted mt-0.5">
            Doctoral Sports Medicine &amp; Performance
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation Links (Large viewports) -->
      <nav
        aria-label="Main Navigation"
        class="hidden lg:flex items-center gap-5 xl:gap-8"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-charcoal hover:text-pine transition-colors flex items-center gap-1.5 py-1 relative group"
        >
          <span>{{ link.label }}</span>
          <span
            v-if="link.badge"
            class="px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded bg-clay-soft text-clay-dark leading-none"
          >
            {{ link.badge }}
          </span>
        </NuxtLink>
      </nav>

      <!-- Direct Contact & Booking CTA -->
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <!-- Direct Phone Link: Icon-only on mobile, full number on sm+ -->
        <a
          class="flex items-center justify-center gap-2 text-charcoal hover:text-pine hover:bg-linen-darker transition-colors font-medium text-sm p-2 sm:px-4 sm:py-2 rounded-full border border-transparent sm:border-ecru-border sm:bg-white/90"
          :href="`tel:${clinicInfo.phone.tel}`"
          :aria-label="clinicInfo.phone.ariaLabel"
        >
          <UiIcon
            name="i-lucide-phone"
            class="text-base text-pine"
          />
          <span class="hidden sm:inline font-semibold text-charcoal text-xs sm:text-sm">{{ clinicInfo.phone.display }}</span>
        </a>

        <!-- Quick Book CTA Button -->
        <UiButton
          to="/book"
          size="sm"
          class="!rounded-full bg-pine hover:bg-pine-light text-linen font-medium text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 border border-transparent hover:border-pine-dark transition-all duration-200"
          trailing-icon="i-lucide-arrow-right"
        >
          <span class="inline sm:hidden">Book</span>
          <span class="hidden sm:inline">Book Assessment</span>
        </UiButton>

        <!-- Mobile / Tablet Hamburger Toggle Button -->
        <button
          type="button"
          class="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-ecru-border bg-white text-charcoal hover:text-pine hover:bg-linen-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 transition-all cursor-pointer"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation-menu"
          aria-label="Toggle mobile navigation menu"
          @click="toggleMenu"
        >
          <UiIcon
            :name="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            :class="isMenuOpen ? 'text-xl rotate-90 transition-transform duration-200' : 'text-xl transition-transform duration-200'"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Backdrop Overlay -->
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
        class="fixed top-16 sm:top-20 left-0 right-0 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto bg-linen border-b border-ecru-border z-50 lg:hidden flex flex-col"
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
            to="/book"
            size="md"
            class="w-full rounded-xl bg-pine hover:bg-pine-light text-linen font-medium text-sm py-3 justify-center"
            trailing-icon="i-lucide-arrow-right"
            @click="closeMenu"
          >
            Book Assessment
          </UiButton>

          <a
            :href="`tel:${clinicInfo.phone.tel}`"
            class="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl border border-ecru-border bg-white text-charcoal hover:text-pine font-medium text-sm transition-colors"
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
        <div class="px-5 sm:px-6 py-4 bg-linen-darker/60 border-t border-ecru-border text-xs text-charcoal-muted space-y-2">
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
            <span>{{ clinicInfo.hours.summary }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
