import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { IconMap } from '../../assets/markers'
import { useQuery } from '../common/DataProvider'

type Position = [number, number];

export interface MarkerI {
  position: Position,
  type: 'fire' | 'campaign'
}

interface MapProps {
  center: Position
}

export const MapComponent = ({ center }: MapProps) => {
  // const res = useQuery((q) => q.findRecords('fire'));
  const campaigns = useQuery((q) => q.findRecords('campaign'), { sources: { remote: { include: ['campaignSupplies', 'corporation'] } } })
  // const { data: campaigns } = { data: [] }

  return (
    <Map center={center} zoom={7} zoomControl={false} bound={[[41.9947515, -6.0333746], [36.964373, -9.4045612]]}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution=''
      />
      {/* {fires && fires.map(({ latitude, longitude }, i) => <Marker key={`fire-${i}`} position={[latitude, longitude]} icon={IconMap.fire} />)} */}
      {/* {campaigns && campaigns.map(({ latitude, longitude }, i) => <Marker key={`campaign-${i}`} position={[latitude, longitude]} icon={IconMap.campaign} />)} */}
    </Map>)
}
