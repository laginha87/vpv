/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Map
// ====================================================

export interface Map_fires {
  __typename: "Fire";
  latitude: number | null;
  longitude: number | null;
}

export interface Map_campaigns_corporation {
  __typename: "Corporation";
  latitude: number | null;
  longitude: number | null;
}

export interface Map_campaigns {
  __typename: "Campaign";
  corporation: Map_campaigns_corporation | null;
}

export interface Map {
  /**
   * An example field added by the generator
   */
  fires: Map_fires[];
  /**
   * An example field added by the generator
   */
  campaigns: Map_campaigns[];
}
