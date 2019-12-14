import React, { FC } from 'react'
import { Icons } from '../../assets/icons'
import classNames from 'classnames'

export const ICON_NAMES = ['inactive', 'active', 'add', 'arrowLeft', 'bottle', 'chocolate', 'close', 'deleteIcon', 'directions', 'hands', 'house', 'meal', 'people', 'remove', 'chevronRight'] as const
export type IconName = typeof ICON_NAMES[number];

const IconImages: { [k in IconName]: FC } = Icons

interface IconProps {
  icon: IconName,
  size?: 10 | 6 | 4
  background?: 'grey-300' | 'black'
  rounded?: boolean
  padding?: 0 | 2,
  fill?: 'white'
}
export const Icon = ({ size = 4, icon, background, rounded = false, padding = 0, fill = 'white' }: IconProps) => {
  const Component = IconImages[icon]
  return (
    <div className='inline-block'>
      <Component style={{ fill }} className={classNames(`h-${size} w-${size}`, { rounded, [`bg-${background}`]: background, [`p-${padding}`]: padding > 0 })} />
    </div>)
}
