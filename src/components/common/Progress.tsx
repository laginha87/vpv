import React from 'react'
import classNames from 'classnames'

const Bar = ({ percentage }) => (
  <div className='w-full flex'>
    <div className='bg-yellow-100 h-4 rounded-full' style={{ width: `${percentage}%` }} />
    <div className={classNames('bg-grey-500 h-4 rounded-full flex-grow', { 'ml-2': percentage > 0 })} />
  </div>)

export const Radial = ({ percentage }) => {
  const radius = 0.8
  const amplitude = percentage * 2 * Math.PI

  const endX = Math.cos(amplitude) * radius
  const endY = Math.sin(amplitude) * radius
  const largeArcFlag = percentage > 0.5 ? 1 : 0

  return (
    <svg width='15' height='15' viewBox='-1 -1 2 2' style={{ transform: 'rotate(-90deg)' }}>
      <circle stroke='#D7DADD' cy='0' cx='0' r={radius} strokeWidth='.2' fillOpacity='0' />
      <path d={`M ${radius} 0 A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`} stroke='black' strokeLinecap='round' fillOpacity='0' strokeWidth='.3' />
    </svg>)
}

export default { Radial, Bar }
