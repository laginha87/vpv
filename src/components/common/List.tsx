import React from 'react'

export const List = ({ collection, render }: { collection: any[], render: any }) => (
  <div>{
    collection && collection.map((e, index) => (
      <div className='py-4 border-b border-grey-200' key={index}> {render(e, index)}</div>
    ))
  }
  </div>
)
