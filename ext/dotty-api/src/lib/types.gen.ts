// This file is auto-generated by @hey-api/openapi-ts

/**
 * Enumeration for supported assemblies.
 */
export type Assembly = 'GRCh37' | 'GRCh38'

/**
 * Alignment of an exon to an assembly.
 */
export type ExonAlignment = {
  alignment: string | null
  exon_no: number
  ref_end: number
  ref_start: number
  tx_end: number
  tx_start: number
}

export type HTTPValidationError = {
  detail?: Array<ValidationError>
}

/**
 * SPDI representation of a variant.
 */
export type Spdi = {
  alternate_inserted: string
  assembly: string
  contig: string
  pos: number
  reference_deleted: string
}

/**
 * The result of the query.
 */
export type SpdiResult = {
  message?: string | null
  success: boolean
  value?: Spdi | null
}

/**
 * Alignment of a `Transcript` to an assembly.
 */
export type TanscriptAlignment = {
  assembly: string
  cds_end: number
  cds_start: number
  contig: string
  exons: Array<ExonAlignment>
}

/**
 * Transcript model.
 */
export type Transcript = {
  alignments: Array<TanscriptAlignment>
  hgnc_id: string
  hgnc_symbol: string
  id: string
}

/**
 * The result of the query for searching for transcripts.
 */
export type TranscriptResult = {
  transcripts: Array<Transcript>
}

export type ValidationError = {
  loc: Array<string | number>
  msg: string
  type: string
}

export type FindTranscriptsApiV1FindTranscriptsGetData = {
  query: {
    assembly?: Assembly
    hgnc_id: string
  }
}

export type FindTranscriptsApiV1FindTranscriptsGetResponse = TranscriptResult

export type FindTranscriptsApiV1FindTranscriptsGetError = HTTPValidationError

export type ToSpdiApiV1ToSpdiGetData = {
  query: {
    assembly?: Assembly
    q: string
  }
}

export type ToSpdiApiV1ToSpdiGetResponse = SpdiResult

export type ToSpdiApiV1ToSpdiGetError = HTTPValidationError
