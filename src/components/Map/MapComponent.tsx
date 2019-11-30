import React, { useState, useEffect } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { IconMap } from '../../assets/markers'

export interface MarkerI {
  position: [number, number],
  type: 'fire' | 'campaign'
}

interface MapProps {
  markers: MarkerI[]
}

export const MapComponent = () => {
  const [fires, setFires] = useState()
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.API_HOST}/fires`)
      const body = await res.json()
      setFires(body.data.map(({ attributes }) => attributes))
    })()
  }, [setFires])

  return (
    <Map center={[38.736946, -9.142685]} zoom={7} zoomControl={false} bound={[[41.9947515, -6.0333746], [36.964373, -9.4045612]]}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution=''
      />
      {fires && fires.map(({ latitude, longitude }, i) => <Marker key={i} position={[latitude, longitude]} icon={IconMap.fire} />)}
    </Map>)
}
