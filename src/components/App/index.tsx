import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CampaignShowScreen from '~components/CampaignShow/CampaignShowScreen'
import { CampaignContributionScreen } from '~components/CampaignSupply/CampaignContributionScreen'
import CampaignSupplyComponent from '~components/CampaignSupply/CampaignSupplyScreen'
import Home from '~components/Home'
import { MapProvider } from '~components/Map/MapProvider'

export const App = () => {
  return (
    <MapProvider>
      <BrowserRouter>
        <Route path='/campaign_contribution/:id' component={CampaignContributionScreen} />
        <Route path='/campaigns/:id/supply' component={CampaignSupplyComponent} />
        <Route path='/campaigns/:id' component={CampaignShowScreen} exact />
        <Route path='/' component={Home} exact />
      </BrowserRouter>
    </MapProvider>
  )
}
