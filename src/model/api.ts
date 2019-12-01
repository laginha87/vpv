import useSWR from 'swr'
import { useSelector, useDispatch } from 'react-redux'
import { Model, ModelClass, APIState } from './model'
import { AppState } from '../store/types'
import { useEffect, useCallback } from 'react'
import { JSONApiResourceListingResponse, JSONApiResourceResponse } from './json_api'
import { Fire } from './fire'
import { Reducer } from 'redux'

type RequestStatus = 'loading' | 'loaded' | 'errored';

const getAPIState = (state: AppState): APIState => state.api

function selectAll<T extends Model> (modelClass: ModelClass) {
  return (state: APIState<T>): T[] => Object.values(state[modelClass.modelName].byId)
}

function selectHasLoadedAll (modelClass: ModelClass) {
  return (state: APIState) => state[modelClass.modelName].hasLoadedAll
}

function get<T extends Model> (modelClass: ModelClass) {
  return (state: APIState<T>, id: string): T => state[modelClass.modelName].byId[id]
}

function buildSelectors (modelClass: ModelClass) {
  return {
    selectAll: selectAll(modelClass),
    selectHasLoadedAll: selectHasLoadedAll(modelClass),
    get: get(modelClass)
  }
}

export function buildAPI<T extends Model> (ModelKlass: ModelClass): {
  useGetAll: () => { data: T[], status: RequestStatus },
  useGet: (id: string) => { data: T | undefined, status: RequestStatus }
} {
  const selectors = buildSelectors(ModelKlass)
  return {
    useGetAll: () => {
      const dispatch = useDispatch()

      const { all, hasLoaded } = useSelector<AppState, any>((state) => ({
        hasLoaded: selectors.selectHasLoadedAll(getAPIState(state)),
        all: selectors.selectAll(getAPIState(state))
      }))

      const { data, error } = useSWR(['http://localhost:3000', ModelKlass.modelName].join('/'), fetch)

      useEffect(() => {
        if (data) {
          data.json().then((e: JSONApiResourceListingResponse) => {
            dispatch(actions.loadResources(ModelKlass, e.data.map((e) => new ModelKlass(e))))
          })
        }
      }, [data, error])

      if (hasLoaded) {
        return { data: all, status: 'loaded' }
      }

      return { data: [], status: error ? 'errored' : 'loading' }
    },

    useGet: (id: string) => {
      const dispatch = useDispatch()

      const get = useCallback((state: AppState) => selectors.get(getAPIState(state), id), [id])

      const instance = useSelector<AppState, any>(get)

      const { data, error } = useSWR(['http://localhost:3000', ModelKlass.modelName, id].join('/'), fetch)

      useEffect(() => {
        if (data) {
          data.json().then((e: JSONApiResourceResponse) => {
            dispatch(actions.loadResource(ModelKlass, new ModelKlass(e.data)))
          })
        }
      }, [data, error])

      if (instance) {
        return instance
      }

      return { data: null, status: error ? 'errored' : 'loading' }
    }
  }
}

enum APIActions {
  loadResources = 'API/LOAD_RESOURCES',
  loadResource = 'API/LOAD_RESOURCE'
}

interface BaseAPIAction {
  ModelKlass: ModelClass
}

interface LoadResourcesAction extends BaseAPIAction {
  type: APIActions.loadResources,
  data: Model[]
}

interface LoadResourceAction extends BaseAPIAction {
  type: APIActions.loadResource,
  data: Model
}

type APIAction = LoadResourcesAction | LoadResourceAction;

export const reducer: Reducer<APIState, APIAction> = (state = { fires: { byId: {}, hasLoadedAll: false } }, action) => {
  let modelName
  switch (action.type) {
    case APIActions.loadResources:
      ({ ModelKlass: { modelName } } = action)
      return {
        ...state,
        [modelName]: {
          hasLoadedAll: true,
          byId: action.data.reduce((a, b) => ({ [b.id]: b, ...a }), {})
        }
      }

    case APIActions.loadResource:
      ({ ModelKlass: { modelName } } = action)
      return {
        ...state,
        [modelName]: {
          ...state[modelName],
          [action.data.id]: action.data
        }
      }

    default:
      return state
  }
}

const actions = {
  loadResources: (ModelKlass: ModelClass, data: Model[]): LoadResourcesAction => ({
    type: APIActions.loadResources,
    ModelKlass,
    data
  }),

  loadResource: (ModelKlass: ModelClass, data: Model): LoadResourceAction => ({
    type: APIActions.loadResource,
    ModelKlass,
    data
  })
}

export const API = {
  fires: buildAPI<Fire>(Fire)
}
