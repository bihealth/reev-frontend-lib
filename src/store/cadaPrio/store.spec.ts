import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import createFetchMock from 'vitest-fetch-mock'

import { StoreState } from '../../store'
import { useCadaPrioStore } from './store'

const fetchMocker = createFetchMock(vi)

describe.concurrent('Cada Prio Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    fetchMocker.enableMocks()
    fetchMocker.resetMocks()
  })

  it('should have initial state', () => {
    // arrange:
    const store = useCadaPrioStore()

    // act: nothing to do

    // assert:
    expect(store.storeState).toBe(StoreState.Initial)
    expect(store.geneRanking).toBe(null)
  })

  it('should predict gene impact', async () => {
    // arrange:
    fetchMocker.mockResponse(JSON.stringify({ result: 'pathogenic' }))
    const store = useCadaPrioStore()

    // act:
    await store.loadData(['HP:0000001'])

    // assert:
    expect(store.storeState).toBe(StoreState.Active)
    expect(store.geneRanking).toStrictEqual({ result: 'pathogenic' })
  })

  it('should handle error when predicting gene impact', async () => {
    // arrange:
    // Disable error logging
    vi.spyOn(console, 'error').mockImplementation(() => {})
    fetchMocker.mockReject(new Error('Internal Server Error'))
    const store = useCadaPrioStore()

    // act:
    await store.loadData(['HP:0000001'])

    // assert:
    expect(store.storeState).toBe(StoreState.Error)
    expect(store.geneRanking).toBe(null)
  })
})
