import * as Yup from "yup"
import { INPUT } from "../../../../../../../components/partials"

// Validation schema
export const aptitudeSkillFieldsAr = ({ intl }) => [
  {
    name: "aptitudeAr",
    component: INPUT,
    label: intl.formatMessage({ id: "APTITUDE_SKILL.INPUT.KNOWLEDGE_AR" }),
    placeholder: intl.formatMessage({ id: "APTITUDE_SKILL.INPUT.KNOWLEDGE_AR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]

export const aptitudeSkillFieldsFr = ({ intl }) => [
  {
    name: "aptitudeFr",
    component: INPUT,
    label: intl.formatMessage({ id: "APTITUDE_SKILL.INPUT.KNOWLEDGE_FR" }),
    placeholder: intl.formatMessage({ id: "APTITUDE_SKILL.INPUT.KNOWLEDGE_FR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]
