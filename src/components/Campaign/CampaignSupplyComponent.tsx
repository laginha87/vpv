import { useMutation, useQuery } from '@apollo/react-hooks'
import { Formik } from 'formik'
import gql from 'graphql-tag'
import React, { createContext, useCallback, useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import * as yup from 'yup'
import { Campaign, findCampaignQuery } from '../../model/Campaign'
import CreateCampaignContributionMutation from '../../model/queries/CreateCampaignContribution.graphql'
import { FormikCallback } from '../../types/formik'
import { CampaignSupplyStep1 } from './CampaignSupplyStep1'
import { CampaignSupplyStep2 } from './CampaignSupplyStep2'
import { CampaignSupplyStep3 } from './CampaignSupplyStep3'

interface IStepContext {
  nextStep: () => void,
  previousStep: () => void,
  currentStep: number,
}

export const StepContext = createContext<IStepContext | null>(null)
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
    quantity: number
  }[]
}

const CampaignSupplyComponent: React.FC<CampaignSupplyComponent> = () => {
  const id = useId()

  const { loading, data } = useQuery<{ campaign: Campaign }>(
    gql`
      query{
        ${findCampaignQuery(id)}
      }
    `
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

  const [createContribution, { data: createCampaignContribution }] = useMutation(CreateCampaignContributionMutation)

  const handleSubmit = useCallback<FormikCallback<CampaignSupplyForm>>(
    async ({ campaignSupplies }, { setSubmitting }) => {
      setSubmitting(true)
      await createContribution({
        variables: {
          input: {
            campaignId: id,
            userId: 1,
            contributionSupplies: campaignSupplies

          }
        }
      })

      setSubmitting(false)
    },
    []
  )

  useEffect(() => {
    if (createCampaignContribution) {
      console.log(createCampaignContribution.createCampaignContribution.campaignContribution.id)
    }
  }, [createCampaignContribution])

  if (loading) {
    return <div />
  }

  const { campaign } = data!
  const { corporation } = campaign

  const initialValues = campaign.campaignSupplies.map(({ id: campaignSupplyId }) => ({ campaignSupplyId, quantity: 0 }))
  const context: IStepContext = { nextStep, previousStep, currentStep: step }
  return (
    <div>
      <Formik initialValues={{ campaignSupplies: initialValues }} onSubmit={handleSubmit} validationSchema={SCHEMA}>
        <StepContext.Provider value={context}>
          {
            step === 1 ? <CampaignSupplyStep1 campaign={campaign} corporation={corporation} />
              : step === 2 ? <CampaignSupplyStep2 campaign={campaign} corporation={corporation} />
                : <CampaignSupplyStep3 campaign={campaign} corporation={corporation} />
          }
        </StepContext.Provider>
      </Formik>
    </div>)
}

export default CampaignSupplyComponent
