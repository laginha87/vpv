import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home'
import CampaignShowComponent from '../Campaign/CampaignShowComponent'
import CampaignSupplyComponent from '../Campaign/CampaignSupplyComponent'

export const App = () => {
  return (
    <BrowserRouter>
      <Route path='/campaigns/:id/supply' component={CampaignSupplyComponent} />
      <Route path='/campaigns/:id' component={CampaignShowComponent} exact />
      <Route path='/' component={Home} exact />
    </BrowserRouter>
  )
}
