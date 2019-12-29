/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindCampaign
// ====================================================

export interface FindCampaign_campaign_campaignSupplies_supply {
  __typename: "Supply";
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface FindCampaign_campaign_campaignSupplies {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number;
  quantitySupplied: number;
  supply: FindCampaign_campaign_campaignSupplies_supply;
}

export interface FindCampaign_campaign_corporation {
  __typename: "Corporation";
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface FindCampaign_campaign {
  __typename: "Campaign";
  id: string;
  campaignSupplies: FindCampaign_campaign_campaignSupplies[];
  corporation: FindCampaign_campaign_corporation;
  endDatetime: any;
}

export interface FindCampaign_fires {
  __typename: "Fire";
  id: string;
  latitude: number;
  longitude: number;
}

export interface FindCampaign_campaigns_corporation {
  __typename: "Corporation";
  id: string;
  latitude: number;
  longitude: number;
}

export interface FindCampaign_campaigns {
  __typename: "Campaign";
  id: string;
  corporation: FindCampaign_campaigns_corporation;
}

export interface FindCampaign {
  /**
   * An example field added by the generator
   */
  campaign: FindCampaign_campaign;
  /**
   * An example field added by the generator
   */
  fires: FindCampaign_fires[];
  /**
   * An example field added by the generator
   */
  campaigns: FindCampaign_campaigns[];
}

export interface FindCampaignVariables {
  id: string;
}
