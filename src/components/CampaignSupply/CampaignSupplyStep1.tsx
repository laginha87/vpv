import { gql } from 'apollo-boost'
import React from 'react'
import { Link } from 'react-router-dom'
import { CampaignSupplyFields } from '~components/CampaignSupply/CampaignSupplyFields'
import { Icon } from '~components/common'
import { Layouts } from '~components/Layouts'
import { FCWithFragment } from '~store/types'

import { CampaignSupplyStep1Fragment } from './__generated__/CampaignSupplyStep1Fragment'

interface Props {
  campaign: CampaignSupplyStep1Fragment,
  mapData: any
}

export const CampaignSupplyStep1: FCWithFragment<Props> = ({ campaign, mapData }) => {
  const { corporation, id } = campaign
  return (
    <Layouts.WithMap center={[corporation.latitude, corporation.longitude]} data={mapData} mapHeight={10} icon={() => <Link to={`/campaigns/${id}`}><Icon icon='close' m={4} w={6} p={2} bg='grey-100' rounded='full' /></Link>} overlay>
      <CampaignSupplyFields campaign={campaign} />
    </Layouts.WithMap>
  )
}

CampaignSupplyStep1.fragments = gql`
  fragment CampaignSupplyStep1Fragment on Campaign {
    id
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
