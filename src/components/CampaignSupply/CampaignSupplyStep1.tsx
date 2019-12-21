import { gql } from 'apollo-boost'
import React from 'react'
import { CampaignSupplyFields } from '~components/CampaignSupply/CampaignSupplyFields'
import { Layouts } from '~components/Layouts'
import { FCWithFragment } from '~store/types'
import { CampaignSupplyStep1Fragment } from './__generated__/CampaignSupplyStep1'
interface Props {
  campaign: CampaignSupplyStep1Fragment,
  mapData: any
}

export const CampaignSupplyStep1: FCWithFragment<Props> = ({ campaign, mapData }) => {
  const { corporation } = campaign
  return (
    <Layouts.WithMap center={[corporation.latitude!, corporation.longitude!]} data={mapData} mapHeight={20}>
      <CampaignSupplyFields campaign={campaign} />
    </Layouts.WithMap>
  )
}

CampaignSupplyStep1.fragments = gql`
  fragment CampaignSupplyStep1Fragment on Campaign {
    corporation {
      name
      latitude
      longitude
    }
    ...CampaignSupplyFieldsFragment
  }
  ${CampaignSupplyFields.fragments}
  ${Layouts.WithMap.fragments}
`
