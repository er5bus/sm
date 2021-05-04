import * as Yup from "yup"

import { INPUT } from "./../../../../../../../components/partials"


export const assessmentToolFieldsAr = ({ intl }) => [
  {
    name: "outilAr",
    label: intl.formatMessage({ id: "ASSESSMENT_TOOL.INPUT.TOOL_AR" })  ,
    placeholder: intl.formatMessage({ id: "ASSESSMENT_TOOL.INPUT.TOOL_AR" }),
    component: INPUT,
    size: 12,
    required: true,
    validation: Yup.string().required(),
  }
]


export const assessmentToolFieldsFr = ({ intl }) => [
  {
    name: "outilFr",
    label: intl.formatMessage({ id: "ASSESSMENT_TOOL.INPUT.TOOL_FR" })  ,
    placeholder: intl.formatMessage({ id: "ASSESSMENT_TOOL.INPUT.TOOL_FR" }),
    component: INPUT,
    size: 12,
    required: true,
    validation: Yup.string().required(),
  }
]


export const assessmentToolFields = ({ intl }) => [
]
