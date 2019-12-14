import { CampaignSupply } from './CampaignSupply'
import { CorporationBasic } from './corporation'

export interface CampaignBasic {
  id: number,
  endDatetime: Date,
  completion: number,

}

export interface Campaign extends CampaignBasic {
  corporation: CorporationBasic,
  campaignSupplies: CampaignSupply[]

}

export const findCampaignQuery = (id) => `
  campaign(id: ${id}){
    corporation {
      name
      latitude
      longitude
    }
    campaignSupplies {
      quantityNeeded
      quantitySupplied
      supply {
        id
        name
        icon
        description
      }
    }
  }`
