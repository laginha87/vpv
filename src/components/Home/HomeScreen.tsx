import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import React from 'react'
import { CampaignCard } from '~components/Home/CampaignCard'
import { useMap } from '~components/Map/useMap'

export const HomeScreen = () => {
  const { data, loading } = useQuery(
    gql`
    query HomeComponentQuery {
      campaigns {
        id
        ...MapCampaign
        ...CampaignCard
      }
      fires {
        id
        ...MapFire
      }
    }
    ${useMap.fragments}
    ${CampaignCard.fragments}
    `
  ) as any

  useMap({ height: 40, data })

  if (loading) {
    return <div />
  }

  return (
    <div className='p-6 rounded-t-lg absolute z-10 w-full bg-grey-100' style={{ top: '40vh', height: '60vh', overflow: 'scroll' }}>
      <div className='text-center text-grey-900 font-bold text-xl mb-4'>Campanhas ativas na tua área</div>
      {!loading && data!.campaigns.map((e) => <CampaignCard key={e.id} campaign={e} />)}
    </div>
  )
}
