import { describe, expect, it } from 'vitest'

import { type Strucvar } from '../../lib/genomicVars'
import { setupMountedComponents } from '../../lib/testUtils'
import StrucvarToolsCard from './StrucvarToolsCard.vue'

/** Example Strucvar */
const strucvarInfo: Strucvar = {
  genomeBuild: 'grch37',
  svType: 'DEL',
  chrom: '17',
  start: 41176312,
  stop: 41277500,
  userRepr: 'DEL-grch37-17-41176312-41277500'
}

describe.concurrent('StrucvarToolsCard.vue', async () => {
  it('renders content', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: StrucvarToolsCard },
      {
        props: {
          strucvar: structuredClone(strucvarInfo)
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    expect(wrapper.text()).toContain('Variant Tools')
    const vButtons = wrapper.findAllComponents({ name: 'VBtn' })
    expect(vButtons.length).toBe(7)
  })
})
