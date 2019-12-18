import { Campaign } from './Campaign'
import { Model } from './Model'
import { User } from './User'
import { CampaignContributionSupply } from './CampaignContributionSupply'

export interface CampaignContributionBasic extends Model {
}

export interface CampaignContribution extends CampaignContributionBasic {
  campaign: Campaign;
  user: User;
  campaignContributionSupplies: CampaignContributionSupply[];
}
