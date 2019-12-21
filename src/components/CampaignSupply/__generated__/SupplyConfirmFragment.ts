/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SupplyConfirmFragment
// ====================================================

export interface SupplyConfirmFragment_supply {
  __typename: "Supply";
  name: string | null;
  id: string | null;
  description: string | null;
  icon: string | null;
}

export interface SupplyConfirmFragment {
  __typename: "CampaignSupply";
  supply: SupplyConfirmFragment_supply | null;
  quantityNeeded: number | null;
  quantitySupplied: number | null;
}
