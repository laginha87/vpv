import { gql } from 'apollo-boost'
import React, { useCallback, useState } from 'react'
import { Icon, QuantityInput } from '~components/common'
import { FCWithFragment } from '~store/types'
import { SupplyInputFragment } from './__generated__/SupplyInputFragment'

export const SupplyInput: FCWithFragment<{ campaignSupply: SupplyInputFragment, index: number }> = ({ campaignSupply: { quantityNeeded, quantitySupplied, supply }, index }) => {
  const quantityLimit = quantityNeeded! - quantitySupplied!
  const [active, setActive] = useState(false)
  const toggleActive = useCallback(() => {
    setActive(!active)
  }, [setActive, active])
  const { name, icon } = supply!
  return (
    <div>
      <div className='flex items-center'>
        <div onClick={toggleActive} className='w-5 h-5 mr-4 cursor-pointer'>
          <Icon icon={active ? 'active' : 'inactive'} />
        </div>
        <div className='mr-2'>
          <Icon icon={icon as any} w={10} bg='grey-300' rounded='default' />
        </div>
        <div>
          <div className='font-semibold text-grey-900'>{name}</div>
          <div className='font-medium text-xs text-grey-800'>Até {quantityLimit} {name}</div>
        </div>

      </div>
      {active &&
        <div className='flex mt-4 select-none'>
          <div className='w-5 mr-4' /> <QuantityInput name={`campaignSupplies[${index}]quantity`} max={quantityLimit} />
        </div>}
    </div>)
}

SupplyInput.fragments = gql`fragment SupplyInputFragment on CampaignSupply {
     quantityNeeded
     quantitySupplied
     supply {
         name
         icon
         id
     }
}`
