// @generated by protobuf-ts 2.9.3 with parameter keep_enum_prefix
// @generated from protobuf file "annonars/gnomad/vep_gnomad2.proto" (package "annonars.gnomad.vep_gnomad2", syntax proto3)
// tslint:disable
//
// Protocol buffer definitions for gnomAD v2 VEP records.
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

import { Domain } from './vep_common'
import { Prediction } from './vep_common'

/**
 * Protocol buffer for the gnomAD-mtDNA VEP predictions.
 *
 * @generated from protobuf message annonars.gnomad.vep_gnomad2.Vep
 */
export interface Vep {
  /**
   * Allele of record.
   *
   * @generated from protobuf field: string allele = 1;
   */
  allele: string
  /**
   * Consequence, e.g., `"missense_variant"`.
   *
   * @generated from protobuf field: string consequence = 2;
   */
  consequence: string
  /**
   * Impact, e.g., `"MODERATE"`.
   *
   * @generated from protobuf field: string impact = 3;
   */
  impact: string
  /**
   * Gene symbol, e.g., `"PCSK9"`.
   *
   * @generated from protobuf field: string symbol = 4;
   */
  symbol: string
  /**
   * Gene ID, `e.g., "ENSG00000169174"`.
   *
   * @generated from protobuf field: string gene = 5;
   */
  gene: string
  /**
   * Feature type, e.g., `"Transcript"`.
   *
   * @generated from protobuf field: string feature_type = 6;
   */
  featureType: string
  /**
   * Feature ID, e.g., `"ENST00000302118"`.
   *
   * @generated from protobuf field: string feature = 7;
   */
  feature: string
  /**
   * Feature biotype, e.g., `"protein_coding"`.
   *
   * @generated from protobuf field: string feature_biotype = 8;
   */
  featureBiotype: string
  /**
   * Ranked exon number, e.g., `"1/4"`.
   *
   * @generated from protobuf field: optional string exon = 9;
   */
  exon?: string
  /**
   * Ranked intron number, e.g., `"1/4"`.
   *
   * @generated from protobuf field: optional string intron = 10;
   */
  intron?: string
  /**
   * cDNA position, e.g., `"ENST00000302118.5:c.89C>G"`.
   *
   * @generated from protobuf field: optional string hgvsc = 11;
   */
  hgvsc?: string
  /**
   * Protein position, e.g., `"ENSP00000302118.5:p.Thr30Arg"`.
   *
   * @generated from protobuf field: optional string hgvsp = 12;
   */
  hgvsp?: string
  /**
   * cDNA position, e.g., `"89/1863"`.
   *
   * @generated from protobuf field: optional string cdna_position = 13;
   */
  cdnaPosition?: string
  /**
   * CDS position, e.g., `"89/1863"`.
   *
   * @generated from protobuf field: optional string cds_position = 14;
   */
  cdsPosition?: string
  /**
   * Protein position, e.g., `"30/620"`.
   *
   * @generated from protobuf field: optional string protein_position = 15;
   */
  proteinPosition?: string
  /**
   * Amino acids, e.g., `"T/R"`.
   *
   * @generated from protobuf field: optional string amino_acids = 16;
   */
  aminoAcids?: string
  /**
   * Codons, e.g., `"gCg/gGg"`.
   *
   * @generated from protobuf field: optional string codons = 17;
   */
  codons?: string
  /**
   * Existing variation info.
   *
   * @generated from protobuf field: optional string existing_variation = 18;
   */
  existingVariation?: string
  /**
   * dbSNP ID, e.g., `"rs28942080"`.
   *
   * @generated from protobuf field: optional string dbsnp_id = 19;
   */
  dbsnpId?: string
  /**
   * Distance output of VEP.
   *
   * @generated from protobuf field: optional string distance = 20;
   */
  distance?: string
  /**
   * Strand, e.g., `"1"`.
   *
   * @generated from protobuf field: optional string strand = 21;
   */
  strand?: string
  /**
   * Flags, e.g., `"cds_end_NF"`.
   *
   * @generated from protobuf field: optional string flags = 22;
   */
  flags?: string
  /**
   * Variant class, e.g., `"SNV"`.
   *
   * @generated from protobuf field: optional string variant_class = 23;
   */
  variantClass?: string
  /**
   * Minimised output of VEP.
   *
   * @generated from protobuf field: optional string minimised = 24;
   */
  minimised?: string
  /**
   * Symbol source, e.g., `"HGNC"`.
   *
   * @generated from protobuf field: optional string symbol_source = 25;
   */
  symbolSource?: string
  /**
   * HGNC ID, e.g., `"HGNC:8706"`.
   *
   * @generated from protobuf field: optional string hgnc_id = 26;
   */
  hgncId?: string
  /**
   * Whether this is the canonical transcript.
   *
   * @generated from protobuf field: bool canonical = 27;
   */
  canonical: boolean
  /**
   * Transcript support level, e.g., `"1"`.
   *
   * @generated from protobuf field: optional int32 tsl = 28;
   */
  tsl?: number
  /**
   * APPRIS annotation, e.g. `"P1"`.
   *
   * @generated from protobuf field: optional string appris = 29;
   */
  appris?: string
  /**
   * CCDS ID, e.g., `"CCDS30547.1"`.
   *
   * @generated from protobuf field: optional string ccds = 30;
   */
  ccds?: string
  /**
   * Ensembl protein ID, e.g., `"ENSP00000302118"`.
   *
   * @generated from protobuf field: optional string ensp = 31;
   */
  ensp?: string
  /**
   * SwissProt ID, e.g., `"P04114"`.
   *
   * @generated from protobuf field: optional string swissprot = 32;
   */
  swissprot?: string
  /**
   * TREMBL ID, e.g., `"Q5T4W7"`.
   *
   * @generated from protobuf field: optional string trembl = 33;
   */
  trembl?: string
  /**
   * UniParc ID, e.g., `"UPI000002D4B2"`.
   *
   * @generated from protobuf field: optional string uniparc = 34;
   */
  uniparc?: string
  /**
   * Gene phenotype from VEP.
   *
   * @generated from protobuf field: optional string gene_pheno = 35;
   */
  genePheno?: string
  /**
   * SIFT prediction, e.g., `"tolerated(0.06)"`.
   *
   * @generated from protobuf field: optional annonars.gnomad.vep_common.Prediction sift = 36;
   */
  sift?: Prediction
  /**
   * PolyPhen prediction, e.g., `"benign(0.001)"`.
   *
   * @generated from protobuf field: optional annonars.gnomad.vep_common.Prediction polyphen = 37;
   */
  polyphen?: Prediction
  /**
   * Protein domains, e.g., `[["2p4e", "ENSP_mappings"], ["2qtw", "ENSP_mappings"]]`.
   *
   * @generated from protobuf field: repeated annonars.gnomad.vep_common.Domain domains = 38;
   */
  domains: Domain[]
  /**
   * HGVS offset.
   *
   * @generated from protobuf field: optional string hgvs_offset = 39;
   */
  hgvsOffset?: string
  /**
   * Overall minor allele frequency.
   *
   * @generated from protobuf field: optional float gmaf = 40;
   */
  gmaf?: number
  /**
   * Minor allele frequency in AFR population.
   *
   * @generated from protobuf field: optional float afr_maf = 41;
   */
  afrMaf?: number
  /**
   * Minor allele frequency in AMR population.
   *
   * @generated from protobuf field: optional float amr_maf = 42;
   */
  amrMaf?: number
  /**
   * Minor allele frequency in EAS population.
   *
   * @generated from protobuf field: optional float eas_maf = 43;
   */
  easMaf?: number
  /**
   * Minor allele frequency in EUR population.
   *
   * @generated from protobuf field: optional float eur_maf = 44;
   */
  eurMaf?: number
  /**
   * Minor allele frequency in SAS population.
   *
   * @generated from protobuf field: optional float sas_maf = 45;
   */
  sasMaf?: number
  /**
   * Minor allele frequency in AA population.
   *
   * @generated from protobuf field: optional float aa_maf = 46;
   */
  aaMaf?: number
  /**
   * Minor allele frequency in EA population.
   *
   * @generated from protobuf field: optional float ea_maf = 47;
   */
  eaMaf?: number
  /**
   * Minor allele frequency in ExAC.
   *
   * @generated from protobuf field: optional float exac_maf = 48;
   */
  exacMaf?: number
  /**
   * Minor allele frequency EXAC ADJ population.
   *
   * @generated from protobuf field: optional float exac_adj_maf = 49;
   */
  exacAdjMaf?: number
  /**
   * Minor allele frequency in ExAC AFR population.
   *
   * @generated from protobuf field: optional float exac_afr_maf = 50;
   */
  exacAfrMaf?: number
  /**
   * Minor allele frequency in ExAC AMR population.
   *
   * @generated from protobuf field: optional float exac_amr_maf = 51;
   */
  exacAmrMaf?: number
  /**
   * Minor allele frequency in ExAC EAS population.
   *
   * @generated from protobuf field: optional float exac_eas_maf = 52;
   */
  exacEasMaf?: number
  /**
   * Minor allele frequency in ExAC FIN population.
   *
   * @generated from protobuf field: optional float exac_fin_maf = 53;
   */
  exacFinMaf?: number
  /**
   * Minor allele frequency in ExAC NFE population.
   *
   * @generated from protobuf field: optional float exac_nfe_maf = 54;
   */
  exacNfeMaf?: number
  /**
   * Minor allele frequency in ExAC OTH population.
   *
   * @generated from protobuf field: optional float exac_oth_maf = 55;
   */
  exacOthMaf?: number
  /**
   * Minor allele frequency in ExAC SAS population.
   *
   * @generated from protobuf field: optional float exac_sas_maf = 56;
   */
  exacSasMaf?: number
  /**
   * Clinical significance.
   *
   * @generated from protobuf field: optional string clin_sig = 57;
   */
  clinSig?: string
  /**
   * Whether the variant is somatic.
   *
   * @generated from protobuf field: optional string somatic = 58;
   */
  somatic?: string
  /**
   * Phenotype.
   *
   * @generated from protobuf field: optional string pheno = 59;
   */
  pheno?: string
  /**
   * Pubmed ID.
   *
   * @generated from protobuf field: optional string pubmed = 60;
   */
  pubmed?: string
  /**
   * Motif name.
   *
   * @generated from protobuf field: optional string motif_name = 61;
   */
  motifName?: string
  /**
   * Motif pos.
   *
   * @generated from protobuf field: optional string motif_pos = 62;
   */
  motifPos?: string
  /**
   * "high inf pos" from VEP.
   *
   * @generated from protobuf field: optional string high_inf_pos = 63;
   */
  highInfPos?: string
  /**
   * Motif score change.
   *
   * @generated from protobuf field: optional string motif_score_change = 64;
   */
  motifScoreChange?: string
  /**
   * Loss of function prediction.
   *
   * @generated from protobuf field: optional string lof = 65;
   */
  lof?: string
  /**
   * Loss of function filter.
   *
   * @generated from protobuf field: optional string lof_filter = 66;
   */
  lofFilter?: string
  /**
   * Loss of function flags.
   *
   * @generated from protobuf field: optional string lof_flags = 67;
   */
  lofFlags?: string
  /**
   * Loss of function info.
   *
   * @generated from protobuf field: optional string lof_info = 68;
   */
  lofInfo?: string
}
// @generated message type with reflection information, may provide speed optimized methods
class Vep$Type extends MessageType<Vep> {
  constructor() {
    super('annonars.gnomad.vep_gnomad2.Vep', [
      { no: 1, name: 'allele', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'consequence', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: 'impact', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: 'symbol', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 5, name: 'gene', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 6, name: 'feature_type', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 7, name: 'feature', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 8, name: 'feature_biotype', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 9, name: 'exon', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 10, name: 'intron', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 11, name: 'hgvsc', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 12, name: 'hgvsp', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 13, name: 'cdna_position', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 14, name: 'cds_position', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 15, name: 'protein_position', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 16, name: 'amino_acids', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 17, name: 'codons', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 18, name: 'existing_variation', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 19, name: 'dbsnp_id', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 20, name: 'distance', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 21, name: 'strand', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 22, name: 'flags', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 23, name: 'variant_class', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 24, name: 'minimised', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 25, name: 'symbol_source', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 26, name: 'hgnc_id', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 27, name: 'canonical', kind: 'scalar', T: 8 /*ScalarType.BOOL*/ },
      { no: 28, name: 'tsl', kind: 'scalar', opt: true, T: 5 /*ScalarType.INT32*/ },
      { no: 29, name: 'appris', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 30, name: 'ccds', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 31, name: 'ensp', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 32, name: 'swissprot', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 33, name: 'trembl', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 34, name: 'uniparc', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 35, name: 'gene_pheno', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 36, name: 'sift', kind: 'message', T: () => Prediction },
      { no: 37, name: 'polyphen', kind: 'message', T: () => Prediction },
      {
        no: 38,
        name: 'domains',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Domain
      },
      { no: 39, name: 'hgvs_offset', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 40, name: 'gmaf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 41, name: 'afr_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 42, name: 'amr_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 43, name: 'eas_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 44, name: 'eur_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 45, name: 'sas_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 46, name: 'aa_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 47, name: 'ea_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 48, name: 'exac_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 49, name: 'exac_adj_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 50, name: 'exac_afr_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 51, name: 'exac_amr_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 52, name: 'exac_eas_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 53, name: 'exac_fin_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 54, name: 'exac_nfe_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 55, name: 'exac_oth_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 56, name: 'exac_sas_maf', kind: 'scalar', opt: true, T: 2 /*ScalarType.FLOAT*/ },
      { no: 57, name: 'clin_sig', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 58, name: 'somatic', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 59, name: 'pheno', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 60, name: 'pubmed', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 61, name: 'motif_name', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 62, name: 'motif_pos', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 63, name: 'high_inf_pos', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 64, name: 'motif_score_change', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 65, name: 'lof', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 66, name: 'lof_filter', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 67, name: 'lof_flags', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 68, name: 'lof_info', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ }
    ])
  }
  create(value?: PartialMessage<Vep>): Vep {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.allele = ''
    message.consequence = ''
    message.impact = ''
    message.symbol = ''
    message.gene = ''
    message.featureType = ''
    message.feature = ''
    message.featureBiotype = ''
    message.canonical = false
    message.domains = []
    if (value !== undefined) reflectionMergePartial<Vep>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Vep
  ): Vep {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string allele */ 1:
          message.allele = reader.string()
          break
        case /* string consequence */ 2:
          message.consequence = reader.string()
          break
        case /* string impact */ 3:
          message.impact = reader.string()
          break
        case /* string symbol */ 4:
          message.symbol = reader.string()
          break
        case /* string gene */ 5:
          message.gene = reader.string()
          break
        case /* string feature_type */ 6:
          message.featureType = reader.string()
          break
        case /* string feature */ 7:
          message.feature = reader.string()
          break
        case /* string feature_biotype */ 8:
          message.featureBiotype = reader.string()
          break
        case /* optional string exon */ 9:
          message.exon = reader.string()
          break
        case /* optional string intron */ 10:
          message.intron = reader.string()
          break
        case /* optional string hgvsc */ 11:
          message.hgvsc = reader.string()
          break
        case /* optional string hgvsp */ 12:
          message.hgvsp = reader.string()
          break
        case /* optional string cdna_position */ 13:
          message.cdnaPosition = reader.string()
          break
        case /* optional string cds_position */ 14:
          message.cdsPosition = reader.string()
          break
        case /* optional string protein_position */ 15:
          message.proteinPosition = reader.string()
          break
        case /* optional string amino_acids */ 16:
          message.aminoAcids = reader.string()
          break
        case /* optional string codons */ 17:
          message.codons = reader.string()
          break
        case /* optional string existing_variation */ 18:
          message.existingVariation = reader.string()
          break
        case /* optional string dbsnp_id */ 19:
          message.dbsnpId = reader.string()
          break
        case /* optional string distance */ 20:
          message.distance = reader.string()
          break
        case /* optional string strand */ 21:
          message.strand = reader.string()
          break
        case /* optional string flags */ 22:
          message.flags = reader.string()
          break
        case /* optional string variant_class */ 23:
          message.variantClass = reader.string()
          break
        case /* optional string minimised */ 24:
          message.minimised = reader.string()
          break
        case /* optional string symbol_source */ 25:
          message.symbolSource = reader.string()
          break
        case /* optional string hgnc_id */ 26:
          message.hgncId = reader.string()
          break
        case /* bool canonical */ 27:
          message.canonical = reader.bool()
          break
        case /* optional int32 tsl */ 28:
          message.tsl = reader.int32()
          break
        case /* optional string appris */ 29:
          message.appris = reader.string()
          break
        case /* optional string ccds */ 30:
          message.ccds = reader.string()
          break
        case /* optional string ensp */ 31:
          message.ensp = reader.string()
          break
        case /* optional string swissprot */ 32:
          message.swissprot = reader.string()
          break
        case /* optional string trembl */ 33:
          message.trembl = reader.string()
          break
        case /* optional string uniparc */ 34:
          message.uniparc = reader.string()
          break
        case /* optional string gene_pheno */ 35:
          message.genePheno = reader.string()
          break
        case /* optional annonars.gnomad.vep_common.Prediction sift */ 36:
          message.sift = Prediction.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.sift
          )
          break
        case /* optional annonars.gnomad.vep_common.Prediction polyphen */ 37:
          message.polyphen = Prediction.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.polyphen
          )
          break
        case /* repeated annonars.gnomad.vep_common.Domain domains */ 38:
          message.domains.push(Domain.internalBinaryRead(reader, reader.uint32(), options))
          break
        case /* optional string hgvs_offset */ 39:
          message.hgvsOffset = reader.string()
          break
        case /* optional float gmaf */ 40:
          message.gmaf = reader.float()
          break
        case /* optional float afr_maf */ 41:
          message.afrMaf = reader.float()
          break
        case /* optional float amr_maf */ 42:
          message.amrMaf = reader.float()
          break
        case /* optional float eas_maf */ 43:
          message.easMaf = reader.float()
          break
        case /* optional float eur_maf */ 44:
          message.eurMaf = reader.float()
          break
        case /* optional float sas_maf */ 45:
          message.sasMaf = reader.float()
          break
        case /* optional float aa_maf */ 46:
          message.aaMaf = reader.float()
          break
        case /* optional float ea_maf */ 47:
          message.eaMaf = reader.float()
          break
        case /* optional float exac_maf */ 48:
          message.exacMaf = reader.float()
          break
        case /* optional float exac_adj_maf */ 49:
          message.exacAdjMaf = reader.float()
          break
        case /* optional float exac_afr_maf */ 50:
          message.exacAfrMaf = reader.float()
          break
        case /* optional float exac_amr_maf */ 51:
          message.exacAmrMaf = reader.float()
          break
        case /* optional float exac_eas_maf */ 52:
          message.exacEasMaf = reader.float()
          break
        case /* optional float exac_fin_maf */ 53:
          message.exacFinMaf = reader.float()
          break
        case /* optional float exac_nfe_maf */ 54:
          message.exacNfeMaf = reader.float()
          break
        case /* optional float exac_oth_maf */ 55:
          message.exacOthMaf = reader.float()
          break
        case /* optional float exac_sas_maf */ 56:
          message.exacSasMaf = reader.float()
          break
        case /* optional string clin_sig */ 57:
          message.clinSig = reader.string()
          break
        case /* optional string somatic */ 58:
          message.somatic = reader.string()
          break
        case /* optional string pheno */ 59:
          message.pheno = reader.string()
          break
        case /* optional string pubmed */ 60:
          message.pubmed = reader.string()
          break
        case /* optional string motif_name */ 61:
          message.motifName = reader.string()
          break
        case /* optional string motif_pos */ 62:
          message.motifPos = reader.string()
          break
        case /* optional string high_inf_pos */ 63:
          message.highInfPos = reader.string()
          break
        case /* optional string motif_score_change */ 64:
          message.motifScoreChange = reader.string()
          break
        case /* optional string lof */ 65:
          message.lof = reader.string()
          break
        case /* optional string lof_filter */ 66:
          message.lofFilter = reader.string()
          break
        case /* optional string lof_flags */ 67:
          message.lofFlags = reader.string()
          break
        case /* optional string lof_info */ 68:
          message.lofInfo = reader.string()
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
    message: Vep,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string allele = 1; */
    if (message.allele !== '') writer.tag(1, WireType.LengthDelimited).string(message.allele)
    /* string consequence = 2; */
    if (message.consequence !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.consequence)
    /* string impact = 3; */
    if (message.impact !== '') writer.tag(3, WireType.LengthDelimited).string(message.impact)
    /* string symbol = 4; */
    if (message.symbol !== '') writer.tag(4, WireType.LengthDelimited).string(message.symbol)
    /* string gene = 5; */
    if (message.gene !== '') writer.tag(5, WireType.LengthDelimited).string(message.gene)
    /* string feature_type = 6; */
    if (message.featureType !== '')
      writer.tag(6, WireType.LengthDelimited).string(message.featureType)
    /* string feature = 7; */
    if (message.feature !== '') writer.tag(7, WireType.LengthDelimited).string(message.feature)
    /* string feature_biotype = 8; */
    if (message.featureBiotype !== '')
      writer.tag(8, WireType.LengthDelimited).string(message.featureBiotype)
    /* optional string exon = 9; */
    if (message.exon !== undefined) writer.tag(9, WireType.LengthDelimited).string(message.exon)
    /* optional string intron = 10; */
    if (message.intron !== undefined)
      writer.tag(10, WireType.LengthDelimited).string(message.intron)
    /* optional string hgvsc = 11; */
    if (message.hgvsc !== undefined) writer.tag(11, WireType.LengthDelimited).string(message.hgvsc)
    /* optional string hgvsp = 12; */
    if (message.hgvsp !== undefined) writer.tag(12, WireType.LengthDelimited).string(message.hgvsp)
    /* optional string cdna_position = 13; */
    if (message.cdnaPosition !== undefined)
      writer.tag(13, WireType.LengthDelimited).string(message.cdnaPosition)
    /* optional string cds_position = 14; */
    if (message.cdsPosition !== undefined)
      writer.tag(14, WireType.LengthDelimited).string(message.cdsPosition)
    /* optional string protein_position = 15; */
    if (message.proteinPosition !== undefined)
      writer.tag(15, WireType.LengthDelimited).string(message.proteinPosition)
    /* optional string amino_acids = 16; */
    if (message.aminoAcids !== undefined)
      writer.tag(16, WireType.LengthDelimited).string(message.aminoAcids)
    /* optional string codons = 17; */
    if (message.codons !== undefined)
      writer.tag(17, WireType.LengthDelimited).string(message.codons)
    /* optional string existing_variation = 18; */
    if (message.existingVariation !== undefined)
      writer.tag(18, WireType.LengthDelimited).string(message.existingVariation)
    /* optional string dbsnp_id = 19; */
    if (message.dbsnpId !== undefined)
      writer.tag(19, WireType.LengthDelimited).string(message.dbsnpId)
    /* optional string distance = 20; */
    if (message.distance !== undefined)
      writer.tag(20, WireType.LengthDelimited).string(message.distance)
    /* optional string strand = 21; */
    if (message.strand !== undefined)
      writer.tag(21, WireType.LengthDelimited).string(message.strand)
    /* optional string flags = 22; */
    if (message.flags !== undefined) writer.tag(22, WireType.LengthDelimited).string(message.flags)
    /* optional string variant_class = 23; */
    if (message.variantClass !== undefined)
      writer.tag(23, WireType.LengthDelimited).string(message.variantClass)
    /* optional string minimised = 24; */
    if (message.minimised !== undefined)
      writer.tag(24, WireType.LengthDelimited).string(message.minimised)
    /* optional string symbol_source = 25; */
    if (message.symbolSource !== undefined)
      writer.tag(25, WireType.LengthDelimited).string(message.symbolSource)
    /* optional string hgnc_id = 26; */
    if (message.hgncId !== undefined)
      writer.tag(26, WireType.LengthDelimited).string(message.hgncId)
    /* bool canonical = 27; */
    if (message.canonical !== false) writer.tag(27, WireType.Varint).bool(message.canonical)
    /* optional int32 tsl = 28; */
    if (message.tsl !== undefined) writer.tag(28, WireType.Varint).int32(message.tsl)
    /* optional string appris = 29; */
    if (message.appris !== undefined)
      writer.tag(29, WireType.LengthDelimited).string(message.appris)
    /* optional string ccds = 30; */
    if (message.ccds !== undefined) writer.tag(30, WireType.LengthDelimited).string(message.ccds)
    /* optional string ensp = 31; */
    if (message.ensp !== undefined) writer.tag(31, WireType.LengthDelimited).string(message.ensp)
    /* optional string swissprot = 32; */
    if (message.swissprot !== undefined)
      writer.tag(32, WireType.LengthDelimited).string(message.swissprot)
    /* optional string trembl = 33; */
    if (message.trembl !== undefined)
      writer.tag(33, WireType.LengthDelimited).string(message.trembl)
    /* optional string uniparc = 34; */
    if (message.uniparc !== undefined)
      writer.tag(34, WireType.LengthDelimited).string(message.uniparc)
    /* optional string gene_pheno = 35; */
    if (message.genePheno !== undefined)
      writer.tag(35, WireType.LengthDelimited).string(message.genePheno)
    /* optional annonars.gnomad.vep_common.Prediction sift = 36; */
    if (message.sift)
      Prediction.internalBinaryWrite(
        message.sift,
        writer.tag(36, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* optional annonars.gnomad.vep_common.Prediction polyphen = 37; */
    if (message.polyphen)
      Prediction.internalBinaryWrite(
        message.polyphen,
        writer.tag(37, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* repeated annonars.gnomad.vep_common.Domain domains = 38; */
    for (let i = 0; i < message.domains.length; i++)
      Domain.internalBinaryWrite(
        message.domains[i],
        writer.tag(38, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* optional string hgvs_offset = 39; */
    if (message.hgvsOffset !== undefined)
      writer.tag(39, WireType.LengthDelimited).string(message.hgvsOffset)
    /* optional float gmaf = 40; */
    if (message.gmaf !== undefined) writer.tag(40, WireType.Bit32).float(message.gmaf)
    /* optional float afr_maf = 41; */
    if (message.afrMaf !== undefined) writer.tag(41, WireType.Bit32).float(message.afrMaf)
    /* optional float amr_maf = 42; */
    if (message.amrMaf !== undefined) writer.tag(42, WireType.Bit32).float(message.amrMaf)
    /* optional float eas_maf = 43; */
    if (message.easMaf !== undefined) writer.tag(43, WireType.Bit32).float(message.easMaf)
    /* optional float eur_maf = 44; */
    if (message.eurMaf !== undefined) writer.tag(44, WireType.Bit32).float(message.eurMaf)
    /* optional float sas_maf = 45; */
    if (message.sasMaf !== undefined) writer.tag(45, WireType.Bit32).float(message.sasMaf)
    /* optional float aa_maf = 46; */
    if (message.aaMaf !== undefined) writer.tag(46, WireType.Bit32).float(message.aaMaf)
    /* optional float ea_maf = 47; */
    if (message.eaMaf !== undefined) writer.tag(47, WireType.Bit32).float(message.eaMaf)
    /* optional float exac_maf = 48; */
    if (message.exacMaf !== undefined) writer.tag(48, WireType.Bit32).float(message.exacMaf)
    /* optional float exac_adj_maf = 49; */
    if (message.exacAdjMaf !== undefined) writer.tag(49, WireType.Bit32).float(message.exacAdjMaf)
    /* optional float exac_afr_maf = 50; */
    if (message.exacAfrMaf !== undefined) writer.tag(50, WireType.Bit32).float(message.exacAfrMaf)
    /* optional float exac_amr_maf = 51; */
    if (message.exacAmrMaf !== undefined) writer.tag(51, WireType.Bit32).float(message.exacAmrMaf)
    /* optional float exac_eas_maf = 52; */
    if (message.exacEasMaf !== undefined) writer.tag(52, WireType.Bit32).float(message.exacEasMaf)
    /* optional float exac_fin_maf = 53; */
    if (message.exacFinMaf !== undefined) writer.tag(53, WireType.Bit32).float(message.exacFinMaf)
    /* optional float exac_nfe_maf = 54; */
    if (message.exacNfeMaf !== undefined) writer.tag(54, WireType.Bit32).float(message.exacNfeMaf)
    /* optional float exac_oth_maf = 55; */
    if (message.exacOthMaf !== undefined) writer.tag(55, WireType.Bit32).float(message.exacOthMaf)
    /* optional float exac_sas_maf = 56; */
    if (message.exacSasMaf !== undefined) writer.tag(56, WireType.Bit32).float(message.exacSasMaf)
    /* optional string clin_sig = 57; */
    if (message.clinSig !== undefined)
      writer.tag(57, WireType.LengthDelimited).string(message.clinSig)
    /* optional string somatic = 58; */
    if (message.somatic !== undefined)
      writer.tag(58, WireType.LengthDelimited).string(message.somatic)
    /* optional string pheno = 59; */
    if (message.pheno !== undefined) writer.tag(59, WireType.LengthDelimited).string(message.pheno)
    /* optional string pubmed = 60; */
    if (message.pubmed !== undefined)
      writer.tag(60, WireType.LengthDelimited).string(message.pubmed)
    /* optional string motif_name = 61; */
    if (message.motifName !== undefined)
      writer.tag(61, WireType.LengthDelimited).string(message.motifName)
    /* optional string motif_pos = 62; */
    if (message.motifPos !== undefined)
      writer.tag(62, WireType.LengthDelimited).string(message.motifPos)
    /* optional string high_inf_pos = 63; */
    if (message.highInfPos !== undefined)
      writer.tag(63, WireType.LengthDelimited).string(message.highInfPos)
    /* optional string motif_score_change = 64; */
    if (message.motifScoreChange !== undefined)
      writer.tag(64, WireType.LengthDelimited).string(message.motifScoreChange)
    /* optional string lof = 65; */
    if (message.lof !== undefined) writer.tag(65, WireType.LengthDelimited).string(message.lof)
    /* optional string lof_filter = 66; */
    if (message.lofFilter !== undefined)
      writer.tag(66, WireType.LengthDelimited).string(message.lofFilter)
    /* optional string lof_flags = 67; */
    if (message.lofFlags !== undefined)
      writer.tag(67, WireType.LengthDelimited).string(message.lofFlags)
    /* optional string lof_info = 68; */
    if (message.lofInfo !== undefined)
      writer.tag(68, WireType.LengthDelimited).string(message.lofInfo)
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.gnomad.vep_gnomad2.Vep
 */
export const Vep = new Vep$Type()