import { gql } from 'apollo-boost'
import React, { FC, useEffect, useRef } from 'react'
import { Map, Marker, TileLayer, useLeaflet } from 'react-leaflet'
import { IconMap } from '~assets/markers'
import { FCWithFragment } from '~store/types'

import { MapCampaign } from './__generated__/MapCampaign'
import { MapFire } from './__generated__/MapFire'

type Position = [number, number];

export interface MarkerI {
  position: Position,
  type: 'fire' | 'campaign'
}

export interface MapData {
  fires: MapFire[],
  campaigns: MapCampaign[]
}
interface MapProps {
  center: [number, number],
  data: MapData,
  height?: number,
}

const RefreshMap :FC<{height: number}> = ({ height }) => {
  const { map } = useLeaflet()

  useEffect(() => {
    map && map.invalidateSize()
  }, [height])
  return <></>
}

export const MapComponent: FCWithFragment<MapProps> = ({ center, height = 100, data }: MapProps) => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (container.current) {
      container.current.style.height = `${height}vh`
    }
  }, [height])

  return (
    <div ref={container}>
      <Map center={center} zoom={7} zoomControl={false} bound={[[41.9947515, -6.0333746], [36.964373, -9.4045612]]}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution=''
        />
        <RefreshMap height={height} />
        {data && data.fires.map(({ latitude, longitude }, i) => <Marker key={`fire-${i}`} position={[latitude, longitude]} icon={IconMap.fire} />)}
        {data && data.campaigns.map(({ corporation }, i) => {
          const { latitude, longitude } = corporation!
          return <Marker key={`campaign-${i}`} position={[latitude!, longitude!]} icon={IconMap.campaign} />
        })}
      </Map>
    </div>)
}

MapComponent.fragments = gql`
fragment MapFire on Fire {
  id
  latitude
  longitude
}
fragment MapCampaign on Campaign {
  id
  corporation {
    id
    latitude
    longitude
  }
}
`
