import React, { useCallback } from 'react'
import { useFormikContext } from 'formik'
import { Button } from './Button'
import { Icon } from './Icon'
import { get } from 'lodash-es'

interface Props {
    name: string,
    max: number;

}

export const QuantityInput: React.FC<Props> = ({ name, max }) => {
  const { setFieldValue, values } = useFormikContext<any>()
  const value = get(values, name)

  const onInc = useCallback(
    () => {
      if (value < max) {
        setFieldValue(name, value + 1)
      }
    },
    [value, max]
  )

  const onDec = useCallback(
    () => {
      if (value > 0) {
        setFieldValue(name, value - 1)
      }
    },
    [value, max]
  )

  return (
    <div className='flex mt-4 select-none'>
      <div className='w-5 mr-4' />
      <div className='flex w-full'>
        <div className='w-1/3'>
          <Button theme='secondary' onClick={onDec}>
            <div className='flex items-center justify-center'>
              <Icon icon='remove' />
            </div>
          </Button>
        </div>
        <div className='w-1/3 mx-2 rounded border-2 border-black flex items-center justify-center'>{value}</div>
        <div className='w-1/3'>
          <Button theme='secondary' onClick={onInc}>
            <div className='flex items-center justify-center'>
              <Icon icon='add' />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
