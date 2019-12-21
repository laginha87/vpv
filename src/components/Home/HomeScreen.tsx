import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { DateTime } from 'luxon'
import React from 'react'
import { CampaignCard } from '~components/Home/CampaignCard'
import { Layouts } from '~components/Layouts'
import { WithMap } from '~components/Layouts/WithMap'

export const humanize = (d: Date) => {
  const e = DateTime.fromJSDate(d)
  if (e.diffNow().hours > 24) {
    return `Termina a ${e.toFormat('HH:MM dd-mm-YYYY')}`
  } else {
    return `Até ás ${e.toFormat('HH')}h`
  }
}

export const HomeScreen = () => {
  const { data, loading } = useQuery(
    gql`
    query HomeComponentQuery {
      campaigns {
        ...MapCampaign
        ...CampaignCard
      }
      fires {
        ...MapFire
      }
    }
      ${WithMap.fragments}
      ${CampaignCard.fragments}
    `
  ) as any

  if (loading) {
    return <div />
  }

  return (
    <Layouts.WithMap data={data} mapHeight={40} center={[38.736946, -9.142685]}>
      <div className='text-center text-grey-900 font-bold text-xl mb-4'>Campanhas ativas na tua área</div>
      {!loading && data!.campaigns.map((e) => <CampaignCard key={e.id} campaign={e} />)}
    </Layouts.WithMap>
  )
}
