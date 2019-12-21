/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindCampaign
// ====================================================

export interface FindCampaign_campaign_corporation {
  __typename: "Corporation";
  name: string | null;
}

export interface FindCampaign_campaign {
  __typename: "Campaign";
  id: string;
  corporation: FindCampaign_campaign_corporation | null;
}

export interface FindCampaign {
  /**
   * An example field added by the generator
   */
  campaign: FindCampaign_campaign;
}
