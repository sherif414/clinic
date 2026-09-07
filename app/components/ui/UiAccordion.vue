<script setup lang="ts">
export interface AccordionItemData {
  question?: string
  answer?: string
  title?: string
  content?: string
  value?: string
  disabled?: boolean
}

interface Props {
  items?: AccordionItemData[]
  type?: 'single' | 'multiple'
  collapsible?: boolean
  defaultValue?: string | string[]
  modelValue?: string | string[]
  class?: string
  itemClass?: string
  triggerClass?: string
  contentClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  type: 'single',
  collapsible: true,
  defaultValue: undefined,
  modelValue: undefined,
  class: 'space-y-4',
  itemClass: 'group rounded-2xl border border-ecru-border bg-linen/50 data-[state=open]:bg-white data-[state=open]:border-pine/30 hover:border-pine/30 hover:bg-white/80 transition-colors duration-200 overflow-hidden',
  triggerClass: 'w-full py-5 sm:py-6 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 focus-visible:ring-offset-2 rounded-2xl select-none',
  contentClass: 'overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | string[] | undefined]
}>()

const model = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<template>
  <AccordionRoot
    v-model="model"
    :type="(props.type as any)"
    :collapsible="props.collapsible"
    :default-value="(props.defaultValue as any)"
    :class="props.class"
  >
    <slot>
      <AccordionItem
        v-for="(item, index) in items"
        :key="item.value ?? item.question ?? item.title ?? String(index)"
        v-slot="{ open }"
        :value="item.value ?? `item-${index}`"
        :disabled="item.disabled"
        :class="itemClass"
      >
        <AccordionHeader class="flex">
          <AccordionTrigger :class="triggerClass">
            <slot
              name="trigger"
              :item="item"
              :index="index"
              :open="open"
            >
              <span class="font-serif text-lg sm:text-xl text-pine font-normal text-balance transition-colors duration-200 group-hover:text-pine-dark">
                {{ item.question ?? item.title }}
              </span>
              <span
                class="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-ecru-border flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:scale-105 group-hover:border-pine/30"
                :class="open ? 'bg-pine text-linen border-pine' : 'bg-white text-pine'"
              >
                <UiIcon
                  :name="open ? 'i-lucide-minus' : 'i-lucide-plus'"
                  class="text-sm transition-transform duration-200"
                />
              </span>
            </slot>
          </AccordionTrigger>
        </AccordionHeader>

        <AccordionContent :class="contentClass">
          <slot
            name="content"
            :item="item"
            :index="index"
            :open="open"
          >
            <div class="px-6 sm:px-8 pb-6 sm:pb-7 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-linen-darker">
              <p class="max-w-3xl">
                {{ item.answer ?? item.content }}
              </p>
            </div>
          </slot>
        </AccordionContent>
      </AccordionItem>
    </slot>
  </AccordionRoot>
</template>
