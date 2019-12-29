import React, { ReactNode } from 'react'

interface Props {
    height: number,
    overlay?: boolean,
    icon?: () => ReactNode,
}

export const MapPanel: React.FC<Props> = ({ children, height, overlay, icon }) => {
  return (
    <div className='absolute z-10 w-full' style={{ top: `${height}vh`, height: `${100 - height}vh` }}>
      {overlay && <div className='h-full absolute w-full z-1 left-0 opacity-50 bg-grey-900' style={{ top: `-${height}vh` }} />}

      {icon &&
        <div className='absolute z-10 left-0' style={{ top: `-${height}vh` }}>
          {icon()}
        </div>}

      <div className='overflow-scroll z-4 relative p-6 rounded-t-lg bg-grey-100'>
        {children}
      </div>
    </div>
  )
}

export default MapPanel
