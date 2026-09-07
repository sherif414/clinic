<template>
  <ConfigProvider>
    <div class="min-h-screen flex flex-col bg-linen text-charcoal font-sans antialiased selection:bg-pine/10 selection:text-pine">
      <!-- Accessible Skip to Main Content Link -->
      <a
        href="#main-content"
        class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-pine focus:text-linen focus:font-semibold focus:text-sm focus:rounded-xl focus:shadow-md focus:outline-none focus:ring-2 focus:ring-pine/30"
      >
        Skip to main content
      </a>
      <AppHeader />
      <main
        id="main-content"
        class="flex-1"
        tabindex="-1"
      >
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </ConfigProvider>
</template>
