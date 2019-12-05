import React from 'react'
import { MapComponent } from '../Map/MapComponent'
import { useLocation } from 'react-router'
import { VoluntaryLabel } from '../common/VoluntaryLabel'
import Progress from '../common/Progress'
import { useGetCampaign } from '../../model/campaign'
import { Button } from '../common/Button'
import { Icon } from '../common/Icon'
import { Card } from '../common/Card'
import { Link } from 'react-router-dom'

export interface CampaignShowComponentProps {

}

const useId = (): string => {
  const { pathname } = useLocation()
  return pathname.split('/').pop() as string
}

const CampaignStatus = ({ corporation: { attributes: { name } }, campaignSupplies }: any) => {
  return (
    <div>
      <div className='text-center text-grey-900 font-bold text-xl mb-4'>Paulo, a {name} <br /> precisa de:</div>

      <VoluntaryLabel number={87} />
      {campaignSupplies.map(({ attributes: { quantityNeeded, quantitySupplied }, supply }, i) => (
        <div className='py-4 border-b border-grey-200' key={i}>
          <Progress.Bar key={i} percentage={(quantitySupplied / quantityNeeded) * 100} />
          <div className='flex'>
            <div className='w-1/2 font-semibold'>{supply && supply.attributes && supply.attributes.name}</div>
            <div className='w-1/2 text-right font-book text-grey-800'> Faltam {quantitySupplied} de {quantityNeeded}</div>
          </div>
        </div>))}
    </div>)
}

const CampaignShowComponent: React.FC<CampaignShowComponentProps> = () => {
  const id = useId()

  const campaign = useGetCampaign(id)
  if (!campaign) {
    return <div />
  }

  const { corporation, campaignSupplies } = campaign

  return (
    <div>
      <MapComponent center={[corporation.attributes.latitude, corporation.attributes.longitude]} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100 h-full' style={{ top: '20vh', maxHeight: '80vh', overflow: 'scroll' }}>
        <CampaignStatus corporation={corporation} campaignSupplies={campaignSupplies} />
        <div className='absolute bottom-0 w-full -mx-6'>
          <Card>
            <div className='flex justify-between mb-4 font-semibold'>
              <div className='flex items-center'>
                <Progress.Radial percentage={0.5} />

                <div className='ml-1'>Até ás 20h00</div>
              </div>
              <a className='text-grey-800'>Partilhar esta campanha</a>
            </div>
            <Button theme='primary'><Link to={`/campaigns/${id}/supply`}>Escolher Donativos <Icon icon='cenas' /></Link></Button>
          </Card>
        </div>
      </div>
    </div>)
}

export default CampaignShowComponent
