<script setup lang="ts">
import { computed } from 'vue'

import { SeqvarInfoResult } from '../../api/annonars/types'
import { type Seqvar } from '../../lib/genomicVars'
import { roundIt, separateIt as sep } from '../../lib/utils'
import { Record as GnomadMtdnaRecord } from '../../pbs/annonars/gnomad/mtdna'
import { Record as HelixMtdbRecord } from '../../pbs/annonars/helixmtdb/base'
import { isVariantMtHomopolymer } from './lib'

/** This component's props. */
const props = defineProps<{
  /** Annotated sequence variant. */
  seqvar?: Seqvar
  /** Annotations. */
  varAnnos?: SeqvarInfoResult
}>()

const helixMtDb = computed<HelixMtdbRecord | undefined>(() => {
  if (props?.varAnnos?.helixmtdb) {
    return props?.varAnnos?.helixmtdb
  } else {
    return undefined
  }
})

const gnomadMtDna = computed<GnomadMtdnaRecord | undefined>(() => {
  if (props?.varAnnos && props?.varAnnos.gnomadMtdna) {
    return props?.varAnnos.gnomadMtdna
  } else {
    return undefined
  }
})
</script>

<template>
  <template v-if="seqvar === undefined || varAnnos === undefined">
    <v-skeleton-loader type="table" />
  </template>
  <template v-else>
    <div>
      <div v-if="!isVariantMtHomopolymer(seqvar as Seqvar)">
        <small>
          <v-icon>mdi-alert-circle-outline</v-icon>
          Variant in homopolymeric region
        </small>
      </div>

      <v-table>
        <thead>
          <tr class="text-center">
            <th>Database</th>
            <th>Total Alleles</th>
            <th>Alt Alleles</th>
            <th>Heteroplasmic</th>
            <th>Homoplasmic</th>
            <th>Allele Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-nowrap">gnomAD-MT</td>
            <td class="text-right">
              {{ sep(gnomadMtDna?.an ?? 0) }}
            </td>
            <td class="text-right">
              {{ sep((gnomadMtDna?.acHet ?? 0) + (gnomadMtDna?.acHom ?? 0)) }}
            </td>
            <td class="text-right">
              {{ sep(gnomadMtDna?.acHet ?? 0) }}
            </td>
            <td class="text-right">
              {{ sep(gnomadMtDna?.acHom ?? 0) }}
            </td>
            <!-- eslint-disable vue/no-v-html -->
            <td
              class="text-right"
              v-html="
                roundIt(
                  ((gnomadMtDna?.acHet ?? 0) + (gnomadMtDna?.acHom ?? 0)) / (gnomadMtDna?.an ?? 0),
                  4
                )
              "
            />
            <!-- eslint-enable -->
          </tr>
          <tr>
            <td>HelixMTdb</td>
            <td class="text-right">
              {{ sep(helixMtDb?.numTotal ?? 0) }}
            </td>
            <td class="text-right">
              {{ sep((helixMtDb?.numHet ?? 0) + (helixMtDb?.numHom ?? 0)) }}
            </td>
            <td class="text-right">
              {{ sep(helixMtDb?.numHet ?? 0) }}
            </td>
            <td class="text-right">
              {{ sep(helixMtDb?.numHom ?? 0) }}
            </td>
            <!-- eslint-disable vue/no-v-html -->
            <td
              class="text-right"
              v-html="
                roundIt(
                  ((helixMtDb?.numHet ?? 0) + (helixMtDb?.numHom ?? 0)) /
                    (helixMtDb?.numTotal ?? 0),
                  4
                )
              "
            />
            <!-- eslint-enable -->
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
</template>
