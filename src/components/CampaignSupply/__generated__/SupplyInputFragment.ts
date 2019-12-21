/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SupplyInputFragment
// ====================================================

export interface SupplyInputFragment_supply {
  __typename: "Supply";
  name: string | null;
  icon: string | null;
  id: string | null;
}

export interface SupplyInputFragment {
  __typename: "CampaignSupply";
  quantityNeeded: number | null;
  quantitySupplied: number | null;
  supply: SupplyInputFragment_supply | null;
}
