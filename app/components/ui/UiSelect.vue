<script setup lang="ts">
export interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}

interface Props {
  modelValue?: string
  options?: (string | SelectOption)[]
  placeholder?: string
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  class?: string
  triggerClass?: string
  contentClass?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  options: () => [],
  placeholder: 'Select an option',
  disabled: false,
  required: false,
  name: undefined,
  id: undefined,
  class: '',
  triggerClass: '',
  contentClass: '',
  ariaLabel: undefined
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const generatedId = useId()
const triggerId = computed(() => props.id ?? generatedId)

const normalizedOptions = computed<SelectOption[]>(() => {
  return props.options.map((opt) => {
    if (typeof opt === 'string') {
      return { label: opt, value: opt }
    }
    return opt
  })
})

const selectedValue = computed({
  get: () => props.modelValue ?? '',
  set: (val: string) => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div
    class="relative w-full"
    :class="props.class"
  >
    <SelectRoot
      v-model="selectedValue"
      :disabled="disabled"
      :required="required"
      :name="name"
    >
      <SelectTrigger
        :id="triggerId"
        :aria-label="ariaLabel"
        class="group w-full px-4 py-2.5 rounded-xl border border-ecru-border bg-white text-sm text-charcoal flex items-center justify-between transition-all duration-150 hover:border-pine/40 focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/20 disabled:bg-linen disabled:text-charcoal-light disabled:cursor-not-allowed cursor-pointer select-none text-left data-[placeholder]:text-charcoal-light"
        :class="triggerClass"
      >
        <SelectValue :placeholder="placeholder" />
        <SelectIcon as-child>
          <UiIcon
            name="i-lucide-chevron-down"
            class="text-charcoal-muted text-base transition-transform duration-200 shrink-0 ml-2 group-data-[state=open]:rotate-180"
          />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          position="popper"
          :side-offset="4"
          class="z-50 min-w-[var(--reka-select-trigger-width)] max-h-60 overflow-hidden rounded-xl border border-ecru-border bg-white p-1.5 shadow-[0_4px_24px_-4px_rgba(27,56,43,0.12)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1"
          :class="contentClass"
        >
          <SelectScrollUpButton class="flex items-center justify-center h-6 bg-white text-charcoal-muted cursor-default">
            <UiIcon
              name="i-lucide-chevron-up"
              class="text-sm"
            />
          </SelectScrollUpButton>

          <SelectViewport class="p-1">
            <SelectItem
              v-for="opt in normalizedOptions"
              :key="opt.value"
              :value="opt.value"
              :disabled="opt.disabled"
              class="relative flex items-center justify-between px-3 py-2 rounded-lg text-sm text-charcoal select-none cursor-pointer outline-none transition-colors data-[highlighted]:bg-linen data-[highlighted]:text-pine data-[state=checked]:font-semibold data-[state=checked]:text-pine data-[disabled]:opacity-40 data-[disabled]:pointer-events-none"
            >
              <SelectItemText>
                {{ opt.label }}
              </SelectItemText>
              <SelectItemIndicator class="inline-flex items-center justify-center shrink-0 ml-2">
                <UiIcon
                  name="i-lucide-check"
                  class="text-pine text-sm"
                />
              </SelectItemIndicator>
            </SelectItem>
          </SelectViewport>

          <SelectScrollDownButton class="flex items-center justify-center h-6 bg-white text-charcoal-muted cursor-default">
            <UiIcon
              name="i-lucide-chevron-down"
              class="text-sm"
            />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
