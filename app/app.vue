<template>
  <ConfigProvider>
    <div class="min-h-screen flex flex-col bg-linen text-charcoal font-sans antialiased selection:bg-pine/10 selection:text-pine">
      <AppHeader />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </ConfigProvider>
</template>
