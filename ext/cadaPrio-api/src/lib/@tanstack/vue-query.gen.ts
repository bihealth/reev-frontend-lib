// This file is auto-generated by @hey-api/openapi-ts
import type { Options } from '@hey-api/client-fetch'
import { queryOptions } from '@tanstack/vue-query'

import { client, handlePredictApiV1PredictGet, versionApiV1VersionGet } from '../services.gen'
import type { HandlePredictApiV1PredictGetData } from '../types.gen'

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

export const handlePredictApiV1PredictGetQueryKey = (
  options: Options<HandlePredictApiV1PredictGetData>
) => [createQueryKey('handlePredictApiV1PredictGet', options)]

export const handlePredictApiV1PredictGetOptions = (
  options: Options<HandlePredictApiV1PredictGetData>
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await handlePredictApiV1PredictGet({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: handlePredictApiV1PredictGetQueryKey(options)
  })
}

export const versionApiV1VersionGetQueryKey = (options?: Options) => [
  createQueryKey('versionApiV1VersionGet', options)
]

export const versionApiV1VersionGetOptions = (options?: Options) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await versionApiV1VersionGet({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: versionApiV1VersionGetQueryKey(options)
  })
}