/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyFieldsFragment
// ====================================================

export interface CampaignSupplyFieldsFragment_campaignSupplies_supply {
  __typename: "Supply";
  id: string;
  name: string;
  icon: string;
}

export interface CampaignSupplyFieldsFragment_campaignSupplies {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignSupplyFieldsFragment_campaignSupplies_supply;
}

export interface CampaignSupplyFieldsFragment {
  __typename: "Campaign";
  id: string;
  endDatetime: any;
  campaignSupplies: CampaignSupplyFieldsFragment_campaignSupplies[];
}
