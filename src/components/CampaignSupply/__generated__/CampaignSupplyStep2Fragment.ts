/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep2Fragment
// ====================================================

export interface CampaignSupplyStep2Fragment_corporation {
  __typename: "Corporation";
  name: string;
}

export interface CampaignSupplyStep2Fragment_campaignSupplies_supply {
  __typename: "Supply";
  name: string;
  id: string;
  description: string;
  icon: string;
}

export interface CampaignSupplyStep2Fragment_campaignSupplies {
  __typename: "CampaignSupply";
  supply: CampaignSupplyStep2Fragment_campaignSupplies_supply;
  quantityNeeded: number;
  quantitySupplied: number;
}

export interface CampaignSupplyStep2Fragment {
  __typename: "Campaign";
  corporation: CampaignSupplyStep2Fragment_corporation;
  campaignSupplies: CampaignSupplyStep2Fragment_campaignSupplies[];
}
