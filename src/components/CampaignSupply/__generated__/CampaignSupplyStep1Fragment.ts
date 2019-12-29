/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep1Fragment
// ====================================================

export interface CampaignSupplyStep1Fragment_corporation {
  __typename: "Corporation";
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface CampaignSupplyStep1Fragment_campaignSupplies_supply {
  __typename: "Supply";
  id: string;
  name: string;
  icon: string;
}

export interface CampaignSupplyStep1Fragment_campaignSupplies {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignSupplyStep1Fragment_campaignSupplies_supply;
}

export interface CampaignSupplyStep1Fragment {
  __typename: "Campaign";
  id: string;
  corporation: CampaignSupplyStep1Fragment_corporation;
  endDatetime: any;
  campaignSupplies: CampaignSupplyStep1Fragment_campaignSupplies[];
}
