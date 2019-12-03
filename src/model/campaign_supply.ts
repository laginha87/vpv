import { ModelDefinition } from '@orbit/data'

export const CAMPAIGN_SUPPLY_SCHEMA : ModelDefinition = {
  attributes: {
    quantityNeeded: { type: 'number' },
    quantitySupplied: { type: 'number' }
  },
  relationships: {
    campaign: { type: 'hasMany', model: 'campaign', inverse: 'campaignSupplies' },
    supply: { type: 'hasMany', model: 'supply', inverse: 'campaignSupplies' }
  }
}
