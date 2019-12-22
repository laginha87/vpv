import React, { ReactNode } from 'react'
import { MapComponent, MapData } from '~components/Map/MapComponent'
import { FCWithFragment } from '~store/types'

interface WithMapProps {
  center: [number, number],
  data: MapData,
  mapHeight: number,
  icon?: () => ReactNode,
  overlay?: boolean
}

export const WithMap: FCWithFragment<WithMapProps> = ({ data, mapHeight, center, children, icon, overlay }) => {
  return (
    <div className='relative'>
      {overlay && <div className='absolute w-full opacity-50 bg-grey-900 z-10' style={{ height: `${mapHeight + 10}vh` }} />}
      {icon &&
        <div className='absolute z-10 left-0 top-0'>
          {icon()}
        </div>}
      <MapComponent center={center} data={data} height={mapHeight + 10} />
      <div className='p-6 rounded-t-lg absolute z-10 w-full bg-grey-100' style={{ top: `${mapHeight}vh`, height: `${100 - mapHeight}vh`, overflow: 'scroll' }}>
        {children}
      </div>
    </div>
  )
}

WithMap.fragments = MapComponent.fragments
