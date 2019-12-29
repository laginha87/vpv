import { gql } from 'apollo-boost'
import { useFormikContext } from 'formik'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BottomCard, Button, Icon, MapPanel, RoundedCard } from '~components/common'
import { MapData } from '~components/Map/MapComponent'
import { useMap } from '~components/Map/useMap'
import { FCWithFragment } from '~store/types'
import { humanize } from '~utils/date'

import { CampaignSupplyStep3Fragment } from './__generated__/CampaignSupplyStep3Fragment'
import { CampaignSupplyForm, StepContext } from './CampaignSupplyScreen'

interface Props {
  campaign: CampaignSupplyStep3Fragment,
  mapData: MapData
}

export const CampaignSupplyStep3: FCWithFragment<Props> = ({ campaign, mapData: data }) => {
  const { isValid, submitForm } = useFormikContext<CampaignSupplyForm>()
  const { corporation: { name, latitude, longitude } } = campaign
  const { previousStep } = useContext(StepContext)
  useMap({ height: 40, data, center: [latitude, longitude] })

  return (
    <MapPanel height={40} icon={() => <div onClick={previousStep}><Icon icon='arrowLeft' m={4} p={4} bg='grey-100' rounded='full' /></div>}>
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
        Entrega o teu contributo á {name} {humanize(campaign.endDatetime).toLowerCase()}.
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
    </MapPanel>
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
${useMap.fragments}
`
