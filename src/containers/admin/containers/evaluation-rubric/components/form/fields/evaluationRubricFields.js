import * as Yup from "yup"
import { INPUT } from "../../../../../../../components/partials"

// Validation schema
export const evaluationRubricFieldsAr = ({ intl }) => [
  {
    name: 'rubricAr',
    component: INPUT,
    label: intl.formatMessage({ id: "EVALUATION_RUBRIC.INPUT.RUBRIC_AR" }),
    placeholder: intl.formatMessage({ id: "EVALUATION_RUBRIC.INPUT.RUBRIC_AR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]

export const evaluationRubricFieldsFr = ({ intl }) => [
  {
    name: 'rubricFr',
    component: INPUT,
    label: intl.formatMessage({ id: "EVALUATION_RUBRIC.INPUT.RUBRIC_FR" }),
    placeholder: intl.formatMessage({ id: "EVALUATION_RUBRIC.INPUT.RUBRIC_FR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]
