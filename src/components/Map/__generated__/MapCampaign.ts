/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MapCampaign
// ====================================================

export interface MapCampaign_corporation {
  __typename: "Corporation";
  latitude: number;
  longitude: number;
}

export interface MapCampaign {
  __typename: "Campaign";
  corporation: MapCampaign_corporation;
}
