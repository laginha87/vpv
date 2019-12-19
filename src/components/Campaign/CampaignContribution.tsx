import React from 'react'
import { Campaign } from '../../model/Campaign'
import { CorporationBasic } from '../../model/Corporation'
import { BottomCard, Button, Icon } from '../common'
import { useId } from './useId'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { CampaignContribution as Model } from '../../model/CampaignContribution'

interface Props {
  campaign: Campaign,
  corporation: CorporationBasic,
}

export const CampaignContribution: React.FC<Props> = () => {
  const id = useId()
  const { data, loading } = useQuery<{ campaignContribution: Model }>(
    gql`
      query campaignContribution($id: ID!){
        campaignContribution(id: $id) {
          campaign {
            corporation {
              name
            }
          }
          campaignContributionSupplies {
            id
            quantity
            campaignSupply{
              supply {
                name
                icon
              }
            }
          }
        }
      }
    `, {
      variables: {
        id
      }
    }
  )

  if (loading) {
    return <div />
  }
  const { campaignContribution: { campaign: { corporation: { name } }, campaignContributionSupplies } } = data!

  return (
    <div className='px-6 bg-grey-100 h-screen'>
      <div className='flex py-12 justify-center'>
        <Icon icon='hands' fill='yellow-200' p={6} bg='yellow-100' rounded='full' w={12} />
      </div>
      <div className='font-bold text-grey-900 mb-4 text-center'>Obrigado por ajudares os Bombeiros Voluntários de {name}!</div>

      {campaignContributionSupplies.map(({ id, quantity, campaignSupply: { supply: { icon, name } } }) => (
        <div key={id} className='flex border-b border-grey-200 items-center py-6 items-center'>
          <Icon icon={icon} w={10} />
          <div className='flex-grow ml-4'>{name}</div>
          <div>{quantity}</div>
        </div>))}

      <div className='mt-16'>
        <div className='text-center text-grey-500'>
          Partilha com os teus amigos
        </div>
        <div className='flex justify-center'>
          <Icon w={12} icon='people' />
          <div className='mx-2'>
            <Icon w={12} icon='people' />
          </div>
          <Icon w={12} icon='people' />
        </div>

      </div>
      <BottomCard>
        <div className='w-full'>
          <Button theme='primary'>Ver outras campanhas</Button>
        </div>
      </BottomCard>
    </div>
  )
}
