import { ModelDefinition } from '@orbit/data'
import { useQuery } from '../components/common/DataProvider'
import { JSONRecord } from './JSONRecord'

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

export const useGetAllSupplies = () => {
  return useQuery((q) => q.findRecords('supply')) || []
}

export interface Supply extends JSONRecord<{ name: string, description: string, icon: string}, 'campaignSupplies'> {
}
