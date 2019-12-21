/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignStatus
// ====================================================

export interface CampaignStatus_corporation {
  __typename: "Corporation";
  name: string | null;
}

export interface CampaignStatus_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
}

export interface CampaignStatus_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: CampaignStatus_campaignSupplies_supply | null;
}

export interface CampaignStatus {
  __typename: "Campaign";
  corporation: CampaignStatus_corporation | null;
  campaignSupplies: CampaignStatus_campaignSupplies[] | null;
}
