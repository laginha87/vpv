/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep1Fragment
// ====================================================

export interface CampaignSupplyStep1Fragment_corporation {
  __typename: "Corporation";
  name: string | null;
  latitude: number | null;
  longitude: number | null;
}

export interface CampaignSupplyStep1Fragment_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
  icon: string | null;
  id: string | null;
}

export interface CampaignSupplyStep1Fragment_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: CampaignSupplyStep1Fragment_campaignSupplies_supply | null;
}

export interface CampaignSupplyStep1Fragment {
  __typename: "Campaign";
  corporation: CampaignSupplyStep1Fragment_corporation | null;
  campaignSupplies: CampaignSupplyStep1Fragment_campaignSupplies[] | null;
}
