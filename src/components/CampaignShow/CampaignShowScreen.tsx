import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import React from 'react'
import { Link } from 'react-router-dom'
import { CampaignStatus } from '~components/CampaignShow/CampaignStatus'
import { BottomCard, Button, Icon, Progress } from '~components/common'
import { useId } from '~components/common/useId'
import { humanize } from '~utils/date'
import { useMap } from '~components/Map/useMap'
import { CampaignShow } from './__generated__/CampaignShow'

export interface CampaignShowComponentProps {

}

const CampaignShowScreen: React.FC<CampaignShowComponentProps> = () => {
  const id = useId()

  const { data, loading } = useQuery<CampaignShow>(gql`
    query CampaignShow($id: ID!) {
      campaign(id: $id) {
        id
        endDatetime
        corporation {
          latitude
          longitude
        }
        ...CampaignStatus
      }
      campaigns {
        id
        ...MapCampaign
      }
      fires {
        id
        ...MapFire
      }
    }
    ${CampaignStatus.fragments}
    ${useMap.fragments}
  `, {
    variables: {
      id
    }
  })

  useMap({ height: 20, data, center: data && [data.campaign.corporation.latitude, data.campaign.corporation.longitude] })

  if (loading) {
    return <div />
  }

  return (
    <div className='p-6 rounded-t-lg absolute z-10 w-full bg-grey-100' style={{ top: '20vh', height: '80vh', overflow: 'scroll' }}>
      <CampaignStatus campaign={data!.campaign} />
      <BottomCard>
        <div className='flex justify-between mb-4 font-semibold'>
          <div className='flex items-center'>
            <Progress.Radial percentage={0.5} />

            <div className='ml-1'>{humanize(data!.campaign.endDatetime)}</div>
          </div>
          <a className='text-grey-800'>Partilhar esta campanha</a>
        </div>
        <Button theme='primary'>
          <Link to={`/campaigns/${id}/supply`} className='flex items-center justify-center'> Escolher Donativos <Icon icon='chevronRight' w={6} /></Link>
        </Button>
      </BottomCard>
    </div>)
}

export default CampaignShowScreen
