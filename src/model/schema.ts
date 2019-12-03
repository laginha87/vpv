import { Schema } from '@orbit/data'
import { FIRE_SCHEMA } from './fire'
import { CAMPAIGN_SCHEMA } from './campaign'
import { CAMPAIGN_SUPPLY_SCHEMA } from './campaign_supply'
import { CORPORATION_SCHEMA } from './corporation'
import { SUPPLY_SCHEMA } from './supply'

const pluralizations = {
  campaign: 'campaigns',
  campaignSupply: 'campaignSupplies',
  corporation: 'corporations',
  supply: 'supplies'
}
const singularizations = {
  campaigns: 'campaign',
  campaignSupplies: 'campaignSupply',
  corporations: 'corporation',
  supplies: 'supply'
}

const schema = {
  models: {
    fire: FIRE_SCHEMA,
    campaign: CAMPAIGN_SCHEMA,
    campaignSupply: CAMPAIGN_SUPPLY_SCHEMA,
    corporation: CORPORATION_SCHEMA,
    supply: SUPPLY_SCHEMA

  },
  pluralize: (a) => pluralizations[a],
  singularize: (a) => singularizations[a] || a
}

export const SCHEMA = new Schema(schema)
