import { useFormikContext } from 'formik'
import React from 'react'
import { Campaign } from '../../model/Campaign'
import { CorporationBasic } from '../../model/Corporation'
import { BottomCard, Button, Icon, RoundedCard } from '../common'
import { MapComponent } from '../Map/MapComponent'
import { CampaignSupplyForm } from './CampaignSupplyComponent'

interface Props {
  campaign: Campaign,
  corporation: CorporationBasic,
}

export const CampaignSupplyStep3: React.FC<Props> = ({ campaign, corporation }) => {
  const { isValid, submitForm } = useFormikContext<CampaignSupplyForm>()
  const { name, latitude, longitude } = corporation

  return (
    <div>
      <MapComponent height={40} center={[corporation.latitude, corporation.longitude]} />
      <div className='p-6 rounded-t-lg w-full z-10 absolute bg-grey-100 h-full' style={{ top: '40vh', height: '60vh', overflow: 'scroll' }}>
        <div className='font-bold text-grey-900 mb-4'>{name}</div>
        <div className='text-grey-500 mb-4'>{name}</div>
        <div className='mb-4'>
          <RoundedCard>
            <div className='flex items-center'>
              <div className='flex-grow'>
                <div>Rua das Fontainhas</div>
                <div className='text-grey-500'>{latitude} {longitude}</div>
              </div>
              <Icon w={8} p={2} rounded='default' bg='black' icon='directions' />
            </div>
          </RoundedCard>
        </div>
        <div className='text-center'>
          Entrega o teu contributo á {name} até às {campaign.endDatetime}.
        </div>

        <div className='text-grey-500 text-center'>
          faltam x minutos
        </div>

        <BottomCard>
          <div className='flex flex-col'>
            <Button theme='primary' disabled={!isValid} onClick={submitForm}>Estou Pronto a entregar</Button>
            <div className='text-grey-500 text-center mt-4'>Não Consigo Fazer Esta Entrega</div>
          </div>
        </BottomCard>
      </div>
    </div>
  )
}
