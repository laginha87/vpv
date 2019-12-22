import React, { FC } from 'react';
import { MapComponent, MapData } from '~components/Map/MapComponent';
import { FCWithFragment } from '~store/types';
import { Link } from 'react-router-dom';
import { Icon, IconName } from '~components/common';

interface WithMapProps {
  center: [number, number],
  data: MapData,
  mapHeight: number,
  back?: string,
  icon?: IconName,
  overlay?: boolean
}

export const WithMap: FCWithFragment<WithMapProps> = ({ data, mapHeight, center, children, back, icon, overlay }) => {
  return (
    <div className='relative'>
      {overlay && <div className="absolute w-full opacity-50 bg-grey-900 z-10" style={{height: `${mapHeight + 10}vh`}}></div>}
      {icon && back &&
        <Link to={back} className='absolute z-10 left-0 top-0'>
          <Icon icon={icon} m={4} p={4} bg="grey-100" rounded="full" />
        </Link>}
      <MapComponent center={center} data={data} height={mapHeight + 10} />
      <div className='p-6 rounded-t-lg absolute z-10 w-full bg-grey-100' style={{ top: `${mapHeight}vh`, height: `${100 - mapHeight}vh`, overflow: 'scroll' }}>
        {children}
      </div>
    </div>
  )
}

WithMap.fragments = MapComponent.fragments
