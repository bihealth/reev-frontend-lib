import fs from 'fs'
import path from 'path'
import { describe, expect, it } from 'vitest'

import { SeqvarResult } from '../../api/mehari/types'
import { setupMountedComponents } from '../../lib/testUtils'
import SeqvarConsequencesCard from './SeqvarConsequencesCard.vue'

/** Fixtures */
const seqvarCsqResult = SeqvarResult.fromJson(
  JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '../../api/mehari/fixture.seqvarCsqResponse.BRCA1.json'),
      'utf-8'
    )
  )
)

describe.concurrent('SeqvarConsequencesCard.vue', async () => {
  it('renders the consequence info', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarConsequencesCard },
      {
        props: {
          consequences: seqvarCsqResult.result
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    const table = wrapper.find('table')
    expect(table.exists()).toBe(true)
    const headers = table.findAll('th')
    expect(headers.length).toBe(6)
    expect(headers[0].text()).toBe('Gene')
    expect(headers[1].text()).toBe('Transcript')
    expect(headers[2].text()).toBe('Consequence')
    expect(headers[3].text()).toBe('HGVS.t')
    expect(headers[4].text()).toBe('HGVS.p')
    expect(headers[5].text()).toBe('Exon/Intron')
  })

  it('displays MANE Select chip for transcripts with mane_select tag', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarConsequencesCard },
      {
        props: {
          consequences: seqvarCsqResult.result
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    const chips = wrapper.findAll('.v-chip')
    const maneSelectChip = chips.find((chip) => chip.text().includes('MANE Select'))
    expect(maneSelectChip).toBeDefined()
    expect(maneSelectChip?.text()).toContain('MANE Select')
  })

  it('displays MANE Plus Clinical chip for transcripts with mane_plus_clinical tag', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarConsequencesCard },
      {
        props: {
          consequences: seqvarCsqResult.result
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    const chips = wrapper.findAll('.v-chip')
    const manePlusChip = chips.find((chip) => chip.text().includes('MANE Plus Clinical'))
    expect(manePlusChip).toBeDefined()
    expect(manePlusChip?.text()).toContain('MANE Plus Clinical')
  })

  it('displays MANE Select backport chip for transcripts with mane_select_backport tag', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarConsequencesCard },
      {
        props: {
          consequences: seqvarCsqResult.result
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    const chips = wrapper.findAll('.v-chip')
    const backportChip = chips.find((chip) => chip.text().includes('MANE Select (GRCh38)'))
    expect(backportChip).toBeDefined()
    expect(backportChip?.text()).toContain('MANE Select (GRCh38)')
  })

  it('displays MANE Plus Clinical backport chip for transcripts with mane_plus_clinical_backport tag', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarConsequencesCard },
      {
        props: {
          consequences: seqvarCsqResult.result
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    const chips = wrapper.findAll('.v-chip')
    const backportChip = chips.find((chip) => chip.text().includes('MANE Plus Clinical (GRCh38)'))
    expect(backportChip).toBeDefined()
    expect(backportChip?.text()).toContain('MANE Plus Clinical (GRCh38)')
  })

  it('displays correct number of transcripts from fixture', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarConsequencesCard },
      {
        props: {
          consequences: seqvarCsqResult.result
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(seqvarCsqResult.result.length)
  })
})
