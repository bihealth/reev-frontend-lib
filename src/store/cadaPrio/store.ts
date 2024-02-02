/**
 * Store for genes ranking from cada-prio.
 *
 * This includes the data retrieved from the APIs.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { CadaPrioClient, ResponseEntry } from '../../api/cadaPrio'
import { StoreState } from '../../store'

/** Options for `loadData()` */
export interface LoadDataOptions {
  /** HGNC IDs to use for querying. */
  hgncIds?: string[]
  /** Whether to skip Clearing */
  skipClear?: boolean
}

export const useCadaPrioStore = defineStore('cadaPrio', () => {
  /** The current store state. */
  const storeState = ref<StoreState>(StoreState.Initial)

  /** The current gene Ranking. */
  const geneRanking = ref<ResponseEntry[] | undefined>(undefined)

  function clearData() {
    storeState.value = StoreState.Initial
    geneRanking.value = undefined
  }

  /**
   * Run prioritization and return results for the given HPO terms and HGNC IDs.
   *
   * @param hpoTerms HPO terms to use for querying.
   * @param options Options for the query.
   */
  const loadData = async (hpoTerms: string[], options?: LoadDataOptions) => {
    // Clear against artifact unless skipped.
    if (!options?.skipClear) {
      clearData()
    } else {
      // also clear if hpoTerms is empty, then exit
      if (hpoTerms.length === 0) {
        clearData()
        return
      }
    }

    // Load data via API
    storeState.value = StoreState.Loading
    try {
      const client = new CadaPrioClient()
      const response = await client.predictGeneImpact(hpoTerms, options?.hgncIds)
      console.log(response)
      const data = response.entries
      if (data.length === 0) {
        geneRanking.value = undefined
      } else {
        geneRanking.value = response.entries
      }
      storeState.value = StoreState.Active
    } catch (error) {
      console.error(error)
      storeState.value = StoreState.Error
    }
  }

  return {
    storeState,
    geneRanking,
    loadData,
    clearData
  }
})
