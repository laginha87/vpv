import React from 'react'
export const BUTTON_TYPES = ['primary'] as const
type ButtonTheme = typeof BUTTON_TYPES[number];

const THEME_STYLES : {[k in ButtonTheme]: string } = {
  primary: 'bg-black text-white font-book text-xl'
}

const DISABLED_THEME_STYLES : {[k in ButtonTheme]: string } = {
  primary: 'bg-black text-white font-book text-xl opacity-25'
}

interface ButtonProps {
    theme: ButtonTheme,
    children: any,
    disabled?: boolean,
}
const BASE_STYLE = 'text-center px-18 py-3 rounded-lg'
export const Button = (props : ButtonProps) =>
  <div className={[props.disabled ? DISABLED_THEME_STYLES[props.theme] : THEME_STYLES[props.theme], BASE_STYLE].join(' ')}>{props.children}</div>
