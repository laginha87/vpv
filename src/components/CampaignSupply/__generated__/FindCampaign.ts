/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindCampaign
// ====================================================

export interface FindCampaign_campaign_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
  icon: string | null;
  id: string | null;
  description: string | null;
}

export interface FindCampaign_campaign_campaignSupplies {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: FindCampaign_campaign_campaignSupplies_supply | null;
}

export interface FindCampaign_campaign_corporation {
  __typename: "Corporation";
  name: string | null;
  latitude: number | null;
  longitude: number | null;
}

export interface FindCampaign_campaign {
  __typename: "Campaign";
  id: string;
  campaignSupplies: FindCampaign_campaign_campaignSupplies[] | null;
  corporation: FindCampaign_campaign_corporation | null;
}

export interface FindCampaign_fires {
  __typename: "Fire";
  latitude: number;
  longitude: number;
}

export interface FindCampaign_campaigns_corporation {
  __typename: "Corporation";
  latitude: number | null;
  longitude: number | null;
}

export interface FindCampaign_campaigns {
  __typename: "Campaign";
  corporation: FindCampaign_campaigns_corporation | null;
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
