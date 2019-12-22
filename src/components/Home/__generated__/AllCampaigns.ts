/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCampaigns
// ====================================================

export interface AllCampaigns_campaigns_corporation {
  __typename: "Corporation";
  name: string;
}

export interface AllCampaigns_campaigns {
  __typename: "Campaign";
  id: string;
  endDatetime: any;
  completion: number;
  corporation: AllCampaigns_campaigns_corporation;
}

export interface AllCampaigns {
  /**
   * An example field added by the generator
   */
  campaigns: AllCampaigns_campaigns[];
}
