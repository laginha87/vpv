
import { SupplyBasic } from './Supply'
import { CampaignBasic } from './Campaign'

export interface CampaignSupplyBasic {
  quantityNeeded: number;
  quantitySupplied: number;
}

export interface CampaignSupply extends CampaignSupplyBasic {
  supply: SupplyBasic;
  campaign: CampaignBasic
}
