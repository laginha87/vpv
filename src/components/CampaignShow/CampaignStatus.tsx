import { gql } from 'apollo-boost'
import React from 'react'
import { Progress, VoluntaryLabel } from '~components/common'
import { FCWithFragment } from '~store/types'
import { CampaignStatus as Campaign } from './__generated__/CampaignStatus'

export const CampaignStatus: FCWithFragment<{
  campaign: Campaign
}> = ({ campaign }) => {
  const { corporation, campaignSupplies, numberOfVolunteers } = campaign
  return (
    <div>
      <div className='text-center text-grey-900 font-bold text-xl mb-4'>Paulo, a {corporation.name} <br /> precisa de:</div>

      <VoluntaryLabel number={numberOfVolunteers} />
      {campaignSupplies.map(({ quantityNeeded, quantitySupplied, supply }, i) => (
        <div className='py-4 border-b border-grey-200' key={i}>
          <Progress.Bar key={i} percentage={(quantitySupplied / quantityNeeded) * 100} />
          <div className='flex'>
            <div className='w-1/2 font-semibold'>{supply.name}</div>
            <div className='w-1/2 text-right font-book text-grey-800'> Faltam {quantitySupplied} de {quantityNeeded}</div>
          </div>
        </div>))}
    </div>)
}

CampaignStatus.fragments = gql`
fragment CampaignStatus on Campaign {
  id
  numberOfVolunteers
  corporation {
    id
    name
  }
  campaignSupplies {
    id
    quantityNeeded
    quantitySupplied
    supply {
      id
      name
    }
  }
}
`
