import React from 'react'

export const List = ({ collection, render }: { collection: any[], render: any }) => (
  <div>{
    collection && collection.map((e, index) => (
      <div className='py-4 border-b border-grey-400' key={index}> {render(e, index)}</div>
    ))
  }
  </div>
)
