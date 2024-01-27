import { JsonValue } from '@protobuf-ts/runtime'
import type { Meta, StoryObj } from '@storybook/vue3'

import { TranscriptResult } from '../../api/dotty'
import { ClinvarPerGeneRecord } from '../../pbs/annonars/clinvar/per_gene'
import VariationLandscape from './VariationLandscape.vue'
import geneClinvarBrca1Json from './fixture.geneClinvar.BRCA1.json'
import geneClinvarTgdsJson from './fixture.geneClinvar.TGDS.json'
import transcriptsBrca1Json from './fixture.transcripts.BRCA1.json'
import transcriptsTgdsJson from './fixture.transcripts.TGDS.json'

// Here, fixture data is loaded via `import` from JSON file.  Reading the file
// as in the tests fails with "process is not defined" error in the browser.

// @ts-ignore
const clinvarPerGeneTgds = ClinvarPerGeneRecord.fromJson(geneClinvarTgdsJson as JsonValue)
// @ts-ignore
const clinvarPerGeneBrca1 = ClinvarPerGeneRecord.fromJson(geneClinvarBrca1Json as JsonValue)
// @ts-ignore
const transcriptsTgds = TranscriptResult.fromJson(transcriptsTgdsJson as JsonValue)
// @ts-ignore
const transcriptsBrca1 = TranscriptResult.fromJson(transcriptsBrca1Json as JsonValue)

const meta = {
  title: 'Gene/Clinvar/VariationLandscape',
  component: VariationLandscape,
  tags: ['autodocs'],
  argTypes: {
    geneSymbol: { control: 'text' },
    genomeBuild: { control: 'text' },
    transcripts: { control: 'object' },
    clinvarPerGene: { control: 'object' }
  },
  args: {
    geneSymbol: 'BRCA1',
    genomeBuild: 'grch37',
    transcripts: transcriptsBrca1,
    clinvarPerGene: clinvarPerGeneBrca1
  }
} satisfies Meta<typeof VariationLandscape>

export default meta
type Story = StoryObj<typeof meta>

export const TGDS: Story = {
  args: {
    geneSymbol: 'TGDS',
    genomeBuild: 'grch37',
    transcripts: transcriptsTgds,
    clinvarPerGene: clinvarPerGeneTgds
  }
}

export const TGDSGrch38: Story = {
  args: {
    geneSymbol: 'TGDS',
    genomeBuild: 'grch38',
    transcripts: transcriptsTgds,
    clinvarPerGene: clinvarPerGeneTgds
  }
}

export const BRCA1: Story = {
  args: {
    geneSymbol: 'BRCA1',
    genomeBuild: 'grch37',
    transcripts: transcriptsBrca1,
    clinvarPerGene: clinvarPerGeneBrca1
  }
}

export const UndefinedGeneSymbol: Story = {
  args: {
    geneSymbol: undefined,
    genomeBuild: 'grch37',
    transcripts: transcriptsBrca1,
    clinvarPerGene: clinvarPerGeneBrca1
  }
}

export const UndefinedTranscripts: Story = {
  args: {
    geneSymbol: 'TGDS',
    genomeBuild: 'grch37',
    transcripts: undefined,
    clinvarPerGene: clinvarPerGeneTgds
  }
}

export const UndefinedPerGene: Story = {
  args: {
    geneSymbol: 'TGDS',
    genomeBuild: 'grch37',
    transcripts: transcriptsBrca1,
    clinvarPerGene: undefined
  }
}
