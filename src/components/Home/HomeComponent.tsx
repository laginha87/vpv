import React from 'react'
import { MapComponent } from '../Map/MapComponent'
import { API } from '../../model/api'
import { Campaign } from '../../model/campaign'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'
import { ProgressBar } from '../common/ProgressBar'
import { VoluntaryLabel } from '../common/VoluntaryLabel'

const humanize = (e: DateTime) => {
  if (e.diffNow().hours > 24) {
    return `Termina a ${e.toFormat('HH:MM dd-mm-YYYY')}`
  } else {
    return `Até ás ${e.toFormat('HH')}h`
  }
}

export const CampaignCard = ({ campaign: { name, endDatetime, completion, id } }: { campaign: Campaign }) => (
  <Link className='rounded shadow p-5 mb-4 select-none' to={`/campaigns/${id}`}>
    <div className='text-grey-900 font-bold text-xl mb-2'>{name}</div>
    <VoluntaryLabel number={100} />
    <div className='text-grey-500 mb-2 text-xs font-medium'>Estás a X minutos de carro</div>
    <ProgressBar percentage={completion} />
    <div className='flex justify-between mt-2'>
      <div className='font-bold text-grey-800'>{completion}% da Campanha Suprida</div>
      <div className='text-xs text-grey-500 font-medium'>{humanize(endDatetime)}</div>
    </div>

  </Link>)

export const HomeComponent = () => {
  const { data: campaigns } = API.campaigns.useGetAll()
  return (
    <div>
      <MapComponent center={[38.736946, -9.142685]} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100' style={{ top: '40vh', maxHeight: '60vh', overflow: 'scroll' }}>
        <div className='text-center text-grey-900 font-bold text-xl mb-4'>Campanhas ativas na tua área</div>
        {campaigns && campaigns.map((e) => <CampaignCard key={e.id} campaign={e} />)}
      </div>
    </div>)
}
