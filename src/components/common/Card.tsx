import React, { FC } from 'react'

export const Card: FC = (props) => (
  <div className='shadow-lg'>
    {props.children}
  </div>)
