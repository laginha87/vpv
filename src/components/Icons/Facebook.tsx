import React from 'react'
import { TailwindColor, COLORS } from '~styles'

export default function Facebook ({ fill, ...props }: { fill: TailwindColor }) {
  return (
    <svg viewBox='-5 0 20 20' fill='none' {...props}>
      <path
        d='M2.5 6.667H0V10h2.5v10h4.167V10h3.035L10 6.667H6.667v-1.39c0-.795.16-1.11.929-1.11H10V0H6.827C3.83 0 2.5 1.32 2.5 3.846v2.82z'
        fill={COLORS[fill]}
      />
    </svg>
  )
}
