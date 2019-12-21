/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyFieldsFragment
// ====================================================

export interface CampaignSupplyFieldsFragment_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
  icon: string | null;
  id: string | null;
}

export interface CampaignSupplyFieldsFragment_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: CampaignSupplyFieldsFragment_campaignSupplies_supply | null;
}

export interface CampaignSupplyFieldsFragment {
  __typename: "Campaign";
  campaignSupplies: CampaignSupplyFieldsFragment_campaignSupplies[] | null;
}
