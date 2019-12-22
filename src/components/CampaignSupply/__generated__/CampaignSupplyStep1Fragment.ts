/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep1Fragment
// ====================================================

export interface CampaignSupplyStep1Fragment_corporation {
  __typename: "Corporation";
  name: string;
  latitude: number;
  longitude: number;
}

export interface CampaignSupplyStep1Fragment_campaignSupplies_supply {
  __typename: "Supply";
  name: string;
  icon: string;
  id: string;
}

export interface CampaignSupplyStep1Fragment_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignSupplyStep1Fragment_campaignSupplies_supply;
}

export interface CampaignSupplyStep1Fragment {
  __typename: "Campaign";
  id: string;
  corporation: CampaignSupplyStep1Fragment_corporation;
  campaignSupplies: CampaignSupplyStep1Fragment_campaignSupplies[];
}
