<!--
This component displays the gene overview information.

This includes the NCBI Summary display.
-->
<script setup lang="ts">
import { computed, ref } from 'vue'

import { Record as GeneInfoRecord } from '../../pbs/annonars/genes/base'
import DocsLink from '../DocsLink/DocsLink.vue'
import AlternativeIdentifiers from './AlternativeIdentifiers.vue'
import ExternalResources from './ExternalResources.vue'
import GeneRifs from './GeneRifs.vue'
import LocusDatabases from './LocusDatabases.vue'

/** This component's props. */
const props = withDefaults(
  defineProps<{
    /** `GeneInfoRecord` to display for. */
    geneInfo?: GeneInfoRecord
    /** Whether to show the "gene details" link. */
    showGeneDetailsLink?: boolean
  }>(),
  {
    geneInfo: undefined,
    showGeneDetailsLink: false
  }
)

// -- code for expanded / collapsed card --------------------------------------

/** Whether the card is expanded. */
const isExpanded = ref<boolean>(false)

// -- code for shortened / full summary -------------------------------------

/** Number of words to display when shortened. */
const maxWordsShort = 50

/** Number of words in summary text. */
const summaryWordCount = computed<number>(() => {
  return (props.geneInfo?.ncbi?.summary || '').split(' ').length
})

/** Whether to display the full summary. */
const showFullSummary = ref<boolean>(false)

/** The summary to display. */
const summaryText = computed<string>(() => {
  if (summaryWordCount.value <= maxWordsShort) {
    return props.geneInfo?.ncbi?.summary ?? ''
  }

  if (showFullSummary.value) {
    return props.geneInfo?.ncbi?.summary ?? ''
  } else {
    return (props.geneInfo?.ncbi?.summary || '').split(' ').slice(0, maxWordsShort).join(' ')
  }
})
</script>

<template>
  <!-- no HGNC symbol => display loader -->
  <template v-if="!geneInfo?.hgnc?.symbol">
    <v-skeleton-loader class="mt-3 mx-auto border" type="heading,subtitle,text,text" />
  </template>

  <!-- otherwise, display actual card -->
  <template v-else>
    <v-card>
      <v-card-title class="pb-0 pr-2">
        {{ geneInfo?.hgnc?.symbol }}
        <DocsLink anchor="basic-information" />
      </v-card-title>
      <v-card-subtitle class="text-overline"> Basic Information </v-card-subtitle>
      <v-card-text class="pt-3">
        <div class="pb-2">
          <abbr title="official gene symbol from HGNC (Human Gene Naming Consortium)">
            {{ geneInfo?.hgnc?.name }}
          </abbr>
          &mdash;
          <abbr title="cytogenic location / band">
            {{ geneInfo?.hgnc?.location }}
          </abbr>
          <template v-if="geneInfo?.hgnc?.aliasSymbol?.length">
            &mdash; aliases:
            <abbr title="alias gene symbols">
              {{ geneInfo?.hgnc?.aliasSymbol?.join(', ') }}
            </abbr>
          </template>
        </div>

        <template v-if="summaryWordCount > maxWordsShort">
          <template v-if="showFullSummary">
            {{ summaryText }}
            <a
              :href="`https://www.ncbi.nlm.nih.gov/gene/${geneInfo?.ncbi?.geneId}`"
              target="_blank"
            >
              <v-icon>mdi-launch</v-icon>
              source
            </a>
            &bull;
            <a href="#" @click.prevent="showFullSummary = !showFullSummary"> [shorten] </a>
          </template>
          <template v-else>
            {{ summaryText }}
            <a href="#" @click.prevent="showFullSummary = !showFullSummary"> ... [read all] </a>
          </template>
        </template>
        <template v-else>
          <a :href="`https://www.ncbi.nlm.nih.gov/gene/${geneInfo?.ncbi?.geneId}`" target="_blank">
            <v-icon>mdi-launch</v-icon>
            source
          </a>
        </template>
      </v-card-text>

      <v-expand-transition>
        <div v-if="isExpanded">
          <v-divider class="mt-3" />
          <v-card-text class="pt-3 pb-0">
            <v-row no-gutters>
              <v-col cols="3" class="pr-3">
                <AlternativeIdentifiers :hgnc="geneInfo?.hgnc" />
              </v-col>
              <v-col cols="2" class="pr-3">
                <ExternalResources :hgnc="geneInfo?.hgnc" />
              </v-col>
              <v-col cols="2" class="pr-3">
                <LocusDatabases :hgnc="geneInfo?.hgnc" />
              </v-col>
              <v-col cols="5" class="d-flex">
                <GeneRifs :ncbi="geneInfo?.ncbi" />
              </v-col>
            </v-row>
          </v-card-text>
        </div>
      </v-expand-transition>

      <v-card-actions>
        <v-btn
          :href="`https://pubmed.ncbi.nlm.nih.gov/?term=${geneInfo?.hgnc?.symbol}`"
          target="_blank"
          prepend-icon="mdi-launch"
        >
          PubMed
        </v-btn>
        <v-btn
          :href="`https://www.ncbi.nlm.nih.gov/research/pubtator3/docsum?text=@GENE_${geneInfo?.hgnc?.symbol}`"
          target="_blank"
          prepend-icon="mdi-launch"
        >
          PubTator 3
        </v-btn>
        <v-btn
          :href="`https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=${geneInfo?.hgnc?.ensemblGeneId}`"
          target="_blank"
          prepend-icon="mdi-launch"
        >
          ENSEMBL
        </v-btn>
        <v-btn
          v-if="geneInfo?.hgnc?.refseqAccession?.length"
          :href="`https://www.ncbi.nlm.nih.gov/nuccore/?term=${geneInfo?.hgnc?.refseqAccession[0]}+AND+srcdb_refseq[PROP]`"
          target="_blank"
          prepend-icon="mdi-launch"
        >
          NCBI
        </v-btn>
        <v-btn
          v-if="geneInfo?.hgnc?.uniprotIds?.length"
          :href="`https://www.uniprot.org/uniprotkb/${geneInfo?.hgnc?.uniprotIds[0]}/entry`"
          target="_blank"
          prepend-icon="mdi-launch"
        >
          UniProt
        </v-btn>
        <v-btn
          v-if="geneInfo?.hgnc?.mgdId?.length"
          :href="`https://www.informatics.jax.org/marker/${geneInfo?.hgnc?.mgdId[0]}`"
          target="_blank"
          prepend-icon="mdi-launch"
        >
          MGI
        </v-btn>
        <v-btn
          v-if="showGeneDetailsLink"
          :to="{
            name: 'gene-details',
            params: { gene: geneInfo?.hgnc?.symbol }
          }"
          target="_blank"
          prepend-icon="mdi-arrow-right-circle-outline"
        >
          Gene Details
        </v-btn>

        <v-spacer />
        <div class="text-grey text-caption">
          Alternate Identifiers &middot; External Resources
          <template v-if="geneInfo?.hgnc?.lsdb?.length">
            &middot; Locus-Specific Databases
          </template>
          <template v-if="geneInfo?.ncbi?.rifEntries?.length">
            &middot; Gene RIF ({{ geneInfo?.ncbi?.rifEntries?.length ?? 0 }})
          </template>
        </div>
        <v-btn
          id="overview-card-expand-button"
          :append-icon="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="isExpanded = !isExpanded"
        >
          <template v-if="!isExpanded"> More </template>
          <template v-if="isExpanded"> Less </template>
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
</template>
