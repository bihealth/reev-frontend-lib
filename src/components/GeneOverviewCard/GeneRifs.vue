<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import { NcbiRecord, RifEntry } from '../../pbs/annonars/genes/base'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(
  defineProps<{
    /** NCBI information to use for display */
    ncbi?: NcbiRecord
  }>(),
  {
    ncbi: undefined
  }
)

// The data to display.
const items = ref<RifEntry[]>([])

// Initialize `items`.
const initializeItems = () => {
  if (props.ncbi?.rifEntries?.length) {
    items.value = props.ncbi.rifEntries.slice(0, 10)
  }
}

// Initialize items on mounted and change of `ncbi.rifEntries`.
onMounted(initializeItems)
watch(() => props.ncbi?.rifEntries, initializeItems)

// Load more items.
type Done = (status: 'error' | 'loading' | 'empty' | 'ok') => void
type LoadItemsArgs = { done: Done }
const loadItems = async ({ done }: LoadItemsArgs) => {
  if (props.ncbi?.rifEntries?.length) {
    if (items.value.length === props.ncbi.rifEntries.length) {
      done('empty')
    } else {
      setTimeout(() => {
        const nextItems = (props.ncbi?.rifEntries ?? []).slice(
          items.value.length,
          items.value.length + 10
        )
        items.value = items.value.concat(nextItems)
        done('ok')
      }, 1000)
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-column">
      <div class="text-subtitle-1">
        NCBI References Into Function
        <small>({{ ncbi?.rifEntries?.length ?? 0 }})</small>
      </div>
    </div>
    <div v-if="ncbi?.rifEntries?.length" class="d-flex flex-column flex-grow-1">
      <v-infinite-scroll :height="200" style="font-size: 90%" :items="items" @load="loadItems">
        <template v-for="(item, index) in items" :key="index">
          <div v-if="item?.text?.length">
            {{ item.text }}
            <a
              :href="'https://www.ncbi.nlm.nih.gov/pubmed/?term=' + item.pmids.join('+')"
              target="_blank"
            >
              <v-icon>mdi-launch</v-icon>
              PubMed
            </a>
          </div>
        </template>

        <template #empty>
          <template v-if="items.length === 0">No GeneRIFs available for gene </template>
        </template>
      </v-infinite-scroll>
    </div>
  </div>
</template>
