// @generated by protobuf-ts 2.9.3 with parameter keep_enum_prefix
// @generated from protobuf file "annonars/gnomad/gnomad_sv2.proto" (package "annonars.gnomad.gnomad_sv2", syntax proto3)
// tslint:disable
//
// Protocol buffers for representing gnomAD-SV v2 data.
//
// Note that we don't attempt to parse everything out of gnomAD-SV yet, just
// the parts that are important for identifying SVs as potentially benign.
//
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import type { PartialMessage } from '@protobuf-ts/runtime'
import { reflectionMergePartial } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'

/**
 * Store the relevant allele counts and frequencies in a given sub cohort.
 *
 * @generated from protobuf message annonars.gnomad.gnomad_sv2.AlleleCounts
 */
export interface AlleleCounts {
  /**
   * Total number of alleles genotyped (for biallelic sites) or individuals
   * with copy-state estimates (for multiallelic sites).
   *
   * @generated from protobuf field: int32 ac = 1;
   */
  ac: number
  /**
   * Number of non-reference alleles observed (for biallelic sites) or
   * individuals at each copy state (for multiallelic sites).
   *
   * @generated from protobuf field: int32 an = 2;
   */
  an: number
  /**
   * Allele frequency (for biallelic sites) or copy-state frequency (for
   * multiallelic sites).
   *
   * @generated from protobuf field: float af = 3;
   */
  af: number
  /**
   * Total number of individuals with complete genotypes (biallelic sites
   * only).
   *
   * @generated from protobuf field: int32 n_bi_genos = 4;
   */
  nBiGenos: number
  /**
   * Number of individuals with homozygous reference genotypes (biallelic
   * sites only).
   *
   * @generated from protobuf field: int32 n_homref = 5;
   */
  nHomref: number
  /**
   * Number of individuals with heterozygous genotypes (biallelic sites
   * only).
   *
   * @generated from protobuf field: int32 n_het = 6;
   */
  nHet: number
  /**
   * Number of individuals with homozygous alternate genotypes (biallelic
   * sites only).
   *
   * @generated from protobuf field: int32 n_homalt = 7;
   */
  nHomalt: number
  /**
   * Homozygous reference genotype frequency (biallelic sites only).
   *
   * @generated from protobuf field: float freq_homref = 8;
   */
  freqHomref: number
  /**
   * Heterozygous genotype frequency (biallelic sites only).
   *
   * @generated from protobuf field: float freq_het = 9;
   */
  freqHet: number
  /**
   * Homozygous alternate genotype frequency (biallelic sites only).
   *
   * @generated from protobuf field: float freq_homalt = 10;
   */
  freqHomalt: number
}
/**
 * Store the allele counts for the given sub cohort and sub cohort factored by sex.
 *
 * @generated from protobuf message annonars.gnomad.gnomad_sv2.AlleleCountsBySex
 */
export interface AlleleCountsBySex {
  /**
   * Overall allele counts in the sub cohort.
   *
   * @generated from protobuf field: annonars.gnomad.gnomad_sv2.AlleleCounts overall = 1;
   */
  overall?: AlleleCounts
  /**
   * Allele counts in female/XX karyotype individuals of sub cohort.
   *
   * @generated from protobuf field: annonars.gnomad.gnomad_sv2.AlleleCounts xx = 2;
   */
  xx?: AlleleCounts
  /**
   * Allele counts in male/XY karyotype individuals of sub cohort.
   *
   * @generated from protobuf field: annonars.gnomad.gnomad_sv2.AlleleCounts xy = 3;
   */
  xy?: AlleleCounts
}
/**
 * Store the allele counts for the given sub cohort in the given population.
 *
 * @generated from protobuf message annonars.gnomad.gnomad_sv2.PopulationAlleleCounts
 */
export interface PopulationAlleleCounts {
  /**
   * Name of the population.
   *
   * @generated from protobuf field: annonars.gnomad.gnomad_sv2.Population population = 1;
   */
  population: Population
  /**
   * The overall allele counts and the one by sex.
   *
   * @generated from protobuf field: annonars.gnomad.gnomad_sv2.AlleleCountsBySex counts = 2;
   */
  counts?: AlleleCountsBySex
}
/**
 * Store the allele counts for the given cohort.
 *
 * @generated from protobuf message annonars.gnomad.gnomad_sv2.CohortAlleleCounts
 */
