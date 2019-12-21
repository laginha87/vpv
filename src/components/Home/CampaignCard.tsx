import gql from 'graphql-tag'
import React from 'react'
import { Link } from 'react-router-dom'
import Progress from '~components/common/Progress'
import { VoluntaryLabel } from '~components/common/VoluntaryLabel'
import { FCWithFragment } from '~store/types'
import { humanize } from './HomeScreen'
import { CampaignCard as Campaign } from './__generated__/CampaignCard'

export const CampaignCard: FCWithFragment<{
  campaign: Campaign;
}> = ({ campaign: { endDatetime, completion, id, corporation } }) => (
  <Link className='rounded block shadow p-5 mb-4 select-none' to={`/campaigns/${id}`}>
    <div className='text-grey-900 font-bold text-xl mb-2'>{corporation!.name}</div>
    <VoluntaryLabel number={100} />
    <div className='text-grey-500 mb-2 text-xs font-medium'>Estás a X minutos de carro</div>
    <Progress.Bar percentage={completion} />
    <div className='flex justify-between mt-2'>
      <div className='font-bold text-grey-800'>{completion}% da Campanha Suprida</div>
      <div className='text-xs text-grey-500 font-medium'>{humanize(endDatetime)}</div>
    </div>

  </Link>)

CampaignCard.fragments = gql`
fragment CampaignCard on Campaign {
    endDatetime
    completion
    id
    corporation {
        name
    }
}
`
