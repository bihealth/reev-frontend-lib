// This file is auto-generated by @hey-api/openapi-ts
import type { Options } from '@hey-api/client-fetch'
import { queryOptions } from '@tanstack/vue-query'

import {
  client,
  getExceptionClass,
  getGene2TranscriptsClass,
  getGene2TranscriptsV2Class,
  getHelloClass,
  getHgvs2ReferenceClass,
  getLimitedRateHelllo,
  getLovdClass,
  getVariantFormatterClass,
  getVariantValidatorClass,
  getVariantValidatorEnsemblClass
} from '../services.gen'
import type {
  GetExceptionClassData,
  GetGene2TranscriptsClassData,
  GetGene2TranscriptsV2ClassData,
  GetHelloClassData,
  GetHgvs2ReferenceClassData,
  GetLimitedRateHellloData,
  GetLovdClassData,
  GetVariantFormatterClassData,
  GetVariantValidatorClassData,
  GetVariantValidatorEnsemblClassData
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

export const getLovdClassQueryKey = (options: Options<GetLovdClassData>) => [
  createQueryKey('getLovdClass', options)
]

export const getLovdClassOptions = (options: Options<GetLovdClassData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getLovdClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getLovdClassQueryKey(options)
  })
}

export const getVariantFormatterClassQueryKey = (
  options: Options<GetVariantFormatterClassData>
) => [createQueryKey('getVariantFormatterClass', options)]

export const getVariantFormatterClassOptions = (options: Options<GetVariantFormatterClassData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getVariantFormatterClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getVariantFormatterClassQueryKey(options)
  })
}

export const getGene2TranscriptsClassQueryKey = (
  options: Options<GetGene2TranscriptsClassData>
) => [createQueryKey('getGene2TranscriptsClass', options)]

export const getGene2TranscriptsClassOptions = (options: Options<GetGene2TranscriptsClassData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getGene2TranscriptsClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getGene2TranscriptsClassQueryKey(options)
  })
}

export const getGene2TranscriptsV2ClassQueryKey = (
  options: Options<GetGene2TranscriptsV2ClassData>
) => [createQueryKey('getGene2TranscriptsV2Class', options)]

export const getGene2TranscriptsV2ClassOptions = (
  options: Options<GetGene2TranscriptsV2ClassData>
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getGene2TranscriptsV2Class({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getGene2TranscriptsV2ClassQueryKey(options)
  })
}

export const getHgvs2ReferenceClassQueryKey = (options: Options<GetHgvs2ReferenceClassData>) => [
  createQueryKey('getHgvs2ReferenceClass', options)
]

export const getHgvs2ReferenceClassOptions = (options: Options<GetHgvs2ReferenceClassData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getHgvs2ReferenceClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getHgvs2ReferenceClassQueryKey(options)
  })
}

export const getVariantValidatorClassQueryKey = (
  options: Options<GetVariantValidatorClassData>
) => [createQueryKey('getVariantValidatorClass', options)]

export const getVariantValidatorClassOptions = (options: Options<GetVariantValidatorClassData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getVariantValidatorClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getVariantValidatorClassQueryKey(options)
  })
}

export const getVariantValidatorEnsemblClassQueryKey = (
  options: Options<GetVariantValidatorEnsemblClassData>
) => [createQueryKey('getVariantValidatorEnsemblClass', options)]

export const getVariantValidatorEnsemblClassOptions = (
  options: Options<GetVariantValidatorEnsemblClassData>
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getVariantValidatorEnsemblClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getVariantValidatorEnsemblClassQueryKey(options)
  })
}

export const getHelloClassQueryKey = (options?: Options<GetHelloClassData>) => [
  createQueryKey('getHelloClass', options)
]

export const getHelloClassOptions = (options?: Options<GetHelloClassData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getHelloClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getHelloClassQueryKey(options)
  })
}

export const getLimitedRateHellloQueryKey = (options?: Options<GetLimitedRateHellloData>) => [
  createQueryKey('getLimitedRateHelllo', options)
]

export const getLimitedRateHellloOptions = (options?: Options<GetLimitedRateHellloData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getLimitedRateHelllo({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getLimitedRateHellloQueryKey(options)
  })
}

export const getExceptionClassQueryKey = (options: Options<GetExceptionClassData>) => [
  createQueryKey('getExceptionClass', options)
]

export const getExceptionClassOptions = (options: Options<GetExceptionClassData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getExceptionClass({
        ...options,
        ...queryKey[0],
        throwOnError: true
      })
      return data
    },
    queryKey: getExceptionClassQueryKey(options)
  })
}
