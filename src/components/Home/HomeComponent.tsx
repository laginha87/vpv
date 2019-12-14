import React, { FC } from 'react'
import { MapComponent } from '../Map/MapComponent'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'
import Progress from '../common/Progress'
import { VoluntaryLabel } from '../common/VoluntaryLabel'
import { Campaign } from '../../model/Campaign'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const humanize = (d: Date) => {
  const e = DateTime.fromJSDate(d)
  if (e.diffNow().hours > 24) {
    return `Termina a ${e.toFormat('HH:MM dd-mm-YYYY')}`
  } else {
    return `Até ás ${e.toFormat('HH')}h`
  }
}

export const CampaignCard: FC<{ campaign: Campaign }> = ({ campaign: { endDatetime, completion, id, corporation: { name } } }) => (
  <Link className='rounded block shadow p-5 mb-4 select-none' to={`/campaigns/${id}`}>
    <div className='text-grey-900 font-bold text-xl mb-2'>{name}</div>
    <VoluntaryLabel number={100} />
    <div className='text-grey-500 mb-2 text-xs font-medium'>Estás a X minutos de carro</div>
    <Progress.Bar percentage={completion} />
    <div className='flex justify-between mt-2'>
      <div className='font-bold text-grey-800'>{completion}% da Campanha Suprida</div>
      <div className='text-xs text-grey-500 font-medium'>{humanize(endDatetime)}</div>
    </div>

  </Link>)

export const HomeComponent = () => {
  const { data, loading } = useQuery<{ campaigns: Campaign[] }>(gql`
  query {
    campaigns {
      id
      endDatetime
      completion
      corporation {
        name
      }
    }
  }
  `)
  return (
    <div>
      <MapComponent center={[38.736946, -9.142685]} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100' style={{ top: '40vh', maxHeight: '60vh', overflow: 'scroll' }}>
        <div className='text-center text-grey-900 font-bold text-xl mb-4'>Campanhas ativas na tua área</div>
        {!loading && data!.campaigns.map((e) => <CampaignCard key={e.id} campaign={e} />)}
      </div>
    </div>)
}
