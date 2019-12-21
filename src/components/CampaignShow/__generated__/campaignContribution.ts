/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: campaignContribution
// ====================================================

export interface campaignContribution_campaignContribution_campaign_corporation {
  __typename: "Corporation";
  name: string | null;
}

export interface campaignContribution_campaignContribution_campaign {
  __typename: "Campaign";
  corporation: campaignContribution_campaignContribution_campaign_corporation | null;
}

export interface campaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply_supply {
  __typename: "Supply";
  name: string | null;
  icon: string | null;
}

export interface campaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply {
  __typename: "CampaignSupply";
  supply: campaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply_supply | null;
}

export interface campaignContribution_campaignContribution_campaignContributionSupplies {
  __typename: "CampaignContributionSupply";
  id: string | null;
  quantity: number | null;
  campaignSupply: campaignContribution_campaignContribution_campaignContributionSupplies_campaignSupply | null;
}

export interface campaignContribution_campaignContribution {
  __typename: "CampaignContribution";
  campaign: campaignContribution_campaignContribution_campaign | null;
  campaignContributionSupplies: campaignContribution_campaignContribution_campaignContributionSupplies[] | null;
}

export interface campaignContribution {
  /**
   * An example field added by the generator
   */
  campaignContribution: campaignContribution_campaignContribution;
}

export interface campaignContributionVariables {
  id: string;
}
