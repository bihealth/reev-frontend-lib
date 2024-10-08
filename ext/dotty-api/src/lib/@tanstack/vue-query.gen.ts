// This file is auto-generated by @hey-api/openapi-ts
import type { Options } from '@hey-api/client-fetch'
import { queryOptions } from '@tanstack/vue-query'

import {
  client,
  findTranscriptsApiV1FindTranscriptsGet,
  toSpdiApiV1ToSpdiGet
} from '../services.gen'
import type {
  FindTranscriptsApiV1FindTranscriptsGetData,
  ToSpdiApiV1ToSpdiGetData
} from '../types.gen'

type QueryKey<TOptions extends Options> = [
  Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
    _id: string
    _infinite?: boolean
  }
]

const createQueryKey = <TOptions extends Options>(
  id: string,
  options?: TOptions,
  infinite?: boolean
): QueryKey<TOptions>[0] => {
  const params: QueryKey<TOptions>[0] = {
    _id: id,
    baseUrl: client.getConfig().baseUrl
  } as QueryKey<TOptions>[0]
  if (infinite) {
    params._infinite = infinite
  }
  if (options?.body) {
    params.body = options.body
  }
  if (options?.headers) {
    params.headers = options.headers
  }
  if (options?.path) {
    params.path = options.path
  }
  if (options?.query) {
    params.query = options.query
  }
  return params
}

export const findTranscriptsApiV1FindTranscriptsGetQueryKey = (
  options: Options<FindTranscriptsApiV1FindTranscriptsGetData>
) => [createQueryKey('findTranscriptsApiV1FindTranscriptsGet', options)]

export const findTranscriptsApiV1FindTranscriptsGetOptions = (
  options: Options<FindTranscriptsApiV1FindTranscriptsGetData>
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await findTranscriptsApiV1FindTranscriptsGet({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: findTranscriptsApiV1FindTranscriptsGetQueryKey(options)
  })
}

export const toSpdiApiV1ToSpdiGetQueryKey = (options: Options<ToSpdiApiV1ToSpdiGetData>) => [
  createQueryKey('toSpdiApiV1ToSpdiGet', options)
]

export const toSpdiApiV1ToSpdiGetOptions = (options: Options<ToSpdiApiV1ToSpdiGetData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await toSpdiApiV1ToSpdiGet({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: toSpdiApiV1ToSpdiGetQueryKey(options)
  })
}
