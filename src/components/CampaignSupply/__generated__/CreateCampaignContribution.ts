/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateCampaignContributionInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCampaignContribution
// ====================================================

export interface CreateCampaignContribution_createCampaignContribution_campaignContribution {
  __typename: "CampaignContribution";
  id: string;
}

export interface CreateCampaignContribution_createCampaignContribution {
  __typename: "CreateCampaignContributionPayload";
  campaignContribution: CreateCampaignContribution_createCampaignContribution_campaignContribution;
}

export interface CreateCampaignContribution {
  createCampaignContribution: CreateCampaignContribution_createCampaignContribution | null;
}

export interface CreateCampaignContributionVariables {
  input: CreateCampaignContributionInput;
}
