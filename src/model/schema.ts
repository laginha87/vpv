import { Schema } from '@orbit/data'

import { CAMPAIGN_SCHEMA } from './campaign'
import { CAMPAIGN_SUPPLY_SCHEMA } from './campaign_supply'
import { CORPORATION_SCHEMA } from './corporation'
import { FIRE_SCHEMA } from './fire'
import { SUPPLY_SCHEMA } from './supply'

const pluralizations = {
  campaign: 'campaigns',
  campaignSupply: 'campaignSupplies',
  corporation: 'corporations',
  supply: 'supplies',
  fire: 'fires'
}
const singularizations = {
  campaigns: 'campaign',
  campaignSupplies: 'campaignSupply',
  corporations: 'corporation',
  supplies: 'supply',
  fires: 'fire'
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
