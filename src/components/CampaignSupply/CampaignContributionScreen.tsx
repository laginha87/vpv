import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import React from 'react'
import { BottomCard, Button, Icon, List } from '~components/common'
import { useId } from '~components/common/useId'
import { FindCampaignContribution } from './__generated__/FindCampaignContribution'
import { CampaignContributionItem } from './CampaignContributionItem'
import { Link } from 'react-router-dom'

export const CampaignContributionScreen: React.FC = () => {
  const id = useId()
  const { data, loading } = useQuery<FindCampaignContribution>(
    gql`
      query FindCampaignContribution($id: ID!){
        campaignContribution(id: $id) {
          id
          campaign {
            id
            corporation {
              id
              name
            }
          }
          campaignContributionSupplies {
            id
            ...CampaignContributionItemFragment
          }
        }
      }
      ${CampaignContributionItem.fragments}
    `, {
      variables: {
        id
      }
    }
  )

  if (loading) {
    return <div />
  }

  const {
    campaignContribution: {
      campaign: {
        corporation: { name }
      },
      campaignContributionSupplies
    }
  } = data!

  return (
    <div className='px-6 bg-grey-100 h-screen'>
      <div className='flex py-12 justify-center'>
        <Icon icon='hands' fill='yellow-200' p={6} bg='yellow-50' rounded='full' w={12} />
      </div>
      <div className='font-bold text-grey-900 mb-4 text-center'>Obrigado por ajudares os Bombeiros Voluntários de {name}!</div>

      <List
        collection={campaignContributionSupplies}
        render={(e) => <CampaignContributionItem campaignContributionSupply={e} key={e.id} />}
      />

      <div className='mt-16'>
        <div className='text-center text-grey-500 mb-2'>
          Partilha com os teus amigos
        </div>
        <div className='flex justify-center'>
          <Icon borderColor='grey-500' borderWidth={4} fill='black' p={4} w={8} icon='facebook' rounded='lg' />
          <Icon borderColor='grey-500' borderWidth={4} fill='black' p={4} w={8} icon='twitter' rounded='lg' mx={2} />
          <Icon borderColor='grey-500' borderWidth={4} fill='black' p={4} w={8} icon='linkedin' rounded='lg' />
        </div>

      </div>
      <BottomCard>
        <Link to='/'><Button theme='primary' w='full'>Ver outras campanhas</Button></Link>
      </BottomCard>
    </div>
  )
}
