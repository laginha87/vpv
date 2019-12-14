import { useFormikContext } from 'formik'
import React, { FC, useCallback, useState, useContext } from 'react'
import { Campaign } from '../../model/Campaign'
import { CampaignSupply } from '../../model/CampaignSupply'
import { Button, BottomCard, Icon, List, Progress, QuantityInput } from '../common'
import { CampaignSupplyForm, StepContext } from './CampaignSupplyComponent'

const SupplyInput = ({ campaignSupply: { quantityNeeded, quantitySupplied, supply }, index }: { campaignSupply: CampaignSupply, index: number }) => {
  const quantityLimit = quantityNeeded - quantitySupplied

  const [active, setActive] = useState(false)
  const toggleActive = useCallback(
    () => {
      setActive(!active)
    },
    [setActive, active]
  )

  const { name, icon } = supply

  return (
    <div>
      <div className='flex items-center'>
        <div onClick={toggleActive} className='w-5 h-5 mr-4 cursor-pointer'>
          <Icon icon={active ? 'active' : 'inactive'} />
        </div>
        <div className='mr-2'>
          <Icon icon={icon} size={10} background='grey-300' rounded />
        </div>
        <div>
          <div className='font-semibold text-grey-900'>{name}</div>
          <div className='font-medium text-xs text-grey-800'>Até {quantityLimit} {name}</div>
        </div>

      </div>
      {active && <QuantityInput name={`campaignSupplies[${index}]quantity`} max={quantityLimit} />}
    </div>)
}

export const CampaignSupplyFields: FC<{ campaign: Campaign }> = ({ campaign }) => {
  const { errors, isValid, dirty } = useFormikContext<CampaignSupplyForm>()
  const { nextStep } = useContext(StepContext)!

  return (
    <>
      <div className='pb-32'>
        <div className='text-center mb-5 text-grey-900 font-bold'>Seleciona os donativos da tua contribuição</div>
        <div className='text-center mb-8 text-grey-800 text-sm'>Podes escolher todos ou parte dos produtos que ainda faltam.</div>
        {errors.campaignSupplies && typeof (errors.campaignSupplies) === 'string' && <div className='text-red-100'>{errors.campaignSupplies}</div>}
        <List collection={campaign && campaign.campaignSupplies} render={(e, i) => (<SupplyInput campaignSupply={e as any} key={e.id} index={i} />)} />
      </div>
      <BottomCard>
        <div className='flex justify-between mb-4 font-semibold'>
          <div className='flex items-center'>
            <Progress.Radial percentage={0.5} />

            <div className='ml-1'>Até ás 20h00</div>
          </div>
          <a className='text-grey-800'>Partilhar esta campanha</a>
        </div>

        <Button theme='primary' onClick={nextStep} disabled={!isValid || !dirty}>
          <div className='flex justify-center items-center'>Confirmar Quantidades <Icon size={6} icon='chevronRight' /></div>
        </Button>
      </BottomCard>
    </>
  )
}
