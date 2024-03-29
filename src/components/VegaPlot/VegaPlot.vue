<script setup lang="ts">
/** Simple wrapper around vega for plotting data.
 *
 * The "vue-vega" library has not been updated for a long time.
 */
import * as vega from 'vega'
import vegaEmbed from 'vega-embed'
import { type Ref, computed, onMounted, ref, watch } from 'vue'

/* istanbul ignore if  */
const widthPlot = computed(() => {
  const windowWidth = window.innerWidth
  if (windowWidth < 1264) {
    return windowWidth - 210
  } else {
    return windowWidth - 600
  }
})

/** Define the props. */
const props = defineProps<{
  description?: string
  dataValues?: any[]
  dataName?: string
  encoding?: any
  params?: any
  layer?: any
  width?: number | string | null
  height?: number | string | null
  mark?: boolean
  renderer?: string
  transform?: any[]
  background?: string
}>()

/** The <div> with the plot. */
const plotDivRef = ref(null)
/** The vega plot once initialized. */
const vegaViewRef = ref(null)

/** The vega specification. */
const vegaLiteSpec = computed(() => {
  const res = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: props.width === null ? widthPlot.value : props.width,
    height: props.height,
    description: props.description,
    params: props.params,
    background: props.background ?? 'transparent',
    data: {
      values: props.dataValues,
      name: props.dataName
    },
    encoding: props.encoding,
    transform: props.transform,
    mark: true,
    layer: []
  }
  if (props.mark !== undefined && props.mark !== null && props.mark !== false) {
    res.mark = props.mark as any
  }
  if (props.layer !== undefined && props.layer !== null) {
    res.layer = props.layer as any
  }
  return res
})

/** Make component reactive to props.data changes. */
watch(
  () => props.dataValues,
  (newValue) => {
    if (vegaViewRef.value !== null) {
      const changeset = vega
        .changeset()
        .remove(() => true)
        .insert(newValue)

      ;(vegaViewRef.value as any).change(props.dataName, changeset).run()
      ;(vegaViewRef.value as any).resize()
    }
  }
)

/** `ref` to `vegaEmbed()` result so we can `await` the rendering. */
const vegaEmbedPromiseRef: Ref<Promise<{ view: any }> | null> = ref(null)

/** Create vega-embed plot on mounting. */
onMounted(() => {
  const vegaOpts = {
    renderer: props.renderer
  }
  vegaEmbedPromiseRef.value = vegaEmbed(
    plotDivRef.value as any,
    vegaLiteSpec.value as any,
    vegaOpts as any
  )
  vegaEmbedPromiseRef.value!.then(({ view }: { view: any }) => {
    vegaViewRef.value = view
  })
})

/** Return vegaEmbedPromise. */
const getVegaEmbedPromise = () => vegaEmbedPromiseRef.value

defineExpose({
  // exposed to be used in testing (only)
  getVegaEmbedPromise
})
</script>

<template>
  <div ref="plotDivRef" class="vega-embed" />
</template>

<style>
.vega-embed {
  padding-top: 2px;
  padding-left: 2px;
  border-radius: 8px;
  background-color: #eeeeee;
}
/* .vega-embed summary {
  top: -25px !important;
  left: -5px;
  right: unset !important;
}
.vega-embed.has-actions {
  padding-right: 10px !important;
}
.vega-embed .vega-actions {
  right: unset !important;
  top: 10px !important;
  left: -5px !important;
}
.vega-embed .vega-actions::before {
  left: 5px !important;
  right: unset !important;
}
.vega-embed .vega-actions::after {
  left: 6px !important;
  right: unset !important;
} */
</style>
