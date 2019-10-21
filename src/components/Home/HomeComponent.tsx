import React, { useEffect, useState } from 'react';
import { MarkerI, MapComponent } from '../Map/MapComponent';


interface HomeProps {

}

const markers : MarkerI[] = [
  {position: [51.400, 0], type: 'campaign'},
  {position: [51.200, 0], type: 'fire'},
  {position: [38.7863488,-9.1588781], type: 'campaign'}
]

export const HomeComponent = (props : HomeProps) => {
  return <div>
    <MapComponent markers={markers as any} />
    <div className='mh-6 rounded w-full z-10 absolute bottom-0'>
      <div>Campanhas ativas na sua área</div>

    </div>
  </div>;
}