/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyFields
// ====================================================

export interface CampaignSupplyFields_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
  icon: string | null;
  id: string | null;
}

export interface CampaignSupplyFields_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: CampaignSupplyFields_campaignSupplies_supply | null;
}

export interface CampaignSupplyFields {
  __typename: "Campaign";
  campaignSupplies: CampaignSupplyFields_campaignSupplies[] | null;
}
