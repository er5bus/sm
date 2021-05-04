import * as Yup from "yup"
import { INPUT } from "../../../../../../../components/partials"

// Validation schema
export const knowledgeSkillFieldsAr = ({ intl }) => [
  {
    name: "knowledgeAr",
    component: INPUT,
    label: intl.formatMessage({ id: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_AR" }),
    placeholder: intl.formatMessage({ id: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_AR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]

export const knowledgeSkillFieldsFr = ({ intl }) => [
  {
    name: "knowledgeFr",
    component: INPUT,
    label: intl.formatMessage({ id: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_FR" }),
    placeholder: intl.formatMessage({ id: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_FR" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]
