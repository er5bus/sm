import * as Yup from "yup"
import { TEXTAREA } from "../../../../../../../components/partials"

// Validation schema
export const schoolDropoutFields = ({ intl }) => [
  
]

export const schoolDropoutFieldsAr = ({ intl }) => [
  {
    name: "observationAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.OBSERVATION_AR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.OBSERVATION_AR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  },
]

export const schoolDropoutFieldsFr = ({ intl }) => [
  {
    name: "observationFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.OBSERVATION_FR" }),
    placeholder: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.OBSERVATION_FR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  },
]
