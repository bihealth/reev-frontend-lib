import { describe, expect, it } from 'vitest'

import {
  type BreakendStrucvar,
  type InsertionStrucvar,
  type LinearStrucvar,
  StrandOrientation
} from './genomicVars'
import { igvChrom, igvLocus, roundIt, separateIt } from './utils'

/** Example breakend structural variant, on two chromosomes. */
const breakendStrucvar: BreakendStrucvar = {
  svType: 'BND',
  genomeBuild: 'grch38',
  chrom: '1',
  chrom2: '17',
  start: 1000,
  stop: 5000,
  strandOrientation: StrandOrientation.THREE_TO_FIVE,
  userRepr: 'BND-grch38-1-1000-17-5000-3to5'
}

/** Example linear structural variant. */
const linearStrucvar: LinearStrucvar = {
  svType: 'DEL',
  genomeBuild: 'grch38',
  chrom: '1',
  start: 1000,
  stop: 2000,
  userRepr: 'DEL-grch38-1-1000-2000'
}

/** Example insertion structural variant. */
const insertionStrucvar: InsertionStrucvar = {
  svType: 'INS',
  genomeBuild: 'grch38',
  chrom: '1',
  start: 1000,
  userRepr: 'INS-grch38-1-1000'
}

describe.concurrent('separateIt method', () => {
  it('should separate a positive value with default separator', () => {
    const result = separateIt(123456789)
    expect(result).toBe('123 456 789')
  })

  it('should separate a positive value with specified separator', () => {
    const result = separateIt(123456789, ',')
    expect(result).toBe('123,456,789')
  })

  it('should handle zero value', () => {
    const result = separateIt(0)
    expect(result).toBe('0')
  })

  it('should handle float value', () => {
    const result = separateIt(123456789.12345)
    expect(result).toBe('123 456 789')
  })

  it('should handle values less then 0', () => {
    const result = separateIt(0.0134)
    expect(result).toBe('0')
  })
})

describe('roundIt', () => {
  it('rounds to 2 decimals by default', () => {
    expect(roundIt(1.234567)).toEqual('<abbr title="1.234567">1.23</abbr>')
  })

  it('rounds to 3 decimals when configured', () => {
    expect(roundIt(1.234567, 3)).toEqual('<abbr title="1.234567">1.235</abbr>')
  })

  it('allows to set the label', () => {
    expect(roundIt(1.234567, 2, 'the-label')).toEqual(
      '<abbr title="the-label: 1.234567">1.23</abbr>'
    )
  })

  it('has correct behaviour with undefined value', () => {
    expect(roundIt(undefined)).toEqual("<abbr title='N/A'>0.00</abbr>")
    expect(roundIt(undefined, 2, 'the-label')).toEqual("<abbr title='the-label: N/A'>0.00</abbr>")
    expect(roundIt(undefined, 2, 'the-label', 1.234567)).toEqual(
      "<abbr title='the-label: N/A'>1.23</abbr>"
    )
  })
})

describe.concurrent('igvChrom method', () => {
  it('should map all mitochondrial spellings to chrM', () => {
    // arrange:
    const chroms = ['MT', 'M', 'chrMT', 'chrM']

    // act:
    const results = chroms.map((chrom) => igvChrom(chrom))

    // assert:
    expect(results).toEqual(['chrM', 'chrM', 'chrM', 'chrM'])
  })

  it('should pass through other chromosomes unchanged', () => {
    // arrange:
    const chroms = ['1', 'chr1', 'X', 'chrX']

    // act:
    const results = chroms.map((chrom) => igvChrom(chrom))

    // assert:
    expect(results).toEqual(['1', 'chr1', 'X', 'chrX'])
  })

  it('should pass through undefined unchanged', () => {
    // arrange:
    const chrom = undefined

    // act:
    const result = igvChrom(chrom)

    // assert:
    expect(result).toBe(undefined)
  })
})

describe.concurrent('igvLocus method', () => {
  it('should return both breakends of a translocation as two loci', () => {
    // arrange:
    const strucvar = breakendStrucvar

    // act:
    const result = igvLocus(strucvar)

    // assert:
    expect(result).toBe('1:1000-1001 17:5000-5001')
  })

  it('should return both breakends of a BND on a single chromosome', () => {
    // arrange:
    const strucvar: BreakendStrucvar = { ...breakendStrucvar, chrom2: '1', stop: 200000 }

    // act:
    const result = igvLocus(strucvar)

    // assert:
    expect(result).toBe('1:1000-1001 1:200000-200001')
  })

  it('should normalize the mitochondrial chromosome on both breakends', () => {
    // arrange:
    const strucvar: BreakendStrucvar = { ...breakendStrucvar, chrom: 'MT', chrom2: 'M' }

    // act:
    const result = igvLocus(strucvar)

    // assert:
    expect(result).toBe('chrM:1000-1001 chrM:5000-5001')
  })

  it('should return a single locus for a linear strucvar', () => {
    // arrange:
    const strucvars: LinearStrucvar[] = [
      linearStrucvar,
      { ...linearStrucvar, svType: 'DUP' },
      { ...linearStrucvar, svType: 'INV' }
    ]

    // act:
    const results = strucvars.map((strucvar) => igvLocus(strucvar))

    // assert:
    expect(results).toEqual(['1:1000-2000', '1:1000-2000', '1:1000-2000'])
  })

  it('should return a single locus for an insertion', () => {
    // arrange:
    const strucvar = insertionStrucvar

    // act:
    const result = igvLocus(strucvar)

    // assert:
    expect(result).toBe('1:1000-1001')
  })
})
