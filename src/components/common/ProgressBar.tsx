import React from 'react'
import classNames from 'classnames'

export const ProgressBar = ({ percentage }) => (
  <div className='w-full flex'>
    <div className='bg-yellow-100 h-4 rounded-full' style={{ width: `${percentage}%` }} />
    <div className={classNames('bg-grey-500 h-4 rounded-full flex-grow', { 'ml-2': percentage > 0 })} />
  </div>)
