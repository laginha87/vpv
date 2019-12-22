import { gql } from 'apollo-boost'
import { useFormikContext } from 'formik'
import React, { useContext } from 'react'
import { CampaignSupplyForm, StepContext } from '~components/CampaignSupply/CampaignSupplyScreen'
import { BottomCard, Button, Icon, List, Progress } from '~components/common'
import { FCWithFragment } from '~store/types'
import { SupplyInput } from './SupplyInput'
import { CampaignSupplyFieldsFragment } from './__generated__/CampaignSupplyFieldsFragment'

export const CampaignSupplyFields: FCWithFragment<{ campaign: CampaignSupplyFieldsFragment }> = ({ campaign }) => {
  const { errors, isValid, dirty } = useFormikContext<CampaignSupplyForm>()
  const { nextStep } = useContext(StepContext)!

  return (
    <>
      <div className='pb-32'>
        <div className='text-center mb-5 text-grey-900 font-bold'>Seleciona os donativos da tua contribuição</div>
        <div className='text-center mb-8 text-grey-800 text-sm'>Podes escolher todos ou parte dos produtos que ainda faltam.</div>
        {errors.campaignSupplies && typeof (errors.campaignSupplies) === 'string' && <div className='text-red-100'>{errors.campaignSupplies}</div>}
        <List collection={campaign.campaignSupplies} render={(e, i) => (<SupplyInput campaignSupply={e} key={e.id} index={i} />)} />
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
          <div className='flex justify-center items-center'>Confirmar Quantidades <Icon w={6} icon='chevronRight' /></div>
        </Button>
      </BottomCard>
    </>
  )
}

CampaignSupplyFields.fragments = gql`

fragment CampaignSupplyFieldsFragment on Campaign {
  campaignSupplies {
    ...SupplyInputFragment
  }
}
${SupplyInput.fragments}
`
