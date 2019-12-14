import React, { FC } from 'react'

export const Card: FC = (props) => (
  <div className='bg-white shadow-lg p-6'>
    {props.children}
  </div>)

export const RoundedCard: FC = ({ children }) => (
  <div className='bg-white rounded-lg p-4'>
    {children}
  </div>
)

export const BottomCard: FC = ({ children }) => (
  <div className='fixed bottom-0 w-full -mx-6'>
    <Card>
      {children}
    </Card>
  </div>

)

BottomCard.displayName = 'BottomCard'
Card.displayName = 'Card'
RoundedCard.displayName = 'RoundedCard'
