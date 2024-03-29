<!--
This component displays overlapping structural variants in ClinVar.
-->
<script setup lang="ts">
import { computed, ref } from 'vue'

import { type Strucvar } from '../../lib/genomicVars'
import { roundIt } from '../../lib/utils'
import { ResponseRecord as ClinvarSvRecord } from '../../pbs/annonars/clinvar/sv'
import DocsLink from '../DocsLink/DocsLink.vue'
import {
  CLINICAL_SIGNIFICANCE_COLOR,
  CLINICAL_SIGNIFICANCE_LABEL,
  REVIEW_STATUS_LABEL,
  REVIEW_STATUS_STARS
} from '../SeqvarClinvarCard/constants'

/** This component's props. */
const props = defineProps<{
  /** Structural variant to display the card for. */
  strucvar?: Strucvar
  /** ClinVar records to display for. */
  clinvarSvRecords?: ClinvarSvRecord[]
}>()

const vcvUrl = (vcv: string): string => {
  const stripped = vcv.replace(/^VCV0+/, '')
  return `https://www.ncbi.nlm.nih.gov/clinvar/variation/${stripped}/`
}

const rcvUrl = (rcv: string): string => {
  return `https://www.ncbi.nlm.nih.gov/clinvar/${rcv}/?redir=rcv`
}

/** Return coordinates for ClinVar link-out */
const clinvarRange = computed<string>(() => {
  if (props.strucvar === undefined) {
    return ''
  }
  const release = props.strucvar.genomeBuild === 'grch37' ? 'GRCh37' : 'GRCh38'
  const { svType, chrom, start } = props.strucvar
  if (svType === 'BND' || svType === 'INS') {
    return `${release}:${chrom.replace('chr', '')}:${start}-${start}`
  } else {
    const { stop } = props.strucvar
    return `${release}:${chrom.replace('chr', '')}:${start}-${stop}`
  }
})

const sortBy = ref<{ key: string; order: 'asc' | 'desc' }[]>([{ key: 'overlap', order: 'desc' }])

const headers = [
  { title: 'Accession', key: 'accession', sortable: true, align: 'start' },
  { title: 'Significance', key: 'clinSig', sortable: true, align: 'start' },
  {
    title: 'Status',
    key: 'reviewStatus',
    sortRaw(a: ClinvarSvRecord, b: ClinvarSvRecord) {
      const aStars = REVIEW_STATUS_STARS[a.record!.referenceAssertions[0].reviewStatus]
      const bStars = REVIEW_STATUS_STARS[b.record!.referenceAssertions[0].reviewStatus]
      return bStars - aStars
    },
    align: 'start'
  },
  { title: 'Condition', key: 'condition' },
  { title: 'overlap', value: 'overlap', sortable: true, align: 'end' }
]

const expanded = ref<string[]>([])
</script>

<template>
  <v-card class="mt-3">
    <v-card-title class="pb-0 pr-2">
      ClinVar
      <DocsLink anchor="doc-manual-strucvar-clinvar" />
    </v-card-title>
    <v-card-subtitle class="text-overline"> Matching Variants in ClinVar </v-card-subtitle>
    <v-card-text>
      <v-data-table
        v-model:expanded="expanded"
        v-model:sort-by="sortBy"
        density="compact"
        :headers="headers as any"
        :items="clinvarSvRecords ?? []"
        item-value="record!.vcv"
        :must-sort="true"
        show-expand
      >
        <!-- eslint-disable vue/valid-v-slot -->
        <template #item.accession="{ item: { record } }">
          <!-- eslint-enable -->
          <a :href="vcvUrl(record!.vcv)" target="_blank">
            {{ record!.vcv }}
            <small><v-icon>mdi-launch</v-icon></small>
          </a>
        </template>
        <!-- eslint-disable vue/valid-v-slot -->
        <template #item.clinSig="{ item: { record } }">
          <!-- eslint-enable -->
          <v-chip
            density="compact"
            rounded="xl"
            :class="`bg-${
              CLINICAL_SIGNIFICANCE_COLOR[record!.referenceAssertions[0].clinicalSignificance]
            }`"
          >
            {{ CLINICAL_SIGNIFICANCE_LABEL[record!.referenceAssertions[0].clinicalSignificance] }}
          </v-chip>
        </template>
        <template #item.reviewStatus="{ item: { record } }">
          <span class="text-no-wrap">
            <span v-for="i of [1, 2, 3, 4]" :key="i">
              <span v-if="i <= REVIEW_STATUS_STARS[record!.referenceAssertions[0]?.reviewStatus]">
                <v-icon>mdi-star</v-icon>
              </span>
              <span v-else>
                <v-icon>mdi-star-outline</v-icon>
              </span>
            </span>
          </span>
          <span class="pl-3">
            {{ REVIEW_STATUS_LABEL[record!.referenceAssertions[0].reviewStatus] }}
          </span>
        </template>
        <!-- eslint-disable vue/valid-v-slot -->
        <template #item.condition="{ item: { record } }">
          <!-- eslint-enable -->
          {{ record!.referenceAssertions[0].title.split(' AND ')[1] ?? 'N/A' }}
        </template>
        <!-- eslint-disable vue/valid-v-slot -->
        <template #item.overlap="{ item: { overlap } }">
          <!-- eslint-enable -->
          <!-- eslint-disable vue/no-v-html -->
          <span v-html="roundIt(overlap)" />
          <!-- eslint-enable -->
        </template>

        <!-- eslint-disable vue/valid-v-slot -->
        <template #expanded-row="{ item }">
          <!-- eslint-enable -->
          <tr
            v-for="referenceAssertion in item.record!.referenceAssertions"
            :key="referenceAssertion.rcv"
          >
            <td class="text-no-wrap bg-grey-lighten-5">
              <v-icon>mdi-circle-small</v-icon>

              <a :href="rcvUrl(referenceAssertion.rcv)" target="_blank">
                {{ referenceAssertion.rcv }}
                <small><v-icon>mdi-launch</v-icon></small>
              </a>
            </td>
            <td>
              {{ CLINICAL_SIGNIFICANCE_LABEL[referenceAssertion.clinicalSignificance] ?? 'N/A' }}
            </td>
            <td colspan="3">
              <span class="text-no-wrap">
                <span v-for="i of [1, 2, 3, 4, 5]" :key="i">
                  <span v-if="i <= REVIEW_STATUS_STARS[referenceAssertion?.reviewStatus]">
                    <v-icon>mdi-star</v-icon>
                  </span>
                  <span v-else>
                    <v-icon>mdi-star-outline</v-icon>
                  </span>
                </span>
              </span>
              <span class="pl-3">
                {{ REVIEW_STATUS_LABEL[referenceAssertion.reviewStatus] }}
              </span>
            </td>
          </tr>
        </template>

        <template #no-data>
          <v-sheet class="pa-3 text-center font-italic border"> No overlapping ClinVar SV </v-sheet>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn :href="`https://www.ncbi.nlm.nih.gov/clinvar/?term=${clinvarRange}`" target="blank">
        <v-icon>mdi-launch</v-icon>
        Locus in ClinVar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
