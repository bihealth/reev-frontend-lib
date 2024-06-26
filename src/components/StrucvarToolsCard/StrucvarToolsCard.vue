<script setup lang="ts">
import { computed } from 'vue'

import { type Strucvar } from '../../lib/genomicVars'
import DocsLink from '../DocsLink/DocsLink.vue'

/** The component's props. */
const props = defineProps<{
  strucvar?: Strucvar
}>()

/** This component's emits. */
const emit = defineEmits<{
  /** An error occured, e.g., communicating with server. */
  error: [msg: string]
}>()

const svStop = (strucvar: Strucvar): number => {
  return strucvar.svType === 'INS' || strucvar.svType === 'BND' ? strucvar.start + 1 : strucvar.stop
}

const ucscLinkout = computed((): string => {
  if (!props.strucvar) {
    return '#'
  }
  const db = props.strucvar?.genomeBuild === 'grch37' ? 'hg19' : 'hg38'
  if (props.strucvar.svType === 'BND' || props.strucvar.svType === 'INS') {
    return (
      `https://genome-euro.ucsc.edu/cgi-bin/hgTracks?db=${db}&position=` +
      `${props.strucvar.chrom}:${props.strucvar.start}-${svStop(props.strucvar)}`
    )
  } else {
    return (
      `https://genome-euro.ucsc.edu/cgi-bin/hgTracks?db=${db}&position=` +
      `${props.strucvar.chrom}:${props.strucvar.start}-${svStop(props.strucvar)}`
    )
  }
})

const ensemblLinkout = computed((): string => {
  if (!props.strucvar) {
    return '#'
  }
  const loc = `${props.strucvar.chrom}:${props.strucvar.start}-${svStop(props.strucvar)}`
  if (props.strucvar.genomeBuild === 'grch37') {
    return `https://grch37.ensembl.org/Homo_sapiens/Location/View?r=${loc}`
  } else if (props.strucvar?.genomeBuild === 'grch38') {
    return `https://ensembl.org/Homo_sapiens/Location/View?r=${loc}`
  }
  return '#'
})

const dgvLinkout = computed((): string => {
  if (!props.strucvar) {
    return '#'
  }
  const db = props.strucvar?.genomeBuild === 'grch37' ? 'hg19' : 'hg38'

  return (
    `http://dgv.tcag.ca/gb2/gbrowse/dgv2_${db}/?name=${props.strucvar.chrom}:` +
    `${props.strucvar.start}-${svStop(props.strucvar)};search=Search`
  )
})

const gnomadLinkout = computed((): string => {
  if (!props.strucvar) {
    return '#'
  }
  const dataset = props.strucvar?.genomeBuild === 'grch37' ? 'gnomad_r2_1' : 'gnomad_r3'
  return (
    `https://gnomad.broadinstitute.org/region/${props.strucvar.chrom}:` +
    `${props.strucvar.start}-${svStop(props.strucvar)}?dataset=${dataset}`
  )
})

const varsomeLinkout = computed((): string => {
  if (!props.strucvar) {
    return '#'
  }
  const urlRelease = props.strucvar?.genomeBuild === 'grch37' ? 'hg19' : 'hg38'
  const chrom = props.strucvar.chrom.startsWith('chr')
    ? props.strucvar.chrom
    : `chr${props.strucvar.chrom}`
  return `https://varsome.com/cnv/${urlRelease}/${chrom}:${props.strucvar.start}:${svStop(
    props.strucvar
  )}:${props.strucvar.svType}`
})

const franklinLinkout = computed((): string => {
  if (!props.strucvar) {
    return '#'
  }
  const { chrom, start, svType } = props.strucvar
  const urlRelease = props.strucvar?.genomeBuild === 'grch37' ? 'hg19' : 'hg38'
  return `https://franklin.genoox.com/clinical-db/variant/sv/chr${chrom}-${start}-${svStop(
    props.strucvar
  )}-${svType}-${urlRelease}`
})

const jumpToLocus = async () => {
  const chrom = props.strucvar?.chrom == 'chrMT' ? 'chrM' : props.strucvar?.chrom
  // NB: we allow the call to fetch here as it goes to local IGV.
  await fetch(
    `http://127.0.0.1:60151/goto?locus=${chrom}:${props.strucvar?.start}-${svStop(props.strucvar!)}`
  ).catch((e) => {
    const msg = "Couldn't connect to IGV. Please make sure IGV is running and try again."
    emit('error', msg)
    console.error(msg, e)
  })
}

interface Linkout {
  href: string
  label: string
}

const genomeBrowsers = computed<Linkout[]>(() => {
  return [
    { label: 'ENSEMBL', href: ensemblLinkout.value },
    { label: 'UCSC', href: ucscLinkout.value }
  ]
})

const resources = computed<Linkout[]>(() => {
  return [
    { label: 'DGV', href: dgvLinkout.value },
    { label: 'gnomAD', href: gnomadLinkout.value },
    { label: 'varsome', href: varsomeLinkout.value },
    { label: 'genoox Franklin', href: franklinLinkout.value }
  ]
})
</script>

<template>
  <v-card class="mt-3">
    <v-card-title class="pb-0 pr-2">
      Variant Tools
      <DocsLink anchor="clinvar-information" />
    </v-card-title>

    <v-card-subtitle class="text-overline"> Genome Browsers </v-card-subtitle>
    <v-card-text>
      <v-btn
        v-for="linkout in genomeBrowsers"
        :key="linkout.label"
        :href="linkout.href"
        target="_blank"
        prepend-icon="mdi-launch"
        variant="tonal"
        rounded="sm"
        class="mr-2"
      >
        {{ linkout.label }}
      </v-btn>
    </v-card-text>

    <v-card-subtitle class="text-overline"> Other Resources </v-card-subtitle>
    <v-card-text>
      <v-btn
        v-for="linkout in resources"
        :key="linkout.label"
        :href="linkout.href"
        target="_blank"
        prepend-icon="mdi-launch"
        variant="tonal"
        rounded="sm"
        class="mr-2"
      >
        {{ linkout.label }}
      </v-btn>
    </v-card-text>

    <v-card-actions>
      <v-btn prepend-icon="mdi-launch" @click.prevent="jumpToLocus()"> Jump in Local IGV </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.external-resource-item {
  float: left;
  margin-right: 10px;
}

.external-resource-item:last-child {
  float: none;
  margin-right: 0;
}
</style>
