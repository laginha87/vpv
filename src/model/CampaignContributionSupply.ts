import { CampaignSupply } from './CampaignSupply'
import { Model } from './Model'

export interface CampaignContributionSupplyBasic extends Model {
  quantity: number;
}

export interface CampaignContributionSupply extends CampaignContributionSupplyBasic {
  campaignSupply: CampaignSupply;
}
