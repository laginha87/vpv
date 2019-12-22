import React from 'react'
import classNames from 'classnames'
import { TailwindMargin, tailwindClassNames, TailwindProps } from '~styles';
export const BUTTON_TYPES = ['primary', 'secondary', 'link'] as const

type ButtonTheme = typeof BUTTON_TYPES[number];

const THEME_STYLES: { [k in ButtonTheme]: string } = {
  primary: 'bg-black text-white font-book text-xl',
  secondary: 'bg-grey-300',
  link: 'text-grey-500'
}

const DISABLED_THEME_STYLES: { [k in ButtonTheme]: string } = {
  primary: 'bg-black text-white font-book text-xl opacity-25',
  secondary: 'bg-grey-100',
  link: 'text-grey-200'
}

interface ButtonProps extends TailwindProps<never, 'mt'|'w'>{
  theme: ButtonTheme,
  children: any,
  disabled?: boolean,
  onClick?: () => void,
  type?: 'button' | 'submit'
}

const BASE_STYLE = 'cursor-pointer text-center p-3 rounded-lg w-full'
export const Button = ({ theme, children, disabled, onClick, type, ...rest }: ButtonProps) =>
  <button type={type} onClick={disabled ? () => { } : onClick} className={tailwindClassNames(rest, BASE_STYLE, [disabled ? DISABLED_THEME_STYLES[theme] : THEME_STYLES[theme]])}>{children}</button>
