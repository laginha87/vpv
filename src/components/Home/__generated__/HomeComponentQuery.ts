/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeComponentQuery
// ====================================================

export interface HomeComponentQuery_campaigns_corporation {
  __typename: "Corporation";
  latitude: number | null;
  longitude: number | null;
  name: string | null;
}

export interface HomeComponentQuery_campaigns {
  __typename: "Campaign";
  corporation: HomeComponentQuery_campaigns_corporation | null;
  endDatetime: any | null;
  completion: number | null;
  id: string;
}

export interface HomeComponentQuery_fires {
  __typename: "Fire";
  latitude: number | null;
  longitude: number | null;
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
