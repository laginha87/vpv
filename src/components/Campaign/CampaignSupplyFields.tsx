import React, { FC, useState, useCallback } from 'react'
import Progress from '../common/Progress'
import { Button } from '../common/Button'
import { Icon } from '../common/Icon'
import { Card } from '../common/Card'
import { List } from '../common/List'

const SupplyInput = ({ campaignSupply: { attributes: { quantityNeeded, quantitySupplied }, supply } }) => {
  const quantityLimit = quantityNeeded - quantitySupplied

  const [active, setActive] = useState(false)
  const toggleActive = useCallback(
    () => {
      setActive(!active)
    },
    [setActive, active]
  )

  let name, icon

  if (supply && supply.attributes) {
    ({ name, icon } = supply.attributes)
  }

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
      {active &&
        <div className='flex mt-4'>
          <div className='w-5 mr-4' />
          <div className='flex w-full'>
            <div className='w-1/3'>
              <Button theme='secondary'>
                <div className='flex items-center justify-center'>
                  <Icon icon='remove' />
                </div>
              </Button>
            </div>
            <div className='w-1/3 mx-2 rounded border-2 border-black flex items-center justify-center'>2</div>
            <div className='w-1/3'>
              <Button theme='secondary'>
                <div className='flex items-center justify-center'>
                  <Icon icon='add' />
                </div>
              </Button>
            </div>
          </div>
        </div>}
    </div>)
}
export const CampaignSupplyFields: FC = ({ campaign }) => {
  return (
    <>
      <div>
        <div className='text-center mb-5 text-grey-900 font-bold'>Seleciona os donativos da tua contribuição</div>
        <div className='text-center mb-8 text-grey-800 text-sm'>Podes escolher todos ou parte dos produtos que ainda faltam.</div>
        <List collection={campaign && campaign.campaignSupplies} render={(e) => (<SupplyInput campaignSupply={e as any} key={e.id} />)} />
      </div>
      <div className='absolute bottom-0 w-full -mx-6'>
        <Card>
          <div className='flex justify-between mb-4 font-semibold'>
            <div className='flex items-center'>
              <Progress.Radial percentage={0.5} />

              <div className='ml-1'>Até ás 20h00</div>
            </div>
            <a className='text-grey-800'>Partilhar esta campanha</a>
          </div>
          <Button theme='primary'>Confirmar Quantidades <Icon icon='cenas' /></Button>
        </Card>
      </div>
    </>
  )
}
