import { describe, expect, it } from 'vitest'

import { setupMountedComponents } from '../../lib/testUtils'
import GenomeBrowserCard from './GenomeBrowserCard.vue'

describe.concurrent('GenomeBrowserCard.vue', async () => {
  it('renders the GenomeBrowserCard with the hg19 genome', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: GenomeBrowserCard },
      {
        props: {
          genomeRelease: 'grch37',
          locus: 'chr17:41246243-41246243'
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the GenomeBrowserCard with the hg38 genome', async () => {
    // arrange:
    const { wrapper } = await setupMountedComponents(
      { component: GenomeBrowserCard },
      {
        props: {
          genomeRelease: 'grch38',
          locus: 'chr17:41246243-41246243'
        }
      }
    )

    // act: nothing, only test rendering

    // assert:
    expect(wrapper.exists()).toBe(true)
  })
})
