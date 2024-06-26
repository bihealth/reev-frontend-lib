<script setup lang="ts">
import { computed } from 'vue'

import { roundIt } from '../../lib/utils'

/** This component's props. */
const props = withDefaults(
  defineProps<{
    value: number | undefined
    useRounded?: boolean
    naValue?: string | number
    hrefUrl?: string | undefined
    rangeGray?: [number, number] | undefined
    rangeGreen?: [number, number] | undefined
    rangeOrange?: [number, number] | undefined
    rangeRed?: [number, number] | undefined
  }>(),
  {
    naValue: 'N/A',
    useRounded: true,
    hrefUrl: undefined,
    rangeGray: undefined,
    rangeGreen: undefined,
    rangeOrange: undefined,
    rangeRed: undefined
  }
)

/**
 * The computed chip color - based on the value and the ranges.
 */
const chipColor = computed<string>(() => {
  if (props.value === undefined) {
    return 'grey-lighten-5'
  } else if (
    props.rangeGray !== undefined &&
    props.value >= props.rangeGray[0] &&
    props.value <= props.rangeGray[1]
  ) {
    return 'grey-lighten-2'
  } else if (
    props.rangeGreen !== undefined &&
    props.value >= props.rangeGreen[0] &&
    props.value <= props.rangeGreen[1]
  ) {
    return 'green-lighten-2'
  } else if (
    props.rangeOrange !== undefined &&
    props.value >= props.rangeOrange[0] &&
    props.value <= props.rangeOrange[1]
  ) {
    return 'orange-darken-2'
  } else if (
    props.rangeRed !== undefined &&
    props.value >= props.rangeRed[0] &&
    props.value <= props.rangeRed[1]
  ) {
    return 'red-darken-3'
  } else {
    return 'transparent'
  }
})
</script>

<template>
  <template v-if="hrefUrl === undefined">
    <v-chip density="compact" :class="`bg-${chipColor}`">
      <!-- eslint-disable vue/no-v-html -->
      <template v-if="value !== undefined && useRounded">
        <span v-html="roundIt(value)"></span>
      </template>
      <!-- eslint-enable -->
      <template v-else>
        {{ value ?? props.naValue }}
      </template>
    </v-chip>
  </template>
  <template v-else>
    <a :href="hrefUrl" target="blank">
      <v-chip density="compact" :class="`bg-${chipColor}`">
        <!-- eslint-disable vue/no-v-html -->
        <template v-if="value !== undefined && useRounded">
          <span v-html="roundIt(value)"></span>
        </template>
        <!-- eslint-enable -->
        <template v-else>
          {{ value ?? props.naValue }}
        </template>
      </v-chip>
      <small class="pl-1">
        <v-icon :icon="value === undefined ? undefined : 'mdi-launch'" />
      </small>
    </a>
  </template>
</template>
