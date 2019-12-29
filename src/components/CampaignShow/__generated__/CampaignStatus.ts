/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignStatus
// ====================================================

export interface CampaignStatus_corporation {
  __typename: "Corporation";
  id: string;
  name: string;
}

export interface CampaignStatus_campaignSupplies_supply {
  __typename: "Supply";
  id: string;
  name: string;
}

export interface CampaignStatus_campaignSupplies {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignStatus_campaignSupplies_supply;
}

export interface CampaignStatus {
  __typename: "Campaign";
  id: string;
  numberOfVolunteers: number;
  corporation: CampaignStatus_corporation;
  campaignSupplies: CampaignStatus_campaignSupplies[];
}
