import React from 'react'
import { MapComponent } from '../Map/MapComponent'
import { useLocation } from 'react-router'
import { VoluntaryLabel } from '../common/VoluntaryLabel'
import { ProgressBar } from '../common/ProgressBar'
import { useGetCampaign } from '../../model/campaign'

export interface CampaignShowComponentProps {

}

const useId = (): string => {
  const { pathname } = useLocation()
  return pathname.split('/').pop() as string
}

const CampaignStatus = ({ campaign: { name, campaignSupplies } }: { campaign: any }) => {
  return (
    <div>
      <div className='text-center text-grey-900 font-bold text-xl mb-4'>Paulo, a {name} <br /> precisa de:</div>

      <VoluntaryLabel number={87} />
      {campaignSupplies.map((e, i) => (
        <div className='py-4 border-b border-grey-200' key={i}>
          <ProgressBar key={i} percentage={(e.quantitySupplied / e.quantityNeeded) * 100} />
          <div className='flex'>
            <div className='w-1/2 font-bold'>{e.supplyName}</div>
            <div className='w-1/2 text-right'> Faltam {e.quantitySupplied} de {e.quantityNeeded}</div>
          </div>
        </div>))}
    </div>)
}

const CampaignShowComponent: React.FC<CampaignShowComponentProps> = () => {
  const id = useId()

  const { campaign } = useGetCampaign(id)
  if (!campaign) {
    return <div />
  }

  return (
    <div>
      <MapComponent center={[campaign!.latitude, campaign!.longitude]} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100 h-full' style={{ top: '20vh', maxHeight: '80vh', overflow: 'scroll' }}>
        <CampaignStatus campaign={campaign} />
      </div>
    </div>)
}

export default CampaignShowComponent
