/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindCampaignContribution
// ====================================================

export interface FindCampaignContribution_campaignContribution_campaign_corporation {
  __typename: "Corporation";
  id: string;
  name: string;
}

export interface FindCampaignContribution_campaignContribution_campaign {
  __typename: "Campaign";
  id: string;
  corporation: FindCampaignContribution_campaignContribution_campaign_corporation;
}

export interface FindCampaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply_supply {
  __typename: "Supply";
  id: string;
  name: string;
  icon: string;
}

export interface FindCampaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply {
  __typename: "CampaignSupply";
  supply: FindCampaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply_supply;
}

export interface FindCampaignContribution_campaignContribution_campaignContributionSupplies {
  __typename: "CampaignContributionSupply";
  id: string;
  quantity: number;
  campaignSupply: FindCampaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply;
}

export interface FindCampaignContribution_campaignContribution {
  __typename: "CampaignContribution";
  id: string;
  campaign: FindCampaignContribution_campaignContribution_campaign;
  campaignContributionSupplies: FindCampaignContribution_campaignContribution_campaignContributionSupplies[];
}

export interface FindCampaignContribution {
  /**
   * An example field added by the generator
   */
  campaignContribution: FindCampaignContribution_campaignContribution;
}

export interface FindCampaignContributionVariables {
  id: string;
}
