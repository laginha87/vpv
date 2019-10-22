import React from 'react';
import { MarkerI, MapComponent } from '../Map/MapComponent';


interface HomeProps {

}

const markers : MarkerI[] = [
  {position: [51.400, 0], type: 'campaign'},
  {position: [51.200, 0], type: 'fire'},
  {position: [38.7863488,-9.1588781], type: 'campaign'}
]

interface Campaign {
  name : string;
  number_of_voluntaries: number;
  distance: number;
  percentage_complete: number;
  end_date: number;
}
const campaign = [
  {
    name: "Corporação de Vilar",
    number_of_voluntaries: 5,
    distance: 25,
    percentage_complete: 65,
    end_date: 20,
  }
]

const campaigns : Campaign[] = Array(10).fill(campaign);

const CampaignCard = ({campaign: {number_of_voluntaries,name, distance, end_date, percentage_complete}} : {campaign: Campaign}) => (<div className='rounded shadow p-5'>
  <div className='text-grey-900 font-bold text-xl'>{name}</div>
  <div className="bg-grey-500">Há {number_of_voluntaries} voluntários envolvidos na campanha</div>
  <div className="text-grey-300">Estás a {distance} minutos de carro</div>
  <div className='flex'>
    <div className='font-bold'>{percentage_complete}% da Campanha Suprida</div>
  </div>

</div>)


export const HomeComponent = (props : HomeProps) => {
  return <div>
    <MapComponent markers={markers as any} />
    <div className='p-6 rounded w-full z-10 absolute bg-grey-100' style={{top: "40vh", maxHeight: "60vh", overflow: 'scroll'}}>
      <div className='text-center text-grey-900 font-bold text-xl mb-4'>Campanhas ativas na tua área</div>
      {campaigns && campaigns.map((e) => <CampaignCard campaign={e}/>)}
    </div>
  </div>;
}