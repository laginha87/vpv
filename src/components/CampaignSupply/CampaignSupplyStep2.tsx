import { gql } from 'apollo-boost'
import { useFormikContext } from 'formik'
import React, { useContext, useMemo } from 'react'
import { CampaignSupplyForm, StepContext } from '~components/CampaignSupply/CampaignSupplyScreen'
import { BottomCard, Button, Icon } from '~components/common'
import { FCWithFragment } from '~store/types'
import { SupplyConfirm } from './SupplyConfirm'
import { CampaignSupplyStep2Fragment } from './__generated__/CampaignSupplyStep2Fragment'

export const CampaignSupplyStep2: FCWithFragment<{ campaign: CampaignSupplyStep2Fragment }> = ({ campaign }) => {
  const { values, isValid } = useFormikContext<CampaignSupplyForm>()
  const { name } = campaign.corporation!

  const { nextStep, previousStep } = useContext(StepContext)!

  const filledQuantities = useMemo(() => {
    const filled = values.campaignSupplies.filter((e) => e.quantity > 0)
    return campaign!
      .campaignSupplies!
      .map((campaignSupply, index) => ({ index, campaignSupply }))
      .filter((e) => filled.findIndex(({ supplyId }) => supplyId.toString() === e!.campaignSupply!.supply!.id!) > -1)
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
CampaignSupplyStep2.fragments = gql`
fragment CampaignSupplyStep2Fragment on Campaign {
  corporation {
    name
  }
  campaignSupplies {
    ...SupplyConfirmFragment
    supply {
      id
    }
  }
}
${SupplyConfirm.fragments}
`
