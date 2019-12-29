import React, { FC, useContext, useState } from 'react'
import { MapComponent } from '~components/Map/MapComponent'

import { MapContext } from './MapContext'

export const MapProvider: FC = ({ children }) => {
  const { loading } = useContext(MapContext)
  const [data, setData] = useState(null)
  const [mapHeight, setHeight] = useState(0)
  const [center, setCenter] = useState([0, 0] as [number, number])

  return (
    <MapContext.Provider value={{
      data,
      setData,
      loading,
      mapHeight,
      center,
      setCenter,
      setHeight
    }}
    >
      <MapComponent center={center} data={data as any} height={mapHeight > 0 ? mapHeight + 10 : 0} />
      {children}
    </MapContext.Provider>)
}
