import classNames from 'classnames'
import React, { FC } from 'react'
import * as Icons from '~components/Icons'
import { tailwindClassNames, TailwindColor, TailwindProps } from '~styles'

export const ICON_NAMES = ['inactive', 'active', 'add', 'arrowLeft', 'bottle', 'chocolate', 'close', 'deleteIcon', 'directions', 'hands', 'house', 'meal', 'people', 'remove', 'chevronRight'] as const
export type IconName = typeof ICON_NAMES[number];

const IconImages: { [k in IconName]: FC<{ fill: TailwindColor, className: string }> } = Icons as any

interface IconProps extends Partial<TailwindProps<'p' | 'w' | 'bg' | 'rounded'|'m'|'mr'>> {
  icon: IconName,
  fill?: TailwindColor,
  onClick?: () => void,
}
export const Icon = ({ icon, fill = 'white', w = 4, onClick = () => {}, ...rest }: IconProps) => {
  const Component = IconImages[icon]
  return (
    <div onClick={onClick} className={tailwindClassNames(rest, 'inline-block')}>
      <Component fill={fill} className={classNames(`w-${w}`)} />
    </div>)
}
