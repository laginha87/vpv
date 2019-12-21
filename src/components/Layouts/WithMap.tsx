import { ApolloQueryResult } from 'apollo-boost'
import React from 'react'
import { MapComponent } from '~components/Map/MapComponent'
import { MapCampaign } from '~components/Map/__generated__/MapCampaign'
import { MapFire } from '~components/Map/__generated__/MapFire'
import { FCWithFragment } from '~store/types'

interface WithMapProps {
    center: [number, number],
    data: ApolloQueryResult<{ fires: MapFire[], campaigns: MapCampaign[] }>,
    mapHeight: number
}

export const WithMap: FCWithFragment<WithMapProps> = ({ data, mapHeight, center, children }) => {
  return (
    <div>
      <MapComponent center={center} data={data} height={mapHeight} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100' style={{ top: `${mapHeight}vh`, maxHeight: `${100 - mapHeight}vh`, overflow: 'scroll' }}>
        {children}
      </div>
    </div>
  )
}

WithMap.fragments = MapComponent.fragments
