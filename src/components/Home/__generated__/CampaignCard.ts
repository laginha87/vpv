/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignCard
// ====================================================

export interface CampaignCard_corporation {
  __typename: "Corporation";
  name: string | null;
}

export interface CampaignCard {
  __typename: "Campaign";
  endDatetime: any | null;
  completion: number | null;
  id: string;
  corporation: CampaignCard_corporation | null;
}