export interface CohortAlleleCounts {
  /**
   * Name of the cohort, empty for global.
   *
   * @generated from protobuf field: optional string cohort = 1;
   */
  cohort?: string
  /**
   * The overall allele counts and the one by sex.
   *
   * @generated from protobuf field: annonars.gnomad.gnomad_sv2.AlleleCountsBySex by_sex = 2;
   */
  bySex?: AlleleCountsBySex
  /**
   * Allele counts for each population.
   *
   * @generated from protobuf field: repeated annonars.gnomad.gnomad_sv2.PopulationAlleleCounts by_population = 3;
   */
  byPopulation: PopulationAlleleCounts[]
}
/**
 * Protocol buffer for the gnomAD-SV v2 VCF record.
 *
 * The more specialized fields from the INFO column are stored in separate, optional fields such
 * that we don't end up with a humongous message.
 *
 * @generated from protobuf message annonars.gnomad.gnomad_sv2.Record
 */
export interface Record {
  /**
   * Chromosome name.
   *
   * @generated from protobuf field: string chrom = 1;
   */
  chrom: string
  /**
   * 1-based start position.
   *
   * @generated from protobuf field: int32 pos = 2;
   */
  pos: number
  /**
   * End position of the structural variant
   *
   * @generated from protobuf field: optional int32 end = 3;
   */
  end?: number
  /**
   * Chromosome of second breakpoint position.
   *
   * @generated from protobuf field: optional string chrom2 = 4;
   */
  chrom2?: string
  /**
   * End coordinate of second breakpoint position.
   *
   * @generated from protobuf field: optional int32 end2 = 5;
   */
  end2?: number
  /**
   * Identifier of the record.
   *
   * @generated from protobuf field: string id = 6;
   */
  id: string
  /**
   * Site-level filters.
   *
   * @generated from protobuf field: repeated annonars.gnomad.gnomad_sv2.Filter filters = 7;
   */
  filters: Filter[]
  /**
   * SV Type.
   *
   * @generated from protobuf field: annonars.gnomad.gnomad_sv2.SvType sv_type = 8;
   */
  svType: SvType
  /**
   * Refined complex type.
   *
   * @generated from protobuf field: optional annonars.gnomad.gnomad_sv2.CpxType cpx_type = 9;
   */
  cpxType?: CpxType
  /**
   * Variant allele counts in the different cohorts and population.
   *
   * The populations in gnomAD v2/3 are: empty for global, "controls", "non_neuro",
   * and "non_topmed".
   *
   * @generated from protobuf field: repeated annonars.gnomad.gnomad_sv2.CohortAlleleCounts allele_counts = 10;
   */
  alleleCounts: CohortAlleleCounts[]
}
/**
 * Protocol buffer enum for site-level filters.
 *
 * @generated from protobuf enum annonars.gnomad.gnomad_sv2.Filter
 */
export enum Filter {
  /**
   * unknown
   *
   * @generated from protobuf enum value: FILTER_UNKNOWN = 0;
   */
  FILTER_UNKNOWN = 0,
  /**
   * All filters passed.
   *
   * @generated from protobuf enum value: FILTER_PASS = 1;
   */
  FILTER_PASS = 1,
  /**
   * Site does not meet minimum requirements for fraction of PCR- samples
   * with non-null genotypes. Flags sites more prone to false discoveries.
   *
   * @generated from protobuf enum value: FILTER_LOW_CALL_RATE = 2;
   */
  FILTER_LOW_CALL_RATE = 2,
  /**
   * Multiallelic site.
   *
   * @generated from protobuf enum value: FILTER_MULTIALLELIC = 3;
   */
  FILTER_MULTIALLELIC = 3,
  /**
   * Site enriched for non-reference genotypes among PCR+ samples. Likely
   * reflects technical batch effects. All PCR- samples have been assigned
   * null GTs for these sites.
   *
   * @generated from protobuf enum value: FILTER_PCRPLUS_ENRICHED = 4;
   */
  FILTER_PCRPLUS_ENRICHED = 4,
  /**
   * Variant is unresolved.
   *
   * @generated from protobuf enum value: FILTER_UNRESOLVED = 5;
   */
  FILTER_UNRESOLVED = 5,
  /**
   * Allele frequency for this variant in PCR- samples is sensitive to
   * choice of GQ filtering thresholds. All PCR- samples have been assigned
   * null GTs for these sites.
   *
   * @generated from protobuf enum value: FILTER_UNSTABLE_AF_PCRMINUS = 6;
   */
  FILTER_UNSTABLE_AF_PCRMINUS = 6
}
/**
 * The types of SV in gnomad-SV v2.
 *
 * @generated from protobuf enum annonars.gnomad.gnomad_sv2.SvType
 */
