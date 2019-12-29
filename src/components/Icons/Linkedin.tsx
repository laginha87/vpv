import React from 'react'
import { COLORS, TailwindColor } from '~styles'

export default function Linkedin ({ fill, ...props }: { fill: TailwindColor }) {
  return (
    <svg viewBox='0 0 21 20' fill='none' {...props}>
      <path
        d='M4.33 2.174c0 1.2-.965 2.174-2.156 2.174A2.165 2.165 0 01.017 2.174C.017.974.983 0 2.174 0S4.33.974 4.33 2.174zm.018 3.913H0V20h4.348V6.087zm6.94 0h-4.32V20h4.322v-7.303c0-4.061 5.242-4.394 5.242 0V20h4.338v-8.81c0-6.852-7.759-6.602-9.581-3.23V6.088z'
        fill={COLORS[fill]}
      />
    </svg>
  )
}
