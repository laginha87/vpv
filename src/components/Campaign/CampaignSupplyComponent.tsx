import React from 'react'
import { MapComponent } from '../Map/MapComponent'
import { useLocation } from 'react-router'
import { useGetCampaign } from '../../model/campaign'
import { Formik } from 'formik'

import { CampaignSupplyFields } from './CampaignSupplyFields'

export interface CampaignSupplyComponent {

}

const useId = (): string => {
  const { pathname } = useLocation()
  return pathname.split('/')[2] as string
}

const CampaignSupplyComponent: React.FC<CampaignSupplyComponent> = () => {
  const id = useId()

  const campaign = useGetCampaign(id)
  if (!campaign) {
    return <div />
  }

  const { corporation } = campaign

  return (
    <div>
      <MapComponent center={[corporation.attributes.latitude, corporation.attributes.longitude]} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100 h-full' style={{ top: '20vh', maxHeight: '80vh', overflow: 'scroll' }}>
        <Formik>
          <CampaignSupplyFields campaign={campaign} />
        </Formik>
      </div>
    </div>)
}

export default CampaignSupplyComponent
