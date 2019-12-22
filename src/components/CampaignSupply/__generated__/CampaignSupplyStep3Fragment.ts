/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CampaignSupplyStep3Fragment
// ====================================================

export interface CampaignSupplyStep3Fragment_corporation {
  __typename: "Corporation";
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface CampaignSupplyStep3Fragment {
  __typename: "Campaign";
  id: string;
  endDatetime: any;
  corporation: CampaignSupplyStep3Fragment_corporation;
}
