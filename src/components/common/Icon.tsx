import React from 'react'
import { Icons } from '../../assets/icons'
import classNames from 'classnames'

export const ICON_NAMES = ['inactive', 'active', 'add', 'arrowLeft', 'bottle', 'chocolate', 'close', 'deleteIcon', 'directions', 'hands', 'house', 'meal', 'people', 'remove', 'chevronRight'] as const
type IconNames = typeof ICON_NAMES[number];

const IconImages: { [k in IconNames]: string } = Icons

interface IconProps {
  icon: IconNames,
  size?: 10 | 6 | 4
  background?: 'grey-300'
  rounded?: boolean
}
export const Icon = ({ size = 4, icon, background, rounded = false }: IconProps) => {
  return (
    <div className='inline-block'>
      <img className={classNames(`h-${size} w-${size}`, { rounded, [`bg-${background}`]: background })} src={IconImages[icon]} alt='' />
    </div>)
}
