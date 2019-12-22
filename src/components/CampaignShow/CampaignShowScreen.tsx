import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'
import { Link } from 'react-router-dom'
import { CampaignStatus } from '~components/CampaignShow/CampaignStatus'
import { BottomCard, Button, Icon, Progress } from '~components/common'
import { useId } from '~components/common/useId'
import { Layouts } from '~components/Layouts'

export interface CampaignShowComponentProps {

}

const CampaignShowScreen: React.FC<CampaignShowComponentProps> = () => {
  const id = useId()

  const { data, loading } = useQuery(gql`
    query CampaignShow($id: ID!) {
      campaign(id: $id) {
        ...CampaignStatus
      }
      campaigns {
        ...MapCampaign
      }
      fires {
        ...MapFire
      }
    }
    ${CampaignStatus.fragments}
    ${Layouts.WithMap.fragments}
  `, {
    variables: {
      id
    }
  })
  if (loading) {
    return <div />
  }

  return (
    <Layouts.WithMap mapHeight={20} data={data} center={[38.736946, -9.142685]} icon='house' back='/' >
      <CampaignStatus campaign={data.campaign} />
      <BottomCard>
        <div className='flex justify-between mb-4 font-semibold'>
          <div className='flex items-center'>
            <Progress.Radial percentage={0.5} />

            <div className='ml-1'>Até ás 20h00</div>
          </div>
          <a className='text-grey-800'>Partilhar esta campanha</a>
        </div>
        <Button theme='primary'>
          <Link to={`/campaigns/${id}/supply`} className='flex items-center justify-center'> Escolher Donativos <Icon icon='chevronRight' w={6} /></Link>
        </Button>
      </BottomCard>

    </Layouts.WithMap>)
}

export default CampaignShowScreen
