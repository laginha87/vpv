/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SupplyInputFragment
// ====================================================

export interface SupplyInputFragment_supply {
  __typename: "Supply";
  name: string;
  icon: string;
  id: string;
}

export interface SupplyInputFragment {
  __typename: "CampaignSupply";
  quantityNeeded: number;
  quantitySupplied: number;
  supply: SupplyInputFragment_supply;
}
