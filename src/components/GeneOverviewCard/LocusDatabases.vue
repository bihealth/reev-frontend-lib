<script setup lang="ts">
import { HgncRecord } from '../../pbs/annonars/genes/base'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(
  defineProps<{
    /** HGNC information to display for. */
    hgnc?: HgncRecord
  }>(),
  {
    hgnc: undefined
  }
)
</script>

<template>
  <div>
    <div class="text-subtitle-1">Locus-Specific Databases</div>

    <div v-if="hgnc?.lsdb?.length">
      <div v-for="{ name, url } in hgnc.lsdb" :key="name">
        <a :href="name" target="_blank">
          <v-icon>mdi-launch</v-icon>
          {{ url }}
        </a>
      </div>
      <div>
        <a
          :href="`https://www.kegg.jp/kegg-bin/search_pathway_text?map=map&keyword=${hgnc?.symbol}&mode=1&viewImage=true`"
          target="_blank"
        >
          <v-icon>mdi-launch</v-icon>
          KEGG
        </a>
      </div>
    </div>
    <div v-else>No locus-specific database available for gene.</div>
  </div>
</template>
