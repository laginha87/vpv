import fire from './flame.png'
import campaign from './campaign.png'
import marker from './marker.png'
import { Icon } from 'leaflet'

export const FireIcon = new Icon({
  iconUrl: fire,
  iconSize: [56, 72],
  iconAnchor: [28, 72]
})

export const MarkerIcon = new Icon({
  iconUrl: marker,
  iconSize: [162, 162],
  iconAnchor: [81, 81]
})

export const CampaignIcon = new Icon({
  iconUrl: campaign,
  iconSize: [102, 120],
  iconAnchor: [53, 120]
})

export const IconMap = {
  fire: FireIcon,
  campaign: CampaignIcon
}
