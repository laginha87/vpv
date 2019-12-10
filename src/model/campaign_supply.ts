import { ModelDefinition } from '@orbit/data'
import { JSONRecord } from './JSONRecord'
import { Supply } from './supply'

export const CAMPAIGN_SUPPLY_SCHEMA: ModelDefinition = {
  attributes: {
    quantityNeeded: { type: 'number' },
    quantitySupplied: { type: 'number' }
  },
  relationships: {
    campaign: { type: 'hasOne', model: 'campaign', inverse: 'campaignSupplies' },
    supply: { type: 'hasOne', model: 'supply', inverse: 'campaignSupplies' }
  }
}

export interface CampaignSupply extends JSONRecord<{ quantityNeeded, quantitySupplied }, 'supply' | 'campaigns'> {
  supply: Supply
}
