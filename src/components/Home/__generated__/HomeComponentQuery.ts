/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeComponentQuery
// ====================================================

export interface HomeComponentQuery_campaigns_corporation {
  __typename: "Corporation";
  latitude: number;
  longitude: number;
  name: string;
}

export interface HomeComponentQuery_campaigns {
  __typename: "Campaign";
  corporation: HomeComponentQuery_campaigns_corporation;
  endDatetime: any;
  completion: number;
  id: string;
}

export interface HomeComponentQuery_fires {
  __typename: "Fire";
  latitude: number;
  longitude: number;
}

export interface HomeComponentQuery {
  /**
   * An example field added by the generator
   */
  campaigns: HomeComponentQuery_campaigns[];
  /**
   * An example field added by the generator
   */
  fires: HomeComponentQuery_fires[];
}
