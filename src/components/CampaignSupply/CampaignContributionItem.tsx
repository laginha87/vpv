import React from 'react'
import { FCWithFragment } from '~store/types'
import { gql } from 'apollo-boost'
import { CampaignContributionItemFragment } from './__generated__/CampaignContributionItemFragment'
import { Icon, IconName } from '~components/common'
interface Props {
  campaignContributionSupply: CampaignContributionItemFragment
}
export const CampaignContributionItem: FCWithFragment<Props> = ({
  campaignContributionSupply: {
    quantity,
    campaignSupply: {
      supply: {
        name,
        icon
      }
    }
  }
}) => {
  return (
    <div className='flex items-center'>
      <Icon icon={icon as IconName} w={10} />
      <div className='flex-grow ml-4'>{name}</div>
      <div>{quantity}</div>
    </div>

  )
}

CampaignContributionItem.fragments = gql`
   fragment CampaignContributionItemFragment on CampaignContributionSupply {
    id
    quantity
    campaignSupply {
      supply {
        id
        name
        icon
      }
    }
   }
`
