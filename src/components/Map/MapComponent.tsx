import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { IconMap } from '../../assets/markers'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Fire } from '~src/model/fire'
import { Campaign } from '~src/model/Campaign'

type Position = [number, number];

export interface MarkerI {
  position: Position,
  type: 'fire' | 'campaign'
}

interface MapProps {
  center: Position,
  height?: number
}

export const MapComponent = ({ center, height = 100 }: MapProps) => {
  const { data, loading } = useQuery<{ fires: Fire[], campaigns: Campaign[] }>(gql`
  query {
    fires {
      latitude
      longitude
    }
    campaigns {
      corporation {
        latitude
        longitude
      }
    }
  }`)

  return (
    <div style={{ height: `${height}vh` }}>
      <Map center={center} zoom={7} zoomControl={false} bound={[[41.9947515, -6.0333746], [36.964373, -9.4045612]]}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution=''
        />
        {!loading && data!.fires.map(({ latitude, longitude }, i) => <Marker key={`fire-${i}`} position={[latitude, longitude]} icon={IconMap.fire} />)}
        {!loading && data!.campaigns.map(({ corporation: { latitude, longitude } }, i) => <Marker key={`campaign-${i}`} position={[latitude, longitude]} icon={IconMap.campaign} />)}
      </Map>
    </div>)
}
