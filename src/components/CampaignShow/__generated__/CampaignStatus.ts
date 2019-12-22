/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignStatus
// ====================================================

export interface CampaignStatus_corporation {
  __typename: "Corporation";
  name: string;
}

export interface CampaignStatus_campaignSupplies_supply {
  __typename: "Supply";
  name: string;
}

export interface CampaignStatus_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignStatus_campaignSupplies_supply;
}

export interface CampaignStatus {
  __typename: "Campaign";
  corporation: CampaignStatus_corporation;
  campaignSupplies: CampaignStatus_campaignSupplies[];
}
