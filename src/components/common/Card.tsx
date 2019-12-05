import React, { FC } from 'react'

export const Card: FC = (props) => (
  <div className='bg-white shadow-lg p-6'>
    {props.children}
  </div>)
