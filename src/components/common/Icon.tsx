import React, { FC } from 'react'
import * as Icons from '../Icons'
import classNames from 'classnames'

export const ICON_NAMES = ['inactive', 'active', 'add', 'arrowLeft', 'bottle', 'chocolate', 'close', 'deleteIcon', 'directions', 'hands', 'house', 'meal', 'people', 'remove', 'chevronRight'] as const
export type IconName = typeof ICON_NAMES[number];

const IconImages: { [k in IconName]: FC } = Icons as any

interface IconProps {
  icon: IconName,
  size?: 10 | 8 | 6 | 4 | 24
  background?: 'grey-300' | 'black' | 'yellow-200'
  rounded?: boolean
  padding?: 0 | 2,
  fill?: 'white' | 'yellow-300',
  circle?: boolean
}
export const Icon = ({ size = 4, icon, background, rounded = false, circle = false, padding = 0, fill = 'white' }: IconProps) => {
  const Component = IconImages[icon]
  return (
    <div className={classNames('inline-block', { 'rounded-full': circle, rounded, [`bg-${background}`]: background, [`p-${padding}`]: padding > 0 })}>
      <Component fill={fill} className={classNames(`h-${size} w-${size}`)} />
    </div>)
}
