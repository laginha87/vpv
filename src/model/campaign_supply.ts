import { ModelDefinition } from '@orbit/data'

export const CAMPAIGN_SUPPLY_SCHEMA : ModelDefinition = {
  attributes: {
    quantityNeeded: { type: 'number' },
    quantitySupplied: { type: 'number' }
  },
  relationships: {
    campaign: { type: 'hasOne', model: 'campaign', inverse: 'campaignSupplies' },
    supply: { type: 'hasOne', model: 'supply', inverse: 'campaignSupplies' }
  }
}
