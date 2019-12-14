import React from 'react'
import { Campaign } from '../../model/Campaign'
import { CorporationBasic } from '../../model/corporation'
import { MapComponent } from '../Map/MapComponent'
import { CampaignSupplyFields } from './CampaignSupplyFields'

interface Props {
    campaign: Campaign,
    corporation: CorporationBasic
}

export const CampaignSupplyStep1: React.FC<Props> = ({ campaign, corporation }) => {
  return (
    <>
      <MapComponent center={[corporation.latitude, corporation.longitude]} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100 h-full' style={{ top: '20vh', maxHeight: '80vh', overflow: 'scroll' }}>

        <CampaignSupplyFields campaign={campaign} />
      </div>
    </>
  )
}
