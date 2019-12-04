import Coordinator, { RequestStrategy, SyncStrategy } from '@orbit/coordinator'
import JSONAPISource, { JSONAPISerializer } from '@orbit/jsonapi'
import MemorySource from '@orbit/memory'
import { Serializer } from '@orbit/serializers'
import { DateTime } from 'luxon'

import { SCHEMA } from './schema'

export type DataStore = { remote: JSONAPISource, memory: MemorySource };

class DatetimeSerializer implements Serializer<DateTime, string> {
  serialize (arg: DateTime) {
    return arg.toISO()
  }

  deserialize (arg: string): DateTime {
    return DateTime.fromISO(arg)
  }
}

export const setup = async (): Promise<DataStore> => {
  const remote = new JSONAPISource({
    schema: SCHEMA,
    name: 'remote',
    host: process.env.API_HOST
  })

  const memory = new MemorySource({ schema: SCHEMA, name: 'memory' })
  const coordinator = new Coordinator({
    sources: [remote, memory]
  })

  remote.requestProcessor.serializer = new JSONAPISerializer({ schema: SCHEMA, serializers: { datetime: new DatetimeSerializer() } })

  // Query the remote server whenever the memory source is queried
  coordinator.addStrategy(
    new RequestStrategy({
      source: 'memory',
      on: 'beforeQuery',

      target: 'remote',
      action: 'query',

      blocking: false
    })
  )

  // Update the remote server whenever the memory source is updated
  coordinator.addStrategy(
    new RequestStrategy({
      source: 'memory',
      on: 'beforeUpdate',

      target: 'remote',
      action: 'update',

      blocking: false
    })
  )

  // Sync all changes received from the remote server to the memory source
  coordinator.addStrategy(
    new SyncStrategy({
      source: 'remote',
      target: 'memory',
      blocking: false
    })
  )
  await coordinator.activate()

  return { remote, memory }
}
