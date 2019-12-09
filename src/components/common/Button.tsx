import React from 'react'
import classNames from 'classnames'
export const BUTTON_TYPES = ['primary', 'secondary'] as const
type ButtonTheme = typeof BUTTON_TYPES[number];

const THEME_STYLES: { [k in ButtonTheme]: string } = {
  primary: 'bg-black text-white font-book text-xl',
  secondary: 'bg-grey-300'
}

const DISABLED_THEME_STYLES: { [k in ButtonTheme]: string } = {
  primary: 'bg-black text-white font-book text-xl opacity-25',
  secondary: 'bg-grey-300'
}

interface ButtonProps {
  theme: ButtonTheme,
  children: any,
  disabled?: boolean,
  onClick?: () => void,
  type?: 'button' | 'submit'
}

const BASE_STYLE = 'cursor-pointer text-center p-3 rounded-lg w-full'
export const Button = ({ theme, children, disabled, ...rest }: ButtonProps) =>
  <button {...rest} className={classNames(BASE_STYLE, [disabled ? DISABLED_THEME_STYLES[theme] : THEME_STYLES[theme]])}>{children}</button>
