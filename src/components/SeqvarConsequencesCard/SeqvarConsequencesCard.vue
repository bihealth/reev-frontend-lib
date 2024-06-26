<script setup lang="ts">
import { SeqvarResultEntry } from '../../api/mehari/types'
import DocsLink from '../DocsLink/DocsLink.vue'

/** This component's  */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(
  defineProps<{
    /** The variant consequences. */
    consequences?: SeqvarResultEntry[]
  }>(),
  {
    consequences: () => []
  }
)
</script>

<template>
  <template v-if="!consequences?.length">
    <!-- no ENSG => display loader -->
    <!-- <v-skeleton-loader class="mt-3 mx-auto border" type="table" /> -->
    <v-card>
      <v-card-title class="pb-0 pr-2">
        Consequences
        <DocsLink anchor="consequences" />
      </v-card-title>
      <v-card-text>
        <div class="text-muted text-center font-italic">No consequence data available.</div>
      </v-card-text>
    </v-card>
  </template>
  <template v-else>
    <v-card>
      <v-card-title class="pb-0 pr-2">
        Consequences
        <DocsLink anchor="consequences" />
      </v-card-title>
      <v-card-subtitle class="text-overline">
        Variant Consequences on Overlapping Transcripts
      </v-card-subtitle>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th>Gene</th>
              <th>Transcript</th>
              <th>Consequence</th>
              <th>HGVS.t</th>
              <th>HGVS.p</th>
              <th>Exon/Intron</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="consequences?.length">
              <tr v-for="(oneTxCsq, idx) in consequences" :key="idx">
                <td>{{ oneTxCsq.geneSymbol }}</td>
                <td>
                  {{ oneTxCsq.featureId }}
                  <small> ({{ oneTxCsq.featureBiotype }}) </small>
                  <v-chip
                    v-if="(oneTxCsq.featureTag ?? []).includes('ManeSelect')"
                    color="primary"
                    class="ml-3"
                  >
                    MANE Select
                  </v-chip>
                  <v-chip
                    v-if="(oneTxCsq.featureTag ?? []).includes('ManePlusClinical')"
                    color="primary"
                    class="ml-3"
                  >
                    MANE Plus Clinical
                  </v-chip>
                </td>
                <td>{{ oneTxCsq.consequences.join(', ') }}</td>
                <td style="max-width: 400px">{{ oneTxCsq.hgvsT }}</td>
                <td style="max-width: 400px">{{ oneTxCsq.hgvsP }}</td>
                <template v-if="oneTxCsq.rank">
                  <td>{{ oneTxCsq.rank!.rank ?? 0 }} / {{ oneTxCsq.rank!.total ?? 0 }}</td>
                </template>
                <template v-else>
                  <td>-</td>
                </template>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="6" class="text-center font-italic text-grey-darken-2">
                  No overlapping transcripts
                </td>
              </tr>
            </template>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </template>
</template>
