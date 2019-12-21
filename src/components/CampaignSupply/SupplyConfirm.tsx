import { gql } from 'apollo-boost'
import { useFormikContext } from 'formik'
import React, { useCallback, useState } from 'react'
import { CampaignSupplyForm } from '~components/CampaignSupply/CampaignSupplyScreen'
import { Button, Icon, QuantityInput, RoundedCard } from '~components/common'
import { FCWithFragment } from '~store/types'
import { SupplyConfirmFragment } from './__generated__/SupplyConfirmFragment'

export interface SupplyConfirmProps {
  campaignSupply: SupplyConfirmFragment;
  index: number
}

export const SupplyConfirm: FCWithFragment<SupplyConfirmProps> = ({ campaignSupply, index }) => {
  const { values } = useFormikContext<CampaignSupplyForm>()
  const { supply } = campaignSupply
  const { name, icon, description } = supply!
  const [editing, setEditing] = useState(false)
  const onEdit = useCallback(() => {
    setEditing(true)
  }, [setEditing])
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
          {editing
            ? <QuantityInput name={`campaignSupplies[${index}]quantity`} max={campaignSupply.quantityNeeded} />
            : <div> <Button theme='secondary' onClick={onEdit}>Editar</Button></div>}
        </div>

      </RoundedCard>
    </div>)
}

SupplyConfirm.fragments = gql`
fragment SupplyConfirmFragment on CampaignSupply {
supply {
    name
    id
    description
    icon
}
quantityNeeded
quantitySupplied

}
`
