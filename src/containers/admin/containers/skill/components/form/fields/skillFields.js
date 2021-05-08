import * as Yup from "yup"

import { INPUT } from "./../../../../../../../components/partials"


export const skillFieldsFr = ({ intl }) => [
  {
    name: "skillFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.SKILL_FR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.SKILL_FR" }),
    size: 6,
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "instructionsFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.INSTRUCTIONS_FR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.INSTRUCTIONS_FR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "goalsFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.GOALS_FR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.GOALS_FR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "prerequisiteSkillsFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.PREREQUISITE_SKILLS_FR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.PREREQUISITE_SKILLS_FR" }),
    size: 6,
    validation: Yup.string().max(500)
  },
];

export const skillFieldsAr = ({ intl }) => [
  {
    name: "skillAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.SKILL_AR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.SKILL_AR" }),
    size: 6,
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "instructionAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.INSTRUCTIONS_AR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.INSTRUCTIONS_AR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "goalsAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.GOALS_AR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.GOALS_AR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "prerequisiteSkillsAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILL.INPUT.PREREQUISITE_SKILLS_AR" }),
    placeholder: intl.formatMessage({ id: "SKILL.INPUT.AVANTAGES_AR" }),
    size: 6,
    validation: Yup.string().max(500)
  },
];

export const skillFields = ({ intl }) => [
]
