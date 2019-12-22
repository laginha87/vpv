/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SupplyConfirmFragment
// ====================================================

export interface SupplyConfirmFragment_supply {
  __typename: "Supply";
  name: string;
  id: string;
  description: string;
  icon: string;
}

export interface SupplyConfirmFragment {
  __typename: "CampaignSupply";
  supply: SupplyConfirmFragment_supply;
  quantityNeeded: number;
  quantitySupplied: number;
}
