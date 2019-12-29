/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignCard
// ====================================================

export interface CampaignCard_corporation {
  __typename: "Corporation";
  id: string;
  name: string;
}

export interface CampaignCard {
  __typename: "Campaign";
  id: string;
  endDatetime: any;
  completion: number;
  numberOfVolunteers: number;
  corporation: CampaignCard_corporation;
}
