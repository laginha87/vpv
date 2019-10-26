import React from 'react';
import { MarkerI, MapComponent } from '../Map/MapComponent';
import { Icon } from '../common/Icon';


interface HomeProps {

}

const markers: MarkerI[] = [
  { position: [51.400, 0], type: 'campaign' },
  { position: [51.200, 0], type: 'fire' },
  { position: [38.7863488, -9.1588781], type: 'campaign' }
]

interface Campaign {
  name: string;
  number_of_voluntaries: number;
  distance: number;
  percentage_complete: number;
  end_date: number;
}
const campaign = {
  name: "Corporação de Vilar",
  number_of_voluntaries: 5,
  distance: 25,
  percentage_complete: 65,
  end_date: 20,
}

const campaigns: Campaign[] = Array(10).fill(campaign);

export const CampaignCard = ({ campaign: { number_of_voluntaries, name, distance, end_date, percentage_complete } }: { campaign: Campaign }) => (
  <div className='rounded shadow p-5 mb-4 select-none'>
    <div className='text-grey-900 font-bold text-xl mb-2'>{name}</div>
    <div className="bg-grey-300 text-grey-800 font-bold mb-2 text-xs px-3 py-1 rounded"><Icon icon="people" /> Há {number_of_voluntaries} voluntários envolvidos na campanha</div>
    <div className="text-grey-500 mb-2 text-xs font-medium">Estás a {distance} minutos de carro</div>
    <ProgressBar percentage={percentage_complete} />
    <div className='flex justify-between mt-2'>
      <div className='font-bold text-grey-800'>{percentage_complete}% da Campanha Suprida</div>
      <div className="text-xs text-grey-500 font-medium">Até ás {end_date}h</div>
    </div>

  </div>)

const ProgressBar = ({ percentage }) => <div className='w-full flex'>
  <div className='bg-yellow-100 h-4 rounded-full' style={{ width: `${percentage}%` }}></div>
  <div className='bg-grey-500 h-4 rounded-full flex-grow ml-2'></div>
</div>


export const HomeComponent = (props: HomeProps) => {
  return <div>
    <MapComponent markers={markers as any} />
    <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100' style={{ top: "40vh", maxHeight: "60vh", overflow: 'scroll' }}>
      <div className='text-center text-grey-900 font-bold text-xl mb-4'>Campanhas ativas na tua área</div>
      {campaigns && campaigns.map((e) => <CampaignCard campaign={e} />)}
    </div>
  </div>;
};