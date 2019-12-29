/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SupplyConfirmFragment
// ====================================================

export interface SupplyConfirmFragment_supply {
  __typename: "Supply";
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface SupplyConfirmFragment {
  __typename: "CampaignSupply";
  id: string;
  quantityNeeded: number;
  quantitySupplied: number;
  supply: SupplyConfirmFragment_supply;
}
