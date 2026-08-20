import { type Strucvar } from './genomicVars'

/**
 * Converts a number to a string with thousands separator.
 *
 * @param value     The number to separate.
 * @param separator The separator to use.
 */
export const separateIt = (value: number, separator: string = ' '): string => {
  const asString = `${value}`
  if (!asString.length) {
    return '0'
  }

  const splitString = asString.split('.', 1)
  const cardinal = splitString[0]

  if (!cardinal?.length) {
    splitString[0] = '0'
  } else {
    const offset = cardinal.length % 3
    const arr = [cardinal.slice(0, offset)]
    for (let i = 0; i <= cardinal.length; i += 3) {
      arr.push(cardinal.slice(offset + i, offset + i + 3))
    }
    splitString[0] = arr.filter((s) => s.length).join(separator)
  }

  return splitString.join('.')
}

/**
 * Round `value` to `digits` and return an `<abbr>` tag that has the original value
 * as the `@title` and the rounded value as the inner text.  Optionally add a `label`
 * to the `@title`
 *
 * @param value   The value to use and round.
 * @param digits  The number of digits to round to.
 * @param label   The optional label to add.
 * @param naValue
 *                The value to use if `value` is `undefined`.  If `undefined` then will
 *                display `N/A`.
 * @param titleValue
 *                The optional value to use for the `@title` attribute.  If `undefined`
 *                then will use `value`.
 */
export const roundIt = (
  value: number | undefined,
  digits: number = 2,
  label?: string,
  naValue: number | undefined = 0,
  titleValue?: string
): string => {
  const useLabel = label ? `${label}: ` : ''
  if (value === undefined) {
    if (naValue !== undefined) {
      const roundedValue = naValue.toFixed(digits)
      return `<abbr title='${useLabel}${titleValue ?? 'N/A'}'>${roundedValue}</abbr>`
    } else {
      return roundIt(naValue, digits, label, naValue, 'N/A')
    }
  }
  const roundedValue = value.toFixed(digits)
  return `<abbr title="${useLabel}${value}">${roundedValue}</abbr>`
}

/**
 * Normalizes the mitochondrial chromosome name to the `chrM` spelling expected by IGV.
 *
 * The chromosome names reaching us use any of the four spellings enumerated here, depending
 * on the genome build and the source of the data.  Any other chromosome is passed through
 * unchanged, as is `undefined`.
 *
 * @param chrom The chromosome name to normalize, if any.
 * @returns the chromosome name to use in IGV loci
 */
export const igvChrom = (chrom: string | undefined): string | undefined =>
  chrom !== undefined && ['MT', 'M', 'chrMT', 'chrM'].includes(chrom) ? 'chrM' : chrom

/**
 * Builds the locus to send to IGV for the given structural variant.
 *
 * For breakends, both breakpoints are returned as a space-delimited list of loci, which makes
 * IGV display them side by side in its multi-locus view.  All other types yield a single locus,
 * spanning the whole variant for the linear types and the insertion point for insertions.
 *
 * @param strucvar The structural variant to build the locus for.
 * @returns the locus to use with IGV's `goto` command
 */
export const igvLocus = (strucvar: Strucvar): string => {
  if (strucvar.svType === 'BND') {
    return (
      `${igvChrom(strucvar.chrom)}:${strucvar.start}-${strucvar.start + 1} ` +
      `${igvChrom(strucvar.chrom2)}:${strucvar.stop}-${strucvar.stop + 1}`
    )
  } else if (strucvar.svType === 'INS') {
    return `${igvChrom(strucvar.chrom)}:${strucvar.start}-${strucvar.start + 1}`
  } else {
    return `${igvChrom(strucvar.chrom)}:${strucvar.start}-${strucvar.stop}`
  }
}
