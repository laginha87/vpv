/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCampaigns
// ====================================================

export interface AllCampaigns_campaigns_corporation {
  __typename: "Corporation";
  name: string | null;
}

export interface AllCampaigns_campaigns {
  __typename: "Campaign";
  id: string;
  endDatetime: any | null;
  completion: number | null;
  corporation: AllCampaigns_campaigns_corporation | null;
}

export interface AllCampaigns {
  /**
   * An example field added by the generator
   */
  campaigns: AllCampaigns_campaigns[];
}
