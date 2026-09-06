<script setup lang="ts">
interface Props {
  variant?: 'subtle' | 'solid' | 'outline'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'neutral' | 'clay' | 'pine'
  size?: 'xs' | 'sm' | 'md'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'subtle',
  color: 'secondary',
  size: 'sm',
  class: ''
})

const sizeClasses: Record<string, string> = {
  xs: 'text-[11px] px-2 py-0.5',
  sm: 'text-[11px] px-2.5 py-0.5',
  md: 'text-xs px-3 py-1'
}

const colorMap: Record<string, Record<string, string>> = {
  secondary: {
    subtle: 'bg-clay-soft text-clay-dark border border-clay/20',
    solid: 'bg-clay text-white',
    outline: 'border border-clay text-clay-dark bg-transparent'
  },
  clay: {
    subtle: 'bg-clay-soft text-clay-dark border border-clay/20',
    solid: 'bg-clay text-white',
    outline: 'border border-clay text-clay-dark bg-transparent'
  },
  primary: {
    subtle: 'bg-pine/10 text-pine border border-pine/15',
    solid: 'bg-pine text-linen',
    outline: 'border border-pine text-pine bg-transparent'
  },
  pine: {
    subtle: 'bg-pine/10 text-pine border border-pine/15',
    solid: 'bg-pine text-linen',
    outline: 'border border-pine text-pine bg-transparent'
  },
  success: {
    subtle: 'bg-pine/10 text-pine border border-pine/20',
    solid: 'bg-pine text-linen',
    outline: 'border border-pine text-pine bg-transparent'
  },
  neutral: {
    subtle: 'bg-white text-charcoal-muted border border-ecru-border',
    solid: 'bg-charcoal text-linen',
    outline: 'border border-ecru-border text-charcoal-muted bg-transparent'
  },
  warning: {
    subtle: 'bg-amber-50 text-amber-800 border border-amber-200',
    solid: 'bg-amber-600 text-white',
    outline: 'border border-amber-600 text-amber-700 bg-transparent'
  }
}

const defaultColor: Record<string, string> = {
  subtle: 'bg-clay-soft text-clay-dark border border-clay/20',
  solid: 'bg-clay text-white',
  outline: 'border border-clay text-clay-dark bg-transparent'
}

const badgeClasses = computed(() => {
  const colorObj = (props.color && colorMap[props.color]) ? colorMap[props.color]! : defaultColor
  const variantClass = colorObj[props.variant] || colorObj.subtle || ''
  return [
    'inline-flex items-center gap-1 font-semibold rounded-full uppercase tracking-wider',
    sizeClasses[props.size] || sizeClasses.sm,
    variantClass,
    props.class
  ].filter(Boolean).join(' ')
})
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>
