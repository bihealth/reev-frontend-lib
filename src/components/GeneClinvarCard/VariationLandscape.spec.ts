import fs from 'fs'
import path from 'path'
import { describe, expect, test } from 'vitest'

import type { GenomeBuild } from '../../lib/genomeBuilds'
import { setupMountedComponents } from '../../lib/testUtils'
import { ClinvarPerGeneRecord } from '../../pbs/annonars/clinvar/per_gene'
import { GeneTranscriptsResponse } from '../../pbs/mehari/server'
import { type Transcript } from '../../pbs/mehari/txs'
import VariationLandscape from './VariationLandscape.vue'

// Load fixture data for gene TGDS (little data) and BRCA1 (lots of data).
const clinvarPerGeneTgds = ClinvarPerGeneRecord.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.clinvarPerGene.TGDS.json'), 'utf8')
)
const clinvarPerGeneBrca1 = ClinvarPerGeneRecord.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.clinvarPerGene.BRCA1.json'), 'utf8')
)
const genesTxsTgds37 = GeneTranscriptsResponse.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.genesTxs.TGDS.37.json'), 'utf8')
)
const genesTxsTgds38 = GeneTranscriptsResponse.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.genesTxs.TGDS.38.json'), 'utf8')
)
const genesTxsBrca137 = GeneTranscriptsResponse.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.genesTxs.BRCA1.37.json'), 'utf8')
)

describe.concurrent('VariationLandscape.vue', async () => {
  test.each([
    ['TGDS', 'grch37', genesTxsTgds37.transcripts, clinvarPerGeneTgds],
    ['TGDS', 'grch38', genesTxsTgds38.transcripts, clinvarPerGeneTgds],
    ['BRCA1', 'grch37', genesTxsBrca137.transcripts, clinvarPerGeneBrca1]
  ])(
    'renders the plot for %s, %s',
    async (
      geneSymbol: string,
      genomeBuild: string,
      transcripts: Transcript[],
      clinvarPerGene: ClinvarPerGeneRecord
    ) => {
      // arrange:
      const { wrapper } = await setupMountedComponents(
        { component: VariationLandscape },
        {
          props: {
            geneSymbol,
            genomeBuild: genomeBuild as GenomeBuild,
            transcripts,
            clinvarPerGene
          }
        }
      )

      // act: nothing, only test rendering

      // assert:
      expect(wrapper.text()).toContain('Variation Lanscape')
      expect(wrapper.text()).toContain(geneSymbol)
      const vegaPlot = wrapper.findComponent({ name: 'VegaPlot' })
      expect(vegaPlot.exists()).toBe(true)
    }
  )

  test.each([['geneSymbol'], ['genomeBuild'], ['transcripts'], ['clinvarPerGene']])(
    'renders the plot as smoke test with undefined %s',
    async (prop: string) => {
      // arrange:
      const props = {
        geneSymbol: 'TGDS',
        genomeBuild: 'grch37',
        genesTxsTgds37,
        clinvarPerGeneTgds
      }
      // @ts-ignore
      props[prop] = undefined
      const { wrapper } = await setupMountedComponents(
        { component: VariationLandscape },
        {
          props
        }
      )

      // act: nothing, only test rendering

      // assert:
      const vegaPlot = wrapper.findComponent({ name: 'VegaPlot' })
      expect(vegaPlot.exists()).toBe(false)
    }
  )
})
