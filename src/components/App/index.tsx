import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home'
import CampaignShowComponent from '../Campaign/CampaignShowComponent'

export const App = () => {
  return (
    <BrowserRouter>
      <Route path='/campaigns/:id' component={CampaignShowComponent} />
      <Route path='/' component={Home} exact />
    </BrowserRouter>
  )
}
