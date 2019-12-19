import React, { useMemo, useContext, useState, useCallback } from 'react'
import { Campaign } from '../../model/Campaign'
import { CorporationBasic } from '../../model/Corporation'
import { useFormikContext } from 'formik'
import { CampaignSupplyForm, StepContext } from './CampaignSupplyComponent'
import { CampaignSupply } from '../../model/CampaignSupply'
import { RoundedCard, Icon, QuantityInput, BottomCard, Button } from '../common'

interface Props {
    campaign: Campaign,
    corporation: CorporationBasic,
}

interface SupplyConfirmProps {
    campaignSupply: CampaignSupply;
    index: number
}

const SupplyConfirm: React.FC<SupplyConfirmProps> = ({ campaignSupply, index }) => {
  const { values } = useFormikContext<CampaignSupplyForm>()
  const { supply: { name, icon, description } } = campaignSupply
  const [editing, setEditing] = useState(false)

  const onEdit = useCallback(
    () => {
      setEditing(true)
    },
    [setEditing]
  )

  return (
    <div className='mb-4'>
      <RoundedCard>
        <div className='flex justify-between items-center'>
          <div className='rounded py-2 text-center border-2 border-grey-300' style={{ width: 51, height: 40 }}>{values.campaignSupplies[index].quantity}</div>
          <div>{name}</div>
          <Icon icon={icon} w={10} />
        </div>
        <div className='my-3 text-grey-800'>
          {description}
        </div>
        <div className='mb-2'>
          {
            editing
              ? <QuantityInput name={`campaignSupplies[${index}]quantity`} max={campaignSupply.quantityNeeded} />
              : <div> <Button theme='secondary' onClick={onEdit}>Editar</Button></div>
          }
        </div>

      </RoundedCard>
    </div>
  )
}

export const CampaignSupplyStep2: React.FC<Props> = ({ campaign, corporation }) => {
  const { values, isValid } = useFormikContext<CampaignSupplyForm>()
  const { name } = corporation

  const { nextStep, previousStep } = useContext(StepContext)!

  const filledQuantities = useMemo(() => {
    const filled = values.campaignSupplies.filter((e) => e.quantity > 0)
    return campaign
      .campaignSupplies
      .map((campaignSupply, index) => ({ index, campaignSupply }))
      .filter((e) => filled.findIndex(({ supplyId }) => supplyId === e.campaignSupply.supply.id) > -1)
  }, [])

  return (
    <div className='w-screen h-screen bg-grey-100 px-6'>
      <div className='py-6 flex justify-between items-center'>
        <div onClick={previousStep}>
          <Icon icon='arrowLeft' />
        </div>
        <div className='font-bold'>
          {name}
        </div>
        <div className='w-4' />
      </div>

      <div className='mb-10'>
        {filledQuantities.map((e) => <SupplyConfirm key={e.index} {...e} />)}
      </div>

      <BottomCard>
        <div className='flex flex-col'>
          <Button theme='primary' disabled={!isValid} onClick={nextStep}>Estou Pronto a entregar</Button>
          <div className='text-grey-500 text-center mt-4' onClick={previousStep}>Não Consigo Fazer Esta Entrega</div>
        </div>
      </BottomCard>
    </div>
  )
}
