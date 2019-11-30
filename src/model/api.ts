import useSWR from 'swr'
import { useSelector } from 'react-redux'
import { Model, ModelClass } from './model'
import { AppState } from '~src/store/types'
import { useEffect, useCallback } from 'react'
import { JSONApiResourceListingResponse } from './json_api'
import { Fire } from './fire'

type RequestStatus = 'loading' | 'loaded' | 'errored';

export interface APIState<T extends Model = any> {
    [k: string]: {
        byId: { [k: string]: T }
        hasLoadedAll: boolean
    }
}

const getApiState = (state: AppState): APIState => state.api

function selectAll<T extends Model> (modelClass: ModelClass) {
  return (state: APIState<T>): T[] => Object.values(state[modelClass.modelName].byId)
}

function selectHasLoadedAll (modelClass: ModelClass) {
  return (state: APIState) => state[modelClass.modelName].hasLoadedAll
}

function get<T extends Model> (modelClass: ModelClass) {
  return (state: APIState<T>, id: string): T => state[modelClass.modelName].byId[id]
}

function buildSelectors<T extends Model> (modelClass: ModelClass) {
  return {
    selectAll: selectAll(modelClass),
    selectHasLoadedAll: selectHasLoadedAll(modelClass),
    get: get(modelClass)
  }
}

export function buildApi<T extends Model> (ModelKlass: ModelClass): {
    useGetAll: () => { data: T[], status: RequestStatus },
    useGet: (id: string) => { data: T | undefined, status: RequestStatus }
} {
  const selectors = buildSelectors(ModelKlass)
  return {
    useGetAll: () => {
    //   const dispatch = useDispatch()

      const { all, hasLoaded } = useSelector<AppState, any>((state) => ({
        hasLoaded: selectors.selectHasLoadedAll(getApiState(state)),
        all: selectors.selectAll(getApiState(state))
      }))

      const { data, error } = useSWR(ModelKlass.modelName, fetch)

      useEffect(() => {
        if (data) {
          data.json().then((e: JSONApiResourceListingResponse) => {
            e.data.map((e) => new ModelKlass(e))
          })
        }
      }, [data, error])

      if (hasLoaded) {
        return { data: all, status: 'loaded' }
      }

      return { data: [], status: error ? 'errored' : 'loading' }
    },

    useGet: (id : string) => {
    //   const dispatch = useDispatch()

      const get = useCallback((state: AppState) => selectors.get(getApiState(state), id), [id])

      const instance = useSelector<AppState, any>(get)

      const { data, error } = useSWR([ModelKlass.modelName, id].join('/'), fetch)

      useEffect(() => {

      }, [data, error])

      if (instance) {
        return instance
      }

      return { data: null, status: error ? 'errored' : 'loading' }
    }
  }
}

export const Api = {
  fires: buildApi<Fire>(Fire)
}