export enum SvType {
  /**
   * unknown
   *
   * @generated from protobuf enum value: SV_TYPE_UNKNOWN = 0;
   */
  SV_TYPE_UNKNOWN = 0,
  /**
   * Breakend.
   *
   * @generated from protobuf enum value: SV_TYPE_BND = 1;
   */
  SV_TYPE_BND = 1,
  /**
   * Complex variant.
   *
   * @generated from protobuf enum value: SV_TYPE_CPX = 2;
   */
  SV_TYPE_CPX = 2,
  /**
   * Translocation.
   *
   * @generated from protobuf enum value: SV_TYPE_CTX = 3;
   */
  SV_TYPE_CTX = 3,
  /**
   * Deletion.
   *
   * @generated from protobuf enum value: SV_TYPE_DEL = 4;
   */
  SV_TYPE_DEL = 4,
  /**
   * Duplication.
   *
   * @generated from protobuf enum value: SV_TYPE_DUP = 5;
   */
  SV_TYPE_DUP = 5,
  /**
   * Insertion.
   *
   * @generated from protobuf enum value: SV_TYPE_INS = 6;
   */
  SV_TYPE_INS = 6,
  /**
   * Inversion.
   *
   * @generated from protobuf enum value: SV_TYPE_INV = 7;
   */
  SV_TYPE_INV = 7,
  /**
   * Copy number variable region.
   *
   * @generated from protobuf enum value: SV_TYPE_MCNV = 8;
   */
  SV_TYPE_MCNV = 8
}
/**
 * Further definition of CPX type.
 *
 * @generated from protobuf enum annonars.gnomad.gnomad_sv2.CpxType
 */
export enum CpxType {
  /**
   * unknown
   *
   * @generated from protobuf enum value: CPX_TYPE_UNKNOWN = 0;
   */
  CPX_TYPE_UNKNOWN = 0,
  /**
   * CCR: Complex chromosomal rearrangement, involving two or more
   * chromosomes and multiple SV signatures.
   *
   * @generated from protobuf enum value: CPX_TYPE_CCR = 1;
   */
  CPX_TYPE_CCR = 1,
  /**
   * INS_iDEL: Insertion with deletion at insertion site.
   *
   * @generated from protobuf enum value: CPX_TYPE_INS_IDEL = 2;
   */
  CPX_TYPE_INS_IDEL = 2,
  /**
   * INVdel: Complex inversion with 3' flanking deletion.
   *
   * @generated from protobuf enum value: CPX_TYPE_INV_DEL = 3;
   */
  CPX_TYPE_INV_DEL = 3,
  /**
   * INVdup: Complex inversion with 3' flanking duplication.
   *
   * @generated from protobuf enum value: CPX_TYPE_INV_DUP = 4;
   */
  CPX_TYPE_INV_DUP = 4,
  /**
   * dDUP: Dispersed duplication.
   *
   * @generated from protobuf enum value: CPX_TYPE_DDUP = 5;
   */
  CPX_TYPE_DDUP = 5,
  /**
   * dDUP_iDEL: Dispersed duplication with deletion at insertion site.
   *
   * @generated from protobuf enum value: CPX_TYPE_DDUP_IDEL = 6;
   */
  CPX_TYPE_DDUP_IDEL = 6,
  /**
   * delINVdel: Complex inversion with 5' and 3' flanking deletions.
   *
   * @generated from protobuf enum value: CPX_TYPE_DEL_INV_DEL = 7;
   */
  CPX_TYPE_DEL_INV_DEL = 7,
  /**
   * delINVdup: Complex inversion with 5' flanking deletion and 3' flanking
   * duplication.
   *
   * @generated from protobuf enum value: CPX_TYPE_DEL_INV_DUP = 8;
   */
  CPX_TYPE_DEL_INV_DUP = 8,
  /**
   * delINV: Complex inversion with 5' flanking deletion.
   *
   * @generated from protobuf enum value: CPX_TYPE_DEL_INV = 9;
   */
  CPX_TYPE_DEL_INV = 9,
  /**
   * dupINVdel: Complex inversion with 5' flanking duplication and 3'
   * flanking deletion.
   *
   * @generated from protobuf enum value: CPX_TYPE_DUP_INV_DEL = 10;
   */
  CPX_TYPE_DUP_INV_DEL = 10,
  /**
   * dupINVdup: Complex inversion with 5' and 3' flanking duplications.
   *
   * @generated from protobuf enum value: CPX_TYPE_DUP_INV_DUP = 11;
   */
  CPX_TYPE_DUP_INV_DUP = 11,
  /**
   * dupINV: Complex inversion with 5' flanking duplication.
   *
   * @generated from protobuf enum value: CPX_TYPE_DUP_INV = 12;
   */
  CPX_TYPE_DUP_INV = 12,
  /**
   * piDUP_FR: Palindromic inverted tandem duplication, forward-reverse
   * orientation.
   *
   * @generated from protobuf enum value: CPX_TYPE_PI_DUP_FR = 13;
   */
  CPX_TYPE_PI_DUP_FR = 13,
  /**
   * piDUP_RF: Palindromic inverted tandem duplication, reverse-forward
   * orientation.
   *
   * @generated from protobuf enum value: CPX_TYPE_PI_DUP_RF = 14;
   */
  CPX_TYPE_PI_DUP_RF = 14,
  /**
   * CTX_INV: new in gnomAD SV 4.0 but not documented yet
   *
   * @generated from protobuf enum value: CPX_TYPE_CTX_INV = 15;
   */
  CPX_TYPE_CTX_INV = 15,
  /**
   * CTX_PP/QQ: new in gnomAD SV 4.0 but not documented yet
   *
   * @generated from protobuf enum value: CPX_TYPE_CTX_PP_QQ = 16;
   */
  CPX_TYPE_CTX_PP_QQ = 16,
  /**
   * CTX_PQ/QP: new in gnomAD SV 4.0 but not documented yet
   *
   * @generated from protobuf enum value: CPX_TYPE_CTX_PQ_QP = 17;
   */
  CPX_TYPE_CTX_PQ_QP = 17
}
/**
 * gnomAD SV population.
 *
 * @generated from protobuf enum annonars.gnomad.gnomad_sv2.Population
 */
