import { describe, expect, it } from 'vitest'

import { igvChrom, roundIt, separateIt } from './utils'

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
