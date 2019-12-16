
import { SupplyBasic } from './Supply'
import { CampaignBasic } from './Campaign'
import { Model } from './Model'

export interface CampaignSupplyBasic extends Model {
  quantityNeeded: number;
  quantitySupplied: number;
}

export interface CampaignSupply extends CampaignSupplyBasic {
  supply: SupplyBasic;
  campaign: CampaignBasic
}
