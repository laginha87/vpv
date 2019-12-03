import { ModelDefinition } from '@orbit/data'

export const CORPORATION_SCHEMA: ModelDefinition = {
  attributes: {
    name: { type: 'string' },
    latitude: { type: 'number' },
    longitude: { type: 'number' }
  },
  relationships: {
    campaigns: { type: 'hasMany', model: 'campaign', inverse: 'corporation' }
  }
}
