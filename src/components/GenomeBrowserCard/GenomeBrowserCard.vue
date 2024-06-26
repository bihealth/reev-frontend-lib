<script setup lang="ts">
// @ts-nocheck
import igv from 'igv'
import { onMounted, ref, watch } from 'vue'

import type { GenomeBuild } from '../../lib/genomeBuilds'
import DocsLink from '../DocsLink/DocsLink.vue'
import { publicTracks } from './constants'
import { GenomeBrowser } from './types'

/** The component's props. */
const props = withDefaults(
  defineProps<{
    // Genome build
    genomeBuild?: GenomeBuild
    // Locus to go to, e.g., "chr1:1,900,000-2,000,000"
    locus?: string
  }>(),
  { genomeBuild: 'grch37', locus: '' }
)

/** The <div> to show the browser in. */
const genomeBrowserDivRef = ref(null)
/** Set on IGV browser creation. */
const igvBrowser = ref(null)

/**
 * Translate genome build names from GRCh37/GRCh38 to hg19/hg38.
 *
 * @param value The genome build name.
 * @returns The translated genome build name. (hg19/hg38)
 */
const translateGenome = (value: GenomeBuild) => {
  if (value === 'grch37') {
    return 'hg19'
  } else if (value === 'grch38') {
    return 'hg38'
  } else {
    return value
  }
}

/**
 * Add public tracks.
 *
 * @param browser The IGV browser.
 */
const addTracks = (browser: any) => {
  for (const track of publicTracks()) {
    browser.loadTrack(track)
  }
}

const removeTracks = (browser: any) => {
  for (const track of publicTracks()) {
    browser.removeTrack(track)
  }
}

// Watch changes to the genome (requires full reload).
watch(
  () => props.genomeBuild,
  () => {
    if (igvBrowser.value && props.genomeBuild) {
      removeTracks(igvBrowser.value! as GenomeBrowser)
      ;(igvBrowser.value! as GenomeBrowser)
        .loadGenome(translateGenome(props.genomeBuild))
        .then(() => {
          addTracks(igvBrowser.value! as GenomeBrowser)
          if (props.locus) {
            ;(igvBrowser.value! as GenomeBrowser).search(props.locus)
          }
        })
    }
  }
)

// Watch changes to the locus (jumping is enough).
watch(
  () => props.locus,
  () => {
    if (igvBrowser.value && props.locus) {
      ;(igvBrowser.value! as GenomeBrowser).search(props.locus)
    }
  }
)

// Construct igv.js browser when mounted.
onMounted(() => {
  igv
    .createBrowser(genomeBrowserDivRef.value, {
      genome: translateGenome(props.genomeBuild),
      locus: props.locus
    })
    .then((browser: GenomeBrowser) => {
      addTracks(browser)
      if (props.locus) {
        ;(browser! as GenomeBrowser).search(props.locus)
      }
      igvBrowser.value = browser
    })
})
</script>

<template>
  <v-card class="mt-3">
    <v-card-title class="pb-0 pr-2">
      Genome Browser
      <DocsLink anchor="genome-browser" />
    </v-card-title>
    <v-card-text>
      <div ref="genomeBrowserDivRef" style="margin: 5px" />
    </v-card-text>
  </v-card>
</template>
../../lib/GenomeBrowser.c
