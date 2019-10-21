import fire from './flame.png'
import campaign from './campaign.png';
import marker from './marker.png';
import { Icon } from 'leaflet';

export const FireIcon = new Icon({
    iconUrl: fire,
    iconSize: [72, 72],
    iconAnchor: [72, 72],
});



export const MarkerIcon = new Icon({
    iconUrl: marker,
    iconSize: [162, 162],
    iconAnchor: [81, 81],
});

export const CampaignIcon = new Icon({
    iconUrl: campaign,
    iconSize: [126, 120],
    iconAnchor: [63, 144],
});

export const IconMap = {
    'fire': FireIcon,
    'campaign': CampaignIcon
}