import fs from 'fs'
import path from 'path'
import { describe, expect, it } from 'vitest'

import { setupMountedComponents } from '../../lib/testUtils'
import { Record as ClinvarRecord } from '../../pbs/annonars/clinvar/minimal'
import SeqvarClinvarCard from './SeqvarClinvarCard.vue'

const clinvarRecordBrca1 = ClinvarRecord.fromJson(
  JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '../../api/annonars/fixture.variantInfo.BRCA1.json'),
      'utf8'
    )
  ).result.clinvar
)

describe.concurrent('SeqvarClinvarCard.vue', async () => {
  it('renders the card', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarClinvarCard },
      {
        props: {
          clinvarRecord: clinvarRecordBrca1
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    expect(wrapper.text()).toContain('ClinVar')
    expect(wrapper.text()).toContain('VCV000055407')
    const stars = wrapper.findAll('.mdi-star')
    expect(stars.length).toBe(15)
    const starsOutline = wrapper.findAll('.mdi-star-outline')
    expect(starsOutline.length).toBe(30)
  })

  it('renders the ClinVar info (not found)', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: SeqvarClinvarCard },
      {
        props: {
          clinvarRecord: undefined
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    expect(wrapper.text()).toContain('No ClinVar information available.')
  })
})
