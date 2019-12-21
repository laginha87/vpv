/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep1
// ====================================================

export interface CampaignSupplyStep1_corporation {
  __typename: "Corporation";
  name: string | null;
  latitude: number | null;
  longitude: number | null;
}

export interface CampaignSupplyStep1_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
  icon: string | null;
  id: string | null;
}

export interface CampaignSupplyStep1_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: CampaignSupplyStep1_campaignSupplies_supply | null;
}

export interface CampaignSupplyStep1 {
  __typename: "Campaign";
  corporation: CampaignSupplyStep1_corporation | null;
  campaignSupplies: CampaignSupplyStep1_campaignSupplies[] | null;
}
