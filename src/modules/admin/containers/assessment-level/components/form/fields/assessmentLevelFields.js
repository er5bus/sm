import * as Yup from "yup"
import { INPUT } from "../../../../../../../components/partials"

// Validation schema
export const assessmentLevelFieldsAr = ({ intl }) => [
  {
    name: "levelAr",
    component: INPUT,
    label: intl.formatMessage({ id: "ASSESSMENT_LEVEL.INPUT.LEVEL_AR" }),
    placeholder: intl.formatMessage({ id: "ASSESSMENT_LEVEL.INPUT.LEVEL_AR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]

export const assessmentLevelFieldsFr = ({ intl }) => [
  {
    name: "levelFr",
    component: INPUT,
    label: intl.formatMessage({ id: "ASSESSMENT_LEVEL.INPUT.LEVEL_FR" }),
    placeholder: intl.formatMessage({ id: "ASSESSMENT_LEVEL.INPUT.LEVEL_FR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]
