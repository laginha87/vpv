import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Formik } from 'formik'
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import * as yup from 'yup'
import { FindCampaign } from '~components/CampaignSupply/__generated__/FindCampaign'
import CreateCampaignContribution from '~components/CampaignSupply/CampaignSupplyMutation.graphql'
import { CampaignSupplyStep1 } from '~components/CampaignSupply/CampaignSupplyStep1'
import { CampaignSupplyStep2 } from '~components/CampaignSupply/CampaignSupplyStep2'
import { CampaignSupplyStep3 } from '~components/CampaignSupply/CampaignSupplyStep3'
import { FormikCallback } from '~types/formik'
import { CreateCampaignContribution as CreateCampaignContributionType } from './__generated__/CreateCampaignContribution'

interface IStepContext {
  nextStep: () => void,
  previousStep: () => void,
  currentStep: number,
}

export const StepContext = createContext<IStepContext>({ currentStep: 1, nextStep: () => { }, previousStep: () => { } })
export interface CampaignSupplyComponent {

}

const useId = (): string => {
  const { pathname } = useLocation()
  return pathname.split('/')[2] as string
}

const SCHEMA = yup.object().shape({
  campaignSupplies: yup.array().of(
    yup.object().shape({
      campaignSupplyId: yup.number().required(),
      quantity: yup.number().required().moreThan(0)
    }
    )
  ).compact((e) => e.quantity <= 0).min(1, 'Escolha pelo menos um supply')
}
)
export interface CampaignSupplyForm {
  campaignSupplies: {
    campaignSupplyId: number,
    quantity: number,
    supplyId: number
  }[]
}

const CampaignSupplyScreen: React.FC<CampaignSupplyComponent> = () => {
  const id = useId()

  const { loading, data } = useQuery<FindCampaign>(
    gql`
      query FindCampaign($id: ID!) {
        campaign(id: $id) {
          id
          campaignSupplies {
              id
          }
          ...CampaignSupplyStep1Fragment
          ...CampaignSupplyStep2Fragment
          ...CampaignSupplyStep3Fragment
        }
          fires {
            ...MapFire
        }
          campaigns{
            ...MapCampaign
        }
      }
      ${CampaignSupplyStep1.fragments}
      ${CampaignSupplyStep2.fragments}
      ${CampaignSupplyStep3.fragments}
    `, { variables: { id } }
  )

  const [step, setStep] = useState(1)
  const nextStep = useCallback(
    () => {
      setStep((curr) => curr + 1)
    },
    [setStep]
  )

  const previousStep = useCallback(
    () => {
      setStep((curr) => curr - 1)
    },
    [setStep]
  )

  const [createContribution, { data: createCampaignContribution }] = useMutation<CreateCampaignContributionType>(CreateCampaignContribution)

  const handleSubmit = useCallback<FormikCallback<CampaignSupplyForm>>(
    async ({ campaignSupplies }, { setSubmitting }) => {
      setSubmitting(true)
      await createContribution({
        variables: {
          input: {
            campaignId: id,
            userId: 1,
            contributionSupplies: campaignSupplies.map(({ supplyId, ...rest }) => rest) // eslint-disable-line
          }
        }
      })

      setSubmitting(false)
    },
    []
  )
  const history = useHistory()

  useEffect(() => {
    if (createCampaignContribution) {
      const { createCampaignContribution: payload } = createCampaignContribution
      history.push(`/campaign_contribution/${payload!.campaignContribution.id}`)
    }
  }, [createCampaignContribution])

  if (loading) {
    return <div />
  }

  const { campaign } = data!

  const initialValues = campaign.campaignSupplies.map(({ id: campaignSupplyId, supply: { id: supplyId } }) => ({ supplyId: parseInt(supplyId, 10), campaignSupplyId: parseInt(campaignSupplyId, 10), quantity: 0 }))
  const context: IStepContext = { nextStep, previousStep, currentStep: step }
  return (
    <Formik initialValues={{ campaignSupplies: initialValues }} onSubmit={handleSubmit} validationSchema={SCHEMA}>
      <StepContext.Provider value={context}>
        {
          step === 1 ? <CampaignSupplyStep1 campaign={campaign} mapData={{ ...data }} />
            : step === 2 ? <CampaignSupplyStep2 campaign={campaign} />
              : <CampaignSupplyStep3 campaign={campaign} mapData={{ ...data! }} />
        }
      </StepContext.Provider>
    </Formik>)
}

export default CampaignSupplyScreen
