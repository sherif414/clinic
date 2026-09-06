<script setup lang="ts">
const props = defineProps<{
  name: string
  class?: string
}>()

const normalizedName = computed(() => {
  if (!props.name) return ''
  if (props.name.startsWith('i-lucide-')) {
    return `lucide:${props.name.slice(9)}`
  }
  if (props.name.startsWith('i-simple-icons-')) {
    return `simple-icons:${props.name.slice(15)}`
  }
  return props.name
})
</script>

<template>
  <Icon
    :name="normalizedName"
    :class="props.class"
  />
</template>
