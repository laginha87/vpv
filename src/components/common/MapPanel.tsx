import React from 'react'

interface Props {
    height: number,
}

export const MapPanel: React.FC<Props> = ({ children, height }) => {
  return (
    <div className='p-6 rounded-t-lg absolute z-10 w-full bg-grey-100' style={{ top: `${height}vh`, height: `${100 - height}vh`, overflow: 'scroll' }}>
      {children}
    </div>
  )
}

export default MapPanel
