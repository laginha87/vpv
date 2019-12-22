/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignContributionItemFragment
// ====================================================

export interface CampaignContributionItemFragment_campaignSupply_supply {
  __typename: "Supply";
  id: string;
  name: string;
  icon: string;
}

export interface CampaignContributionItemFragment_campaignSupply {
  __typename: "CampaignSupply";
  supply: CampaignContributionItemFragment_campaignSupply_supply;
}

export interface CampaignContributionItemFragment {
  __typename: "CampaignContributionSupply";
  id: string;
  quantity: number;
  campaignSupply: CampaignContributionItemFragment_campaignSupply;
}
