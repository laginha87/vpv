import { gql } from 'apollo-boost'
import React from 'react'
import { CampaignSupplyFields } from '~components/CampaignSupply/CampaignSupplyFields'
import { MapPanel } from '~components/common'
import { useMap } from '~components/Map/useMap'
import { FCWithFragment } from '~store/types'

import { CampaignSupplyStep1Fragment } from './__generated__/CampaignSupplyStep1Fragment'

interface Props {
  campaign: CampaignSupplyStep1Fragment,
  mapData: any
}

export const CampaignSupplyStep1: FCWithFragment<Props> = ({ campaign, mapData: data }) => {
  const { corporation } = campaign

  useMap({ height: 10, data, center: [corporation.latitude, corporation.longitude] })

  return (
    <MapPanel height={10}>
      <CampaignSupplyFields campaign={campaign} />
    </MapPanel>
  )
}

CampaignSupplyStep1.fragments = gql`
  fragment CampaignSupplyStep1Fragment on Campaign {
    id
    corporation {
      id
      name
      latitude
      longitude
    }
    ...CampaignSupplyFieldsFragment
  }
  ${CampaignSupplyFields.fragments}
  ${useMap.fragments}
`
