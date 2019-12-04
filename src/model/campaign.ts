import { ModelDefinition } from '@orbit/data'
import { useQuery, useMemorySource } from '../components/common/DataProvider'

export const CAMPAIGN_SCHEMA: ModelDefinition = {
  attributes: {
    endDatetime: { type: 'datetime' },
    completion: { type: 'number' }
  },
  relationships: {
    corporation: { type: 'hasOne', model: 'corporation', inverse: 'campaigns' },
    campaignSupplies: { type: 'hasMany', model: 'campaignSupply', inverse: 'campaign' }
  }
}

export const useGetAllCampaigns = () => {
  const campaigns: any = useQuery((q) => q.findRecords('campaign'), { sources: { remote: { include: ['campaignSupplies', 'corporation'] } } }) || []

  const memory = useMemorySource()

  return campaigns.map((e) => {
    const corporation = memory.cache.query((q) => q.findRecord({ type: 'corporation', id: e.relationships.corporation.data.id }))
    return { ...e, corporation }
  })
}

export const useGetCampaign = (id: string) => {
  const campaign: any = useQuery((q) => q.findRecord({ type: 'campaign', id }), { sources: { remote: { include: ['campaignSupplies', 'corporation'] } } })

  const memory = useMemorySource()

  if (campaign) {
    campaign.corporation = memory.cache.query((q) => q.findRecord({ type: 'corporation', id: campaign.relationships.corporation.data.id }))
    campaign.campaignSupplies = memory.cache.query((q) => q.findRelatedRecords({ type: 'campaign', id: campaign.id }, 'campaignSupplies'))
  }

  return campaign
}
