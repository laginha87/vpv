/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CampaignShow
// ====================================================

export interface CampaignShow_campaign_corporation {
  __typename: "Corporation";
  name: string;
}

export interface CampaignShow_campaign_campaignSupplies_supply {
  __typename: "Supply";
  name: string;
}

export interface CampaignShow_campaign_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number;
  quantitySupplied: number;
  supply: CampaignShow_campaign_campaignSupplies_supply;
}

export interface CampaignShow_campaign {
  __typename: "Campaign";
  corporation: CampaignShow_campaign_corporation;
  campaignSupplies: CampaignShow_campaign_campaignSupplies[];
}

export interface CampaignShow_campaigns_corporation {
  __typename: "Corporation";
  latitude: number;
  longitude: number;
}

export interface CampaignShow_campaigns {
  __typename: "Campaign";
  corporation: CampaignShow_campaigns_corporation;
}

export interface CampaignShow_fires {
  __typename: "Fire";
  latitude: number;
  longitude: number;
}

export interface CampaignShow {
  /**
   * An example field added by the generator
   */
  campaign: CampaignShow_campaign;
  /**
   * An example field added by the generator
   */
  campaigns: CampaignShow_campaigns[];
  /**
   * An example field added by the generator
   */
  fires: CampaignShow_fires[];
}

export interface CampaignShowVariables {
  id: string;
}
