import React from 'react'
import { Campaign } from '../../model/Campaign'
import { CorporationBasic } from '../../model/Corporation'
import { BottomCard, Button, Icon } from '../common'

interface Props {
  campaign: Campaign,
  corporation: CorporationBasic,
}

export const CampaignSupplyFinish: React.FC<Props> = ({ corporation }) => {
  const { name } = corporation

  return (
    <div>
      <Icon icon='hands' fill='yellow-200' />
      <div className='font-bold text-grey-900 mb-4'>{name}</div>

      <BottomCard>
        <div className='w-full'>
          <Button theme='primary'>Ver outras campanhas</Button>
        </div>
      </BottomCard>>
    </div>
  )
}