export enum Population {
  /**
   * unknown
   *
   * @generated from protobuf enum value: POPULATION_UNKNOWN = 0;
   */
  POPULATION_UNKNOWN = 0,
  /**
   * African
   *
   * @generated from protobuf enum value: POPULATION_AFR = 1;
   */
  POPULATION_AFR = 1,
  /**
   * Ad Mixed American
   *
   * @generated from protobuf enum value: POPULATION_AMR = 2;
   */
  POPULATION_AMR = 2,
  /**
   * East Asian
   *
   * @generated from protobuf enum value: POPULATION_EAS = 3;
   */
  POPULATION_EAS = 3,
  /**
   * European.
   *
   * @generated from protobuf enum value: POPULATION_EUR = 4;
   */
  POPULATION_EUR = 4,
  /**
   * Other,
   *
   * @generated from protobuf enum value: POPULATION_OTHER = 5;
   */
  POPULATION_OTHER = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class AlleleCounts$Type extends MessageType<AlleleCounts> {
  constructor() {
    super('annonars.gnomad.gnomad_sv2.AlleleCounts', [
      { no: 1, name: 'ac', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 2, name: 'an', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 3, name: 'af', kind: 'scalar', T: 2 /*ScalarType.FLOAT*/ },
      { no: 4, name: 'n_bi_genos', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 5, name: 'n_homref', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 6, name: 'n_het', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 7, name: 'n_homalt', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 8, name: 'freq_homref', kind: 'scalar', T: 2 /*ScalarType.FLOAT*/ },
      { no: 9, name: 'freq_het', kind: 'scalar', T: 2 /*ScalarType.FLOAT*/ },
      { no: 10, name: 'freq_homalt', kind: 'scalar', T: 2 /*ScalarType.FLOAT*/ }
    ])
  }
  create(value?: PartialMessage<AlleleCounts>): AlleleCounts {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.ac = 0
    message.an = 0
    message.af = 0
    message.nBiGenos = 0
    message.nHomref = 0
    message.nHet = 0
    message.nHomalt = 0
    message.freqHomref = 0
    message.freqHet = 0
    message.freqHomalt = 0
    if (value !== undefined) reflectionMergePartial<AlleleCounts>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: AlleleCounts
  ): AlleleCounts {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* int32 ac */ 1:
          message.ac = reader.int32()
          break
        case /* int32 an */ 2:
          message.an = reader.int32()
          break
        case /* float af */ 3:
          message.af = reader.float()
          break
        case /* int32 n_bi_genos */ 4:
          message.nBiGenos = reader.int32()
          break
        case /* int32 n_homref */ 5:
          message.nHomref = reader.int32()
          break
        case /* int32 n_het */ 6:
          message.nHet = reader.int32()
          break
        case /* int32 n_homalt */ 7:
          message.nHomalt = reader.int32()
          break
        case /* float freq_homref */ 8:
          message.freqHomref = reader.float()
          break
        case /* float freq_het */ 9:
          message.freqHet = reader.float()
          break
        case /* float freq_homalt */ 10:
          message.freqHomalt = reader.float()
          break
        default:
          const u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            )
          const d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: AlleleCounts,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* int32 ac = 1; */
    if (message.ac !== 0) writer.tag(1, WireType.Varint).int32(message.ac)
    /* int32 an = 2; */
    if (message.an !== 0) writer.tag(2, WireType.Varint).int32(message.an)
    /* float af = 3; */
    if (message.af !== 0) writer.tag(3, WireType.Bit32).float(message.af)
    /* int32 n_bi_genos = 4; */
    if (message.nBiGenos !== 0) writer.tag(4, WireType.Varint).int32(message.nBiGenos)
    /* int32 n_homref = 5; */
    if (message.nHomref !== 0) writer.tag(5, WireType.Varint).int32(message.nHomref)
    /* int32 n_het = 6; */
    if (message.nHet !== 0) writer.tag(6, WireType.Varint).int32(message.nHet)
    /* int32 n_homalt = 7; */
    if (message.nHomalt !== 0) writer.tag(7, WireType.Varint).int32(message.nHomalt)
    /* float freq_homref = 8; */
    if (message.freqHomref !== 0) writer.tag(8, WireType.Bit32).float(message.freqHomref)
    /* float freq_het = 9; */
    if (message.freqHet !== 0) writer.tag(9, WireType.Bit32).float(message.freqHet)
    /* float freq_homalt = 10; */
    if (message.freqHomalt !== 0) writer.tag(10, WireType.Bit32).float(message.freqHomalt)
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.gnomad.gnomad_sv2.AlleleCounts
 */
export const AlleleCounts = new AlleleCounts$Type()
// @generated message type with reflection information, may provide speed optimized methods
class AlleleCountsBySex$Type extends MessageType<AlleleCountsBySex> {
  constructor() {
    super('annonars.gnomad.gnomad_sv2.AlleleCountsBySex', [
      { no: 1, name: 'overall', kind: 'message', T: () => AlleleCounts },
      { no: 2, name: 'xx', kind: 'message', T: () => AlleleCounts },
      { no: 3, name: 'xy', kind: 'message', T: () => AlleleCounts }
    ])
  }
  create(value?: PartialMessage<AlleleCountsBySex>): AlleleCountsBySex {
    const message = globalThis.Object.create(this.messagePrototype!)
    if (value !== undefined) reflectionMergePartial<AlleleCountsBySex>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: AlleleCountsBySex
  ): AlleleCountsBySex {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* annonars.gnomad.gnomad_sv2.AlleleCounts overall */ 1:
          message.overall = AlleleCounts.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.overall
          )
          break
        case /* annonars.gnomad.gnomad_sv2.AlleleCounts xx */ 2:
          message.xx = AlleleCounts.internalBinaryRead(reader, reader.uint32(), options, message.xx)
          break
        case /* annonars.gnomad.gnomad_sv2.AlleleCounts xy */ 3:
          message.xy = AlleleCounts.internalBinaryRead(reader, reader.uint32(), options, message.xy)
          break
        default:
          const u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            )
          const d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: AlleleCountsBySex,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* annonars.gnomad.gnomad_sv2.AlleleCounts overall = 1; */
    if (message.overall)
      AlleleCounts.internalBinaryWrite(
        message.overall,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* annonars.gnomad.gnomad_sv2.AlleleCounts xx = 2; */
    if (message.xx)
      AlleleCounts.internalBinaryWrite(
        message.xx,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* annonars.gnomad.gnomad_sv2.AlleleCounts xy = 3; */
    if (message.xy)
      AlleleCounts.internalBinaryWrite(
        message.xy,
        writer.tag(3, WireType.LengthDelimited).fork(),
        options
      ).join()
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.gnomad.gnomad_sv2.AlleleCountsBySex
 */
export const AlleleCountsBySex = new AlleleCountsBySex$Type()
// @generated message type with reflection information, may provide speed optimized methods
class PopulationAlleleCounts$Type extends MessageType<PopulationAlleleCounts> {
  constructor() {
    super('annonars.gnomad.gnomad_sv2.PopulationAlleleCounts', [
      {
        no: 1,
        name: 'population',
        kind: 'enum',
        T: () => ['annonars.gnomad.gnomad_sv2.Population', Population]
      },
      { no: 2, name: 'counts', kind: 'message', T: () => AlleleCountsBySex }
    ])
  }
  create(value?: PartialMessage<PopulationAlleleCounts>): PopulationAlleleCounts {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.population = 0
    if (value !== undefined) reflectionMergePartial<PopulationAlleleCounts>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: PopulationAlleleCounts
  ): PopulationAlleleCounts {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* annonars.gnomad.gnomad_sv2.Population population */ 1:
          message.population = reader.int32()
          break
        case /* annonars.gnomad.gnomad_sv2.AlleleCountsBySex counts */ 2:
          message.counts = AlleleCountsBySex.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.counts
          )
          break
        default:
          const u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            )
          const d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: PopulationAlleleCounts,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* annonars.gnomad.gnomad_sv2.Population population = 1; */
    if (message.population !== 0) writer.tag(1, WireType.Varint).int32(message.population)
    /* annonars.gnomad.gnomad_sv2.AlleleCountsBySex counts = 2; */
    if (message.counts)
      AlleleCountsBySex.internalBinaryWrite(
        message.counts,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options
      ).join()
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.gnomad.gnomad_sv2.PopulationAlleleCounts
 */
export const PopulationAlleleCounts = new PopulationAlleleCounts$Type()
// @generated message type with reflection information, may provide speed optimized methods
class CohortAlleleCounts$Type extends MessageType<CohortAlleleCounts> {
  constructor() {
    super('annonars.gnomad.gnomad_sv2.CohortAlleleCounts', [
      { no: 1, name: 'cohort', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'by_sex', kind: 'message', T: () => AlleleCountsBySex },
      {
        no: 3,
        name: 'by_population',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => PopulationAlleleCounts
      }
    ])
  }
  create(value?: PartialMessage<CohortAlleleCounts>): CohortAlleleCounts {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.byPopulation = []
    if (value !== undefined) reflectionMergePartial<CohortAlleleCounts>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CohortAlleleCounts
  ): CohortAlleleCounts {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* optional string cohort */ 1:
          message.cohort = reader.string()
          break
        case /* annonars.gnomad.gnomad_sv2.AlleleCountsBySex by_sex */ 2:
          message.bySex = AlleleCountsBySex.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.bySex
          )
          break
        case /* repeated annonars.gnomad.gnomad_sv2.PopulationAlleleCounts by_population */ 3:
          message.byPopulation.push(
            PopulationAlleleCounts.internalBinaryRead(reader, reader.uint32(), options)
          )
          break
        default:
          const u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            )
          const d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: CohortAlleleCounts,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* optional string cohort = 1; */
    if (message.cohort !== undefined) writer.tag(1, WireType.LengthDelimited).string(message.cohort)
    /* annonars.gnomad.gnomad_sv2.AlleleCountsBySex by_sex = 2; */
    if (message.bySex)
      AlleleCountsBySex.internalBinaryWrite(
        message.bySex,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* repeated annonars.gnomad.gnomad_sv2.PopulationAlleleCounts by_population = 3; */
    for (let i = 0; i < message.byPopulation.length; i++)
      PopulationAlleleCounts.internalBinaryWrite(
        message.byPopulation[i],
        writer.tag(3, WireType.LengthDelimited).fork(),
        options
      ).join()
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.gnomad.gnomad_sv2.CohortAlleleCounts
 */
export const CohortAlleleCounts = new CohortAlleleCounts$Type()
// @generated message type with reflection information, may provide speed optimized methods
class Record$Type extends MessageType<Record> {
  constructor() {
    super('annonars.gnomad.gnomad_sv2.Record', [
      { no: 1, name: 'chrom', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'pos', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 3, name: 'end', kind: 'scalar', opt: true, T: 5 /*ScalarType.INT32*/ },
      { no: 4, name: 'chrom2', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 5, name: 'end2', kind: 'scalar', opt: true, T: 5 /*ScalarType.INT32*/ },
      { no: 6, name: 'id', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      {
        no: 7,
        name: 'filters',
        kind: 'enum',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => ['annonars.gnomad.gnomad_sv2.Filter', Filter]
      },
      {
        no: 8,
        name: 'sv_type',
        kind: 'enum',
        T: () => ['annonars.gnomad.gnomad_sv2.SvType', SvType]
      },
      {
        no: 9,
        name: 'cpx_type',
        kind: 'enum',
        opt: true,
        T: () => ['annonars.gnomad.gnomad_sv2.CpxType', CpxType]
      },
      {
        no: 10,
        name: 'allele_counts',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => CohortAlleleCounts
      }
    ])
  }
  create(value?: PartialMessage<Record>): Record {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.chrom = ''
    message.pos = 0
    message.id = ''
    message.filters = []
    message.svType = 0
    message.alleleCounts = []
    if (value !== undefined) reflectionMergePartial<Record>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Record
  ): Record {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string chrom */ 1:
          message.chrom = reader.string()
          break
        case /* int32 pos */ 2:
          message.pos = reader.int32()
          break
        case /* optional int32 end */ 3:
          message.end = reader.int32()
          break
        case /* optional string chrom2 */ 4:
          message.chrom2 = reader.string()
          break
        case /* optional int32 end2 */ 5:
          message.end2 = reader.int32()
          break
        case /* string id */ 6:
          message.id = reader.string()
          break
        case /* repeated annonars.gnomad.gnomad_sv2.Filter filters */ 7:
          if (wireType === WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.filters.push(reader.int32())
          else message.filters.push(reader.int32())
          break
        case /* annonars.gnomad.gnomad_sv2.SvType sv_type */ 8:
          message.svType = reader.int32()
          break
        case /* optional annonars.gnomad.gnomad_sv2.CpxType cpx_type */ 9:
          message.cpxType = reader.int32()
          break
        case /* repeated annonars.gnomad.gnomad_sv2.CohortAlleleCounts allele_counts */ 10:
          message.alleleCounts.push(
            CohortAlleleCounts.internalBinaryRead(reader, reader.uint32(), options)
          )
          break
        default:
          const u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            )
          const d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: Record,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string chrom = 1; */
    if (message.chrom !== '') writer.tag(1, WireType.LengthDelimited).string(message.chrom)
    /* int32 pos = 2; */
    if (message.pos !== 0) writer.tag(2, WireType.Varint).int32(message.pos)
    /* optional int32 end = 3; */
    if (message.end !== undefined) writer.tag(3, WireType.Varint).int32(message.end)
    /* optional string chrom2 = 4; */
    if (message.chrom2 !== undefined) writer.tag(4, WireType.LengthDelimited).string(message.chrom2)
    /* optional int32 end2 = 5; */
    if (message.end2 !== undefined) writer.tag(5, WireType.Varint).int32(message.end2)
    /* string id = 6; */
    if (message.id !== '') writer.tag(6, WireType.LengthDelimited).string(message.id)
    /* repeated annonars.gnomad.gnomad_sv2.Filter filters = 7; */
    if (message.filters.length) {
      writer.tag(7, WireType.LengthDelimited).fork()
      for (let i = 0; i < message.filters.length; i++) writer.int32(message.filters[i])
      writer.join()
    }
    /* annonars.gnomad.gnomad_sv2.SvType sv_type = 8; */
    if (message.svType !== 0) writer.tag(8, WireType.Varint).int32(message.svType)
    /* optional annonars.gnomad.gnomad_sv2.CpxType cpx_type = 9; */
    if (message.cpxType !== undefined) writer.tag(9, WireType.Varint).int32(message.cpxType)
    /* repeated annonars.gnomad.gnomad_sv2.CohortAlleleCounts allele_counts = 10; */
    for (let i = 0; i < message.alleleCounts.length; i++)
      CohortAlleleCounts.internalBinaryWrite(
        message.alleleCounts[i],
        writer.tag(10, WireType.LengthDelimited).fork(),
        options
      ).join()
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.gnomad.gnomad_sv2.Record
 */
export const Record = new Record$Type()