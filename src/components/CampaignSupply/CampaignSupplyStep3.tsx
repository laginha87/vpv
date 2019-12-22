import { useFormikContext } from 'formik'
import React, { useContext } from 'react'
import { BottomCard, Button, Icon, RoundedCard } from '~components/common'
import { CampaignSupplyForm, StepContext } from './CampaignSupplyScreen'
import { FCWithFragment } from '~store/types'
import { Layouts } from '~components/Layouts'
import { gql } from 'apollo-boost'
import { CampaignSupplyStep3Fragment } from './__generated__/CampaignSupplyStep3Fragment'
import { MapData } from '~components/Map/MapComponent'
import { Link } from 'react-router-dom'

interface Props {
  campaign: CampaignSupplyStep3Fragment,
  mapData: MapData
}

export const CampaignSupplyStep3: FCWithFragment<Props> = ({ campaign, mapData }) => {
  const { isValid, submitForm } = useFormikContext<CampaignSupplyForm>()
  const { corporation: { name, latitude, longitude } } = campaign
  const { previousStep } = useContext(StepContext)

  return (
    <Layouts.WithMap center={[latitude, longitude]} mapHeight={40} data={mapData} icon={() => <div onClick={previousStep}><Icon icon='arrowLeft' m={4} p={4} bg='grey-100' rounded='full' /></div>}>
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
          <Button theme='link' mt={4}> <Link to='/'>Não Consigo Fazer Esta Entrega</Link></Button>
        </div>
      </BottomCard>
    </Layouts.WithMap>
  )
}

CampaignSupplyStep3.fragments = gql`
fragment CampaignSupplyStep3Fragment on Campaign {
  id
  endDatetime
  corporation {
    id
    name
    latitude
    longitude
  }

}
${Layouts.WithMap.fragments}
`
