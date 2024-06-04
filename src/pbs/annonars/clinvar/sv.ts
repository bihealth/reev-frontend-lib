// @generated by protobuf-ts 2.9.3 with parameter keep_enum_prefix,long_type_string
// @generated from protobuf file "annonars/clinvar/sv.proto" (package "annonars.clinvar.sv", syntax proto3)
// tslint:disable
//
// Detailed ClinVar Structural Variants.
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

import { ExtractedVcvRecord } from '../clinvar_data/extracted_vars'

/**
 * Record with overlap information.
 *
 * @generated from protobuf message annonars.clinvar.sv.ResponseRecord
 */
export interface ResponseRecord {
  /**
   * The record.
   *
   * @generated from protobuf field: annonars.clinvar_data.extracted_vars.ExtractedVcvRecord record = 1;
   */
  record?: ExtractedVcvRecord
  /**
   * The reciprocal overlap with the query.
   *
   * @generated from protobuf field: double overlap = 2;
   */
  overlap: number
}
/**
 * Information regarding the pagination.
 *
 * @generated from protobuf message annonars.clinvar.sv.PageInfo
 */
export interface PageInfo {
  /**
   * The total number of records.
   *
   * @generated from protobuf field: uint32 total = 1;
   */
  total: number
  /**
   * The number of records per page.
   *
   * @generated from protobuf field: uint32 per_page = 2;
   */
  perPage: number
  /**
   * The current page number.
   *
   * @generated from protobuf field: uint32 current_page = 3;
   */
  currentPage: number
  /**
   * The total number of pages.
   *
   * @generated from protobuf field: uint32 total_pages = 4;
   */
  totalPages: number
}
/**
 * One page of results as returned by the server.
 *
 * @generated from protobuf message annonars.clinvar.sv.ResponsePage
 */
export interface ResponsePage {
  /**
   * The records in this page.
   *
   * @generated from protobuf field: repeated annonars.clinvar.sv.ResponseRecord records = 1;
   */
  records: ResponseRecord[]
  /**
   * Pagination information.
   *
   * @generated from protobuf field: annonars.clinvar.sv.PageInfo page_info = 2;
   */
  pageInfo?: PageInfo
}
// @generated message type with reflection information, may provide speed optimized methods
class ResponseRecord$Type extends MessageType<ResponseRecord> {
  constructor() {
    super('annonars.clinvar.sv.ResponseRecord', [
      { no: 1, name: 'record', kind: 'message', T: () => ExtractedVcvRecord },
      { no: 2, name: 'overlap', kind: 'scalar', T: 1 /*ScalarType.DOUBLE*/ }
    ])
  }
  create(value?: PartialMessage<ResponseRecord>): ResponseRecord {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.overlap = 0
    if (value !== undefined) reflectionMergePartial<ResponseRecord>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ResponseRecord
  ): ResponseRecord {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* annonars.clinvar_data.extracted_vars.ExtractedVcvRecord record */ 1:
          message.record = ExtractedVcvRecord.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.record
          )
          break
        case /* double overlap */ 2:
          message.overlap = reader.double()
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
    message: ResponseRecord,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* annonars.clinvar_data.extracted_vars.ExtractedVcvRecord record = 1; */
    if (message.record)
      ExtractedVcvRecord.internalBinaryWrite(
        message.record,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* double overlap = 2; */
    if (message.overlap !== 0) writer.tag(2, WireType.Bit64).double(message.overlap)
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.clinvar.sv.ResponseRecord
 */
export const ResponseRecord = new ResponseRecord$Type()
// @generated message type with reflection information, may provide speed optimized methods
class PageInfo$Type extends MessageType<PageInfo> {
  constructor() {
    super('annonars.clinvar.sv.PageInfo', [
      { no: 1, name: 'total', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
      { no: 2, name: 'per_page', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
      { no: 3, name: 'current_page', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
      { no: 4, name: 'total_pages', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ }
    ])
  }
  create(value?: PartialMessage<PageInfo>): PageInfo {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.total = 0
    message.perPage = 0
    message.currentPage = 0
    message.totalPages = 0
    if (value !== undefined) reflectionMergePartial<PageInfo>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: PageInfo
  ): PageInfo {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* uint32 total */ 1:
          message.total = reader.uint32()
          break
        case /* uint32 per_page */ 2:
          message.perPage = reader.uint32()
          break
        case /* uint32 current_page */ 3:
          message.currentPage = reader.uint32()
          break
        case /* uint32 total_pages */ 4:
          message.totalPages = reader.uint32()
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
    message: PageInfo,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* uint32 total = 1; */
    if (message.total !== 0) writer.tag(1, WireType.Varint).uint32(message.total)
    /* uint32 per_page = 2; */
    if (message.perPage !== 0) writer.tag(2, WireType.Varint).uint32(message.perPage)
    /* uint32 current_page = 3; */
    if (message.currentPage !== 0) writer.tag(3, WireType.Varint).uint32(message.currentPage)
    /* uint32 total_pages = 4; */
    if (message.totalPages !== 0) writer.tag(4, WireType.Varint).uint32(message.totalPages)
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.clinvar.sv.PageInfo
 */
export const PageInfo = new PageInfo$Type()
// @generated message type with reflection information, may provide speed optimized methods
class ResponsePage$Type extends MessageType<ResponsePage> {
  constructor() {
    super('annonars.clinvar.sv.ResponsePage', [
      {
        no: 1,
        name: 'records',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => ResponseRecord
      },
      { no: 2, name: 'page_info', kind: 'message', T: () => PageInfo }
    ])
  }
  create(value?: PartialMessage<ResponsePage>): ResponsePage {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.records = []
    if (value !== undefined) reflectionMergePartial<ResponsePage>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ResponsePage
  ): ResponsePage {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated annonars.clinvar.sv.ResponseRecord records */ 1:
          message.records.push(ResponseRecord.internalBinaryRead(reader, reader.uint32(), options))
          break
        case /* annonars.clinvar.sv.PageInfo page_info */ 2:
          message.pageInfo = PageInfo.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.pageInfo
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
    message: ResponsePage,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* repeated annonars.clinvar.sv.ResponseRecord records = 1; */
    for (let i = 0; i < message.records.length; i++)
      ResponseRecord.internalBinaryWrite(
        message.records[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* annonars.clinvar.sv.PageInfo page_info = 2; */
    if (message.pageInfo)
      PageInfo.internalBinaryWrite(
        message.pageInfo,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options
      ).join()
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.clinvar.sv.ResponsePage
 */
export const ResponsePage = new ResponsePage$Type()
