import { ModelDefinition } from '@orbit/data'

export const CAMPAIGN_SCHEMA : ModelDefinition = {
  attributes: {
    endDatetime: { type: 'datetime' },
    completion: { type: 'number' }
  },
  relationships: {
    corporation: { type: 'hasOne', model: 'corporation', inverse: 'campaigns' },
    campaignSupplies: { type: 'hasMany', model: 'campaignSupply', inverse: 'campaign' }
  }
}
