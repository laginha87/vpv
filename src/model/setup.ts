import JsonApiSource from '@orbit/jsonapi'
import MemorySource from '@orbit/memory'

import Coordinator, { RequestStrategy, SyncStrategy } from '@orbit/coordinator'
import { SCHEMA } from './schema'
import JSONAPISource from '@orbit/jsonapi'

export type DataStore = { remote: JSONAPISource, memory: MemorySource };

export const setup = async (): Promise<DataStore> => {
  const remote = new JsonApiSource({
    schema: SCHEMA,
    name: 'remote',
    host: process.env.API_HOST
  })

  const memory = new MemorySource({ schema: SCHEMA, name: 'store' })
  const coordinator = new Coordinator({
    sources: [remote, memory]
  })

  // Query the remote server whenever the store is queried
  coordinator.addStrategy(new RequestStrategy({
    source: 'store',
    on: 'beforeQuery',
    target: 'remote',
    action: 'pull', // could alternatively be `query`
    blocking: true // pessimistic mode
  }))

  // Sync all changes received from the remote server to the store
  coordinator.addStrategy(new SyncStrategy({
    source: 'remote',
    target: 'store',
    blocking: true // pessimistic mode
  }))
  await coordinator.activate()

  return { remote, memory }
}
