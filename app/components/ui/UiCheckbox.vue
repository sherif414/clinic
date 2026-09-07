<script setup lang="ts">
interface Props {
  modelValue?: boolean | 'indeterminate'
  id?: string
  name?: string
  value?: string
  disabled?: boolean
  required?: boolean
  ariaLabel?: string
  ariaControls?: string
  ariaExpanded?: boolean | 'true' | 'false'
  class?: string
  rootClass?: string
  labelClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  id: undefined,
  name: undefined,
  value: 'on',
  disabled: false,
  required: false,
  ariaLabel: undefined,
  ariaControls: undefined,
  ariaExpanded: undefined,
  class: '',
  rootClass: '',
  labelClass: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean | 'indeterminate']
}>()

const generatedId = useId()
const inputId = computed(() => props.id ?? generatedId)

const checked = computed({
  get: () => props.modelValue,
  set: (val: boolean | 'indeterminate') => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div
    class="flex items-start gap-3"
    :class="props.class"
  >
    <CheckboxRoot
      :id="inputId"
      v-model="checked"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="value"
      :aria-label="ariaLabel"
      :aria-controls="ariaControls"
      :aria-expanded="ariaExpanded"
      class="w-5 h-5 mt-0.5 rounded-md border border-ecru-border bg-white flex items-center justify-center shrink-0 cursor-pointer transition-all duration-150 hover:border-pine/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 focus-visible:ring-offset-1 data-[state=checked]:bg-pine data-[state=checked]:border-pine data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
      :class="rootClass"
    >
      <CheckboxIndicator class="flex items-center justify-center text-linen">
        <UiIcon
          name="i-lucide-check"
          class="w-3.5 h-3.5 text-white stroke-[2.5]"
        />
      </CheckboxIndicator>
    </CheckboxRoot>

    <label
      v-if="$slots.default"
      :for="inputId"
      class="cursor-pointer text-xs sm:text-sm text-charcoal select-none leading-snug"
      :class="[
        disabled ? 'cursor-not-allowed opacity-50' : 'hover:text-pine transition-colors',
        labelClass
      ]"
    >
      <slot />
    </label>
  </div>
</template>
