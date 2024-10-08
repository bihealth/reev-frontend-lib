// This file is auto-generated by @hey-api/openapi-ts

export type GetLovdClassData = {
  path: {
    /**
     * ***Accepted:***
     * >   - True (return ONLY the genomic variant descriptions and not transcript and protein descriptions)
     * >   - False
     * >   - tx (Stop at transcript level, exclude protein)
     */
    checkonly: string
    /**
     * ***Accepted:***
     * >   - GRCh37
     * >   - GRCh38
     * >   - hg19
     * >   - hg38
     *
     */
    genome_build: string
    /**
     * ***Accepted***
     * >   - True - (liftover to all genomic loci)
     * >   - primary - (lift to primary assembly only)
     * >   - False
     */
    liftover: string
    /**
     * ***Return all possible transcripts***
     * >   None or all (all transcripts at the latest versions)
     * >   raw (all transcripts all version)
     * >   select (select transcripts)
     * >   mane (MANE Select transcripts)
     * >   mane_select (MANE Select and MANE Plus Clinical transcripts)
     *
     * ***Single***
     * >   NM_000093.4
     *
     * ***Multiple***
     * >   NM_000093.4|NM_001278074.1|NM_000093.3
     */
    select_transcripts: string
    /**
     * ***Accepted:***
     * >   - refseq (return data for RefSeq transcript models)
     * >   - ensembl (return data for ensembl transcript models)
     * >   - all
     */
    transcript_model: string
    /**
     * ***Genomic HGVS***
     * >   - NC_000017.10:g.48275363C>A
     *
     * ***Pseudo-VCF***
     * >   - 17-50198002-C-A
     * >   - 17:50198002:C:A
     *
     * >  *Notes*
     * >   - *pVCF, multiple comma separated ALTs are supported*
     * >   - *Multiple variants can be submitted, separated by the pipe '|' character*
     * >   - *Recommended maximum is 10 variants per submission*
     */
    variant_description: string
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetLovdClassResponse = unknown

export type GetLovdClassError = unknown

export type GetVariantFormatterClassData = {
  path: {
    /**
     * ***Accepted:***
     * >   - True (return ONLY the genomic variant descriptions and not transcript and protein descriptions)
     * >   - False
     */
    checkonly: string
    /**
     * ***Accepted:***
     * >   - GRCh37
     * >   - GRCh38
     */
    genome_build: string
    /**
     * ***Return all possible transcripts***
     * >   None or all (all transcripts at the latest versions)
     * >   raw (all transcripts all version)
     * >   select (select transcripts)
     * >   mane (MANE select transcripts)
     * >   mane_select (MANE select and MANE Plus Clinical transcripts)
     *
     * ***Single***
     * >   NM_000093.4
     *
     * ***Multiple***
     * >   NM_000093.4|NM_001278074.1|NM_000093.3
     */
    select_transcripts: string
    /**
     * ***Accepted:***
     * >   - refseq (return data for RefSeq transcript models)
     * >   - ensembl (return data for ensembl transcript models)
     * >   - all
     */
    transcript_model: string
    /**
     * ***Genomic HGVS***
     * >   - NC_000017.10:g.48275363C>A
     *
     * ***Pseudo-VCF***
     * >   - 17-50198002-C-A
     * >   - 17:50198002:C:A
     *
     * >  *Notes*
     * >   - *pVCF, multiple comma separated ALTs are supported*
     * >   - *Multiple variants can be submitted, separated by the pipe '|' character*
     * >   - *Recommended maximum is 10 variants per submission*
     */
    variant_description: string
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetVariantFormatterClassResponse = unknown

export type GetVariantFormatterClassError = unknown

export type GetGene2TranscriptsClassData = {
  path: {
    /**
     * ***HGNC gene symbol, HGNC ID, or transcript ID***
     *
     * Current supported transcript IDs
     * - RefSeq
     *
     * ***Single***
     * >   COL1A1
     * >   HGNC:2197
     * >   NM_000088.4
     *
     */
    gene_query: string
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetGene2TranscriptsClassResponse = unknown

export type GetGene2TranscriptsClassError = unknown

export type GetGene2TranscriptsV2ClassData = {
  path: {
    /**
     * ***HGNC gene symbol, HGNC ID, or transcript ID***
     *
     * Current supported transcript IDs
     * - RefSeq or Ensembl
     *
     * ***Single***
     * >   COL1A1
     * >   HGNC:2197
     * >   NM_000088.4
     *
     * ***Multiple***
     * >   COL1A1|COL1A2|COL5A1|HGNC:2197
     *
     */
    gene_query: string
    /**
     * ***GRCh37 or GRCh38***
     *
     * all = all builds, GRCh37 = GRCh37 only, GRCh38 = GRCh38 only
     */
    genome_build: string
    /**
     * ***Return all possible transcripts***
     * >   False
     *
     * ***Single***
     * >   NM_000088.4
     *
     * ***Multiple***
     * >   NM_000088.4|NM_000088.3
     *
     * ***Limit to select transcripts***
     * >    mane_select = MANE Select transcript only
     * >    mane = Mane Select and MANE Plus Clinical
     * >    select = All transcripts that have been classified as canonical
     */
    limit_transcripts: string
    /**
     * ***RefSeq or Ensembl***
     *
     * all = all transcripts, refseq = RefSeq only, ensembl = Ensembl only
     */
    transcript_set: string
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetGene2TranscriptsV2ClassResponse = unknown

export type GetGene2TranscriptsV2ClassError = unknown

export type GetHgvs2ReferenceClassData = {
  path: {
    /**
     * ***hgvs_description***
     *
     * Sequence variation description in the HGVS format
     *
     * *Intronic descriptions in the context of transcript reference sequences are currently unsupported*
     */
    hgvs_description: string
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetHgvs2ReferenceClassResponse = unknown

export type GetHgvs2ReferenceClassError = unknown

export type GetVariantValidatorClassData = {
  path: {
    /**
     * ***Accepted:***
     * >   - GRCh37
     * >   - GRCh38
     * >   - hg19
     * >   - hg38
     */
    genome_build: string
    /**
     * ***Return all possible transcripts***
     *
     * ***Return only 'select' transcripts***
     * >   select
     * >   mane_select
     * >   mane (MANE and MANE Plus Clinical)
     * >   refseq_select
     *
     * ***Single***
     * >   NM_000093.4
     *
     * ***Multiple***
     * >   NM_000093.4|NM_001278074.1|NM_000093.3
     */
    select_transcripts: string
    /**
     * ***HGVS***
     * >   - NM_000088.3:c.589G>T
     * >   - NC_000017.10:g.48275363C>A
     * >   - NG_007400.1:g.8638G>T
     * >   - LRG_1:g.8638G>T
     * >   - LRG_1t1:c.589G>T
     *
     * ***Pseudo-VCF***
     * >   - 17-50198002-C-A
     * >   - 17:50198002:C:A
     * >   - GRCh38-17-50198002-C-A
     * >   - GRCh38:17:50198002:C:A
     *
     * ***Hybrid***
     * >   - chr17:50198002C>A
     * >   - chr17:50198002C>A(GRCh38)
     * >   - chr17(GRCh38):50198002C>A
     * >   - chr17:g.50198002C>A
     * >   - chr17:g.50198002C>A(GRCh38)
     * >   - chr17(GRCh38):g.50198002C>A
     */
    variant_description: string
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetVariantValidatorClassResponse = unknown

export type GetVariantValidatorClassError = unknown

export type GetVariantValidatorEnsemblClassData = {
  path: {
    /**
     * ***Accepted:***
     * >   - GRCh37
     * >   - GRCh38
     * >   - hg19
     * >   - hg38
     */
    genome_build: string
    /**
     * ***Return all possible transcripts***
     *
     * ***Return only 'select' transcripts***
     * >   select
     * >   mane_select
     * >   mane (MANE and MANE Plus Clinical)
     * >   refseq_select
     *
     * ***Single***
     * >   ENST00000225964.10
     *
     * ***Multiple***
     * >   ENST00000225964.9|ENST00000225964.10
     */
    select_transcripts: string
    /**
     * ***HGVS***
     * >   - ENST00000225964.10:c.589G>T
     * >   - NC_000017.10:g.48275363C>A
     *
     * ***Pseudo-VCF***
     * >   - 17-50198002-C-A
     * >   - 17:50198002:C:A
     * >   - GRCh38-17-50198002-C-A
     * >   - GRCh38:17:50198002:C:A
     *
     * ***Hybrid***
     * >   - chr17:50198002C>A
     * >   - chr17:50198002C>A(GRCh38)
     * >   - chr17(GRCh38):50198002C>A
     * >   - chr17:g.50198002C>A
     * >   - chr17:g.50198002C>A(GRCh38)
     * >   - chr17(GRCh38):g.50198002C>A
     */
    variant_description: string
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetVariantValidatorEnsemblClassResponse = unknown

export type GetVariantValidatorEnsemblClassError = unknown

export type GetHelloClassData = {
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetHelloClassResponse = unknown

export type GetHelloClassError = unknown

export type GetLimitedRateHellloData = {
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetLimitedRateHellloResponse = unknown

export type GetLimitedRateHellloError = unknown

export type GetExceptionClassData = {
  path: {
    error_code: number
  }
  query?: {
    /**
     * ***Select the response format***
     */
    'content-type'?: 'application/json' | 'text/xml'
  }
}

export type GetExceptionClassResponse = unknown

export type GetExceptionClassError = unknown
