/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyFieldsFragment
// ====================================================

export interface CampaignSupplyFieldsFragment_campaignSupplies_supply {
  __typename: "Supply";
  name: string;
  icon: string;
  id: string;
}

export interface CampaignSupplyFieldsFragment_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignSupplyFieldsFragment_campaignSupplies_supply;
}

export interface CampaignSupplyFieldsFragment {
  __typename: "Campaign";
  campaignSupplies: CampaignSupplyFieldsFragment_campaignSupplies[];
}
