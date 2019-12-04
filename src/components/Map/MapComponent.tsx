import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { IconMap } from '../../assets/markers'
import { useQuery } from '../common/DataProvider'
import { useGetAllCampaigns } from '../../model/campaign'

type Position = [number, number];

export interface MarkerI {
  position: Position,
  type: 'fire' | 'campaign'
}

interface MapProps {
  center: Position
}

export const MapComponent = ({ center }: MapProps) => {
  const fires: any = useQuery((q) => q.findRecords('fire'))
  const campaigns = useGetAllCampaigns()

  return (
    <Map center={center} zoom={7} zoomControl={false} bound={[[41.9947515, -6.0333746], [36.964373, -9.4045612]]}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution=''
      />
      {fires && fires.map(({ attributes: { latitude, longitude } }, i) => <Marker key={`fire-${i}`} position={[latitude, longitude]} icon={IconMap.fire} />)}
      {campaigns && campaigns.map(({ corporation: { attributes: { latitude, longitude } } }, i) => <Marker key={`campaign-${i}`} position={[latitude, longitude]} icon={IconMap.campaign} />)}
    </Map>)
}
