import { ModelDefinition } from '@orbit/data'

export const SUPPLY_SCHEMA: ModelDefinition = {
  attributes: {
    name: { type: 'string' },
    description: { type: 'string' },
    icon: { type: 'string' }
  },
  relationships: {
    campaignSupplies: { type: 'hasMany', model: 'campaignSupply', inverse: 'supply' }
  }
}
