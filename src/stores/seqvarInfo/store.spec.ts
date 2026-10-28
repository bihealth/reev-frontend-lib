import fs from 'fs'
import path from 'path'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import createFetchMock from 'vitest-fetch-mock'

import { StoreState } from '..'
import { SeqvarImpl } from '../../lib/genomicVars'
import { useSeqvarInfoStore } from './store'

/** Fixtures loaded from JSON files. */
const variantInfoBrca1Json = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../../api/annonars/fixture.variantInfo.BRCA1.json'),
    'utf8'
  )
)
const seqvarCsqBrca1Json = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../../api/mehari/fixture.seqvarCsqResponse.BRCA1.json'),
    'utf8'
  )
)
const geneInfoBrca1Json = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../api/annonars/fixture.geneInfo.BRCA1.json'), 'utf8')
)
const geneClinvarBrca1Json = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../../api/annonars/fixture.geneClinvar.BRCA1.json'),
    'utf8'
  )
)
const hpoTermsBrca1Json = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../../api/viguno/fixture.resolveHpoTermByGene.BRCA1.json'),
    'utf8'
  )
)

/** Initialize mock for `fetch()`. */
const fetchMocker = createFetchMock(vi)

/** Example sequence variant in BRCA1. */
const seqvar = new SeqvarImpl('grch37', '17', 41197751, 'G', 'T')

describe('seqvarInfo store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    fetchMocker.enableMocks()
    fetchMocker.resetMocks()
  })

  it('should load gene data by the HGNC ID of the consequences', async () => {
    // arrange:
    fetchMocker.mockResponse((req) => {
      switch (req.url) {
        case '/internal/proxy/annonars/annos/variant?genome_release=grch37&' +
          'chromosome=17&pos=41197751&reference=G&alternative=T':
          return Promise.resolve(JSON.stringify(variantInfoBrca1Json))
        case '/internal/proxy/mehari/api/v1/seqvars/csq?assembly=grch37&' +
          'chromosome=17&position=41197751&reference=G&alternative=T':
          return Promise.resolve(JSON.stringify(seqvarCsqBrca1Json))
        case '/internal/proxy/annonars/genes/info?hgnc_id=HGNC:1100':
          return Promise.resolve(JSON.stringify(geneInfoBrca1Json))
        case '/internal/proxy/annonars/genes/clinvar?hgnc_id=HGNC:1100':
          return Promise.resolve(JSON.stringify(geneClinvarBrca1Json))
        case '/internal/proxy/viguno/api/v1/hpo/genes?gene_id=HGNC:1100&hpo_terms=true':
          return Promise.resolve(JSON.stringify(hpoTermsBrca1Json))
        default:
          return Promise.reject(new Error(`Unexpected URL: ${req.url}`))
      }
    })
    const store = useSeqvarInfoStore()

    // act:
    await store.initialize(seqvar)

    // assert:
    expect(store.storeState).toBe(StoreState.Active)
    expect(store.geneInfo?.hgnc?.hgncId).toBe('HGNC:1100')
  })
})
