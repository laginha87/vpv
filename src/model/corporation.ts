import { ModelDefinition } from '@orbit/data'
import { JSONRecord } from './JSONRecord'

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

export interface Corporation extends JSONRecord<{ name: string, latitude: number, longitude: number }, 'campaigns'> {
}
