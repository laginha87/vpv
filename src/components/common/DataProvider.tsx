import { QueryOrExpression } from '@orbit/data'
import { createContext, useContext, useEffect, useState } from 'react'

import { DataStore } from '../../model/setup'

const a = createContext<{ store: DataStore } | null>(null)

export function useMemorySource () {
  const { store } = useContext(a)!
  return store.memory
}

export function useQuery<T> (cb: QueryOrExpression, options: object = {}): T {
  const [res, setRes] = useState<any>(null)
  const { store } = useContext(a)!

  useEffect(() => {
    const sync = () => {
      try {
        setRes(store.memory.cache.query(cb))
      } catch (e) {

      }
    }
    store.memory.on('sync', sync)

    store
      .memory
      .query(cb, options)
      .catch((e) => store.memory.requestQueue.skip(e))
      .then(setRes)
    return () => store.memory.off('sync', sync)
  }, [store])

  return res
}

export const DataProvider = a.Provider