import { gql } from 'apollo-boost'
import React from 'react'
import { Link } from 'react-router-dom'
import { CampaignSupplyFields } from '~components/CampaignSupply/CampaignSupplyFields'
import { Icon, MapPanel } from '~components/common'
import { useMap } from '~components/Map/useMap'
import { FCWithFragment } from '~store/types'
import { CampaignSupplyStep1Fragment } from './__generated__/CampaignSupplyStep1Fragment'

interface Props {
  campaign: CampaignSupplyStep1Fragment,
  mapData: any
}

export const CampaignSupplyStep1: FCWithFragment<Props> = ({ campaign, mapData: data }) => {
  const { corporation, id } = campaign

  useMap({ height: 12, data, center: [corporation.latitude, corporation.longitude] })

  return (
    <MapPanel height={15} overlay icon={() => <Link to={`/campaigns/${id}`}><Icon fill='grey-800' icon='close' m={4} w={4} p={4} borderWidth='default' borderColor='grey-400' bg='grey-100' rounded='full' /></Link>}>
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
