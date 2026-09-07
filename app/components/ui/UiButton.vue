<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { NuxtLink } from '#components'

interface Props {
  to?: RouteLocationRaw | string
  href?: string
  target?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'solid' | 'primary' | 'outline' | 'ghost' | 'subtle' | 'inverted' | 'outline-inverted'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  leadingIcon?: string
  trailingIcon?: string
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  target: undefined,
  type: 'button',
  variant: 'solid',
  size: 'md',
  leadingIcon: undefined,
  trailingIcon: undefined,
  disabled: false,
  class: ''
})

const sizeClasses: Record<string, string> = {
  xs: 'text-xs px-2.5 py-1 gap-1.5 rounded-lg',
  sm: 'text-xs sm:text-sm px-4 py-2 gap-1.5 rounded-lg',
  md: 'text-sm px-5 py-2.5 gap-2 rounded-xl',
  lg: 'text-sm sm:text-base px-7 py-3.5 gap-2 rounded-full',
  xl: 'text-base sm:text-lg px-8 py-4 gap-2.5 rounded-full'
}

const variantClasses: Record<string, string> = {
  'solid': 'bg-pine text-linen hover:bg-pine-light active:bg-pine-dark shadow-sm',
  'primary': 'bg-pine text-linen hover:bg-pine-light active:bg-pine-dark shadow-sm',
  'outline': 'border border-ecru-border bg-white text-pine hover:bg-linen-darker shadow-xs',
  'ghost': 'text-charcoal hover:bg-linen-darker hover:text-pine',
  'subtle': 'bg-clay-soft text-clay hover:bg-clay-soft/80',
  'inverted': 'bg-white text-pine hover:bg-linen active:bg-linen-darker shadow-sm',
  'outline-inverted': 'border border-linen/30 bg-transparent text-linen hover:bg-white/10 hover:border-linen/60 shadow-none'
}

const iconSizeClasses: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}

const iconClass = computed(() => iconSizeClasses[props.size] || 'text-base')

const baseClass = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed select-none'

const buttonClasses = computed(() => {
  return [
    baseClass,
    sizeClasses[props.size] || sizeClasses.md,
    variantClasses[props.variant] || variantClasses.solid,
    props.class
  ].filter(Boolean).join(' ')
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :target="target"
    :class="buttonClasses"
  >
    <UiIcon
      v-if="leadingIcon"
      :name="leadingIcon"
      :class="iconClass"
    />
    <slot />
    <UiIcon
      v-if="trailingIcon"
      :name="trailingIcon"
      :class="iconClass"
    />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    :target="target"
    :class="buttonClasses"
  >
    <UiIcon
      v-if="leadingIcon"
      :name="leadingIcon"
      :class="iconClass"
    />
    <slot />
    <UiIcon
      v-if="trailingIcon"
      :name="trailingIcon"
      :class="iconClass"
    />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <UiIcon
      v-if="leadingIcon"
      :name="leadingIcon"
      :class="iconClass"
    />
    <slot />
    <UiIcon
      v-if="trailingIcon"
      :name="trailingIcon"
      :class="iconClass"
    />
  </button>
</template>
