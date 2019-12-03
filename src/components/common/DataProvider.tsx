import React, { createContext, useContext, useEffect, useState } from 'react'

import { DataStore, setup } from '../../model/setup'

const a = createContext<{ store: DataStore } | null>(null)

export const useDataStory = (cb: (s: DataStore) => Promise<any>, options: object = {}) => {
  const [res, setRes] = useState(null)
  const { store } = useContext(a)!

  useEffect(() => {
    if (!store) { return };
    cb(store).then(setRes)
    // store.remote.query(query, options).then((e) => {
    //     setRes(e)
    // });
  }, [store])

  return res
}

export const DataProvider: React.FC = (props) => {
  const [store, setStore] = useState()
  useEffect(() => {
    setup().then(setStore)
  }, [])

  return <a.Provider value={{ store }}>
    {props.children}
         </a.Provider>
}
