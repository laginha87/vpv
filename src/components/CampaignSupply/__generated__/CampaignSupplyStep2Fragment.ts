/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep2Fragment
// ====================================================

export interface CampaignSupplyStep2Fragment_corporation {
  __typename: "Corporation";
  id: string;
  name: string;
}

export interface CampaignSupplyStep2Fragment_campaignSupplies_supply {
  __typename: "Supply";
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface CampaignSupplyStep2Fragment_campaignSupplies {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignSupplyStep2Fragment_campaignSupplies_supply;
}

export interface CampaignSupplyStep2Fragment {
  __typename: "Campaign";
  id: string;
  corporation: CampaignSupplyStep2Fragment_corporation;
  campaignSupplies: CampaignSupplyStep2Fragment_campaignSupplies[];
}
