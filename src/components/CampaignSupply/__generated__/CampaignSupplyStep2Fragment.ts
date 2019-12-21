/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep2Fragment
// ====================================================

export interface CampaignSupplyStep2Fragment_corporation {
  __typename: "Corporation";
  name: string | null;
}

export interface CampaignSupplyStep2Fragment_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
  id: string | null;
  description: string | null;
  icon: string | null;
}

export interface CampaignSupplyStep2Fragment_campaignSupplies {
  __typename: "CampaignSupply";
  supply: CampaignSupplyStep2Fragment_campaignSupplies_supply | null;
  quantityNeeded: number | null;
  quantitySupplied: number | null;
}

export interface CampaignSupplyStep2Fragment {
  __typename: "Campaign";
  corporation: CampaignSupplyStep2Fragment_corporation | null;
  campaignSupplies: CampaignSupplyStep2Fragment_campaignSupplies[] | null;
}
