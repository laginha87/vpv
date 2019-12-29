/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SupplyInputFragment
// ====================================================

export interface SupplyInputFragment_supply {
  __typename: "Supply";
  id: string;
  name: string;
  icon: string;
}

export interface SupplyInputFragment {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number;
  quantitySupplied: number;
  supply: SupplyInputFragment_supply;
}
