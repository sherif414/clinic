<script setup lang="ts">
import type { DateValue } from '@internationalized/date'

interface Props {
  modelValue?: DateValue
  minValue?: DateValue
  maxValue?: DateValue
  isDateUnavailable?: (date: DateValue) => boolean
  locale?: string
  weekdayFormat?: 'short' | 'narrow' | 'long'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  minValue: undefined,
  maxValue: undefined,
  isDateUnavailable: undefined,
  locale: 'en-US',
  weekdayFormat: 'short',
  class: ''
})

const emit = defineEmits<{
  'update:modelValue': [val: DateValue | undefined]
}>()

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    v-model="value"
    :min-value="minValue"
    :max-value="maxValue"
    :is-date-unavailable="isDateUnavailable"
    :locale="locale"
    :weekday-format="weekdayFormat"
    class="w-full select-none"
    :class="props.class"
  >
    <!-- Header with Month/Year and Prev/Next Navigation -->
    <CalendarHeader class="flex items-center justify-between pb-3 px-1">
      <CalendarHeading class="font-serif text-charcoal font-semibold text-base capitalize" />
      <div class="flex items-center gap-1">
        <CalendarPrev class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-ecru-border text-charcoal hover:text-pine hover:bg-linen transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none">
          <UiIcon
            name="i-lucide-chevron-left"
            class="text-sm"
          />
        </CalendarPrev>
        <CalendarNext class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-ecru-border text-charcoal hover:text-pine hover:bg-linen transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none">
          <UiIcon
            name="i-lucide-chevron-right"
            class="text-sm"
          />
        </CalendarNext>
      </div>
    </CalendarHeader>

    <!-- Month Grid Table -->
    <div
      v-for="month in grid"
      :key="month.value.toString()"
      class="w-full"
    >
      <CalendarGrid class="w-full border-collapse">
        <CalendarGridHead>
          <CalendarGridRow class="flex w-full justify-between mb-1.5">
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="text-[11px] font-semibold text-charcoal-muted uppercase text-center w-8 sm:w-9 h-7 flex items-center justify-center"
            >
              {{ day.slice(0, 2) }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>

        <CalendarGridBody class="space-y-1">
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="index"
            class="flex w-full justify-between"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              class="relative p-0 text-center text-xs"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl text-xs font-medium transition-all cursor-pointer text-charcoal hover:bg-linen-darker data-[selected]:bg-pine data-[selected]:text-linen data-[selected]:font-semibold data-[today]:not-[[data-selected]]:border data-[today]:not-[[data-selected]]:border-pine data-[today]:not-[[data-selected]]:font-bold data-[disabled]:text-charcoal-light/30 data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none data-[unavailable]:text-charcoal-light/35 data-[unavailable]:line-through data-[unavailable]:cursor-not-allowed data-[unavailable]:pointer-events-none data-[outside-view]:text-charcoal-light/20 data-[outside-view]:pointer-events-none"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
