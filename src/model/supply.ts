import { ModelDefinition } from '@orbit/data'
import { useQuery } from '../components/common/DataProvider'

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
