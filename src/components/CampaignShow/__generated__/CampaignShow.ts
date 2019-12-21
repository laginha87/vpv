/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CampaignShow
// ====================================================

export interface CampaignShow_campaign_corporation {
  __typename: "Corporation";
  name: string | null;
}

export interface CampaignShow_campaign_campaignSupplies_supply {
  __typename: "Supply";
  name: string | null;
}

export interface CampaignShow_campaign_campaignSupplies {
  __typename: "CampaignSupply";
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: CampaignShow_campaign_campaignSupplies_supply | null;
}

export interface CampaignShow_campaign {
  __typename: "Campaign";
  corporation: CampaignShow_campaign_corporation | null;
  campaignSupplies: CampaignShow_campaign_campaignSupplies[] | null;
}

export interface CampaignShow_campaigns_corporation {
  __typename: "Corporation";
  latitude: number | null;
  longitude: number | null;
}

export interface CampaignShow_campaigns {
  __typename: "Campaign";
  corporation: CampaignShow_campaigns_corporation | null;
}

export interface CampaignShow_fires {
  __typename: "Fire";
  latitude: number | null;
  longitude: number | null;
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
