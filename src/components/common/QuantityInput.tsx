import { useFormikContext } from 'formik'
import { get } from 'lodash-es'
import React, { useCallback } from 'react'
import { Button } from '~components/common/Button'
import { Icon } from '~components/common/Icon'

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
    <div className='flex w-full select-none'>
      <div className='w-1/3'>
        <Button theme='secondary' onClick={onDec}>
          <div className='flex items-center justify-center'>
            <Icon icon='remove' />
          </div>
        </Button>
      </div>
      <div className='w-1/3 mx-2 rounded border-2 border-grey-500 flex items-center justify-center'>{value}</div>
      <div className='w-1/3'>
        <Button theme='secondary' onClick={onInc}>
          <div className='flex items-center justify-center'>
            <Icon icon='add' />
          </div>
        </Button>
      </div>
    </div>
  )
}
