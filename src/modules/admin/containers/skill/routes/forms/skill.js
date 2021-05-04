import SkillForm from "./../../components/form/SkillForm"
import AptitudeSkillForm from "./../../components/form/AptitudeSkillForm"
import KnowledgeSkillForm from "./../../components/form/KnowledgeSkillForm"
import EvaluationRubricsForm from "./../../components/form/EvaluationRubricsForm"


import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {SKILL} = MODULES_PERMISSIONS


export const skillForm = {
  path: "/skill",
  component: SkillForm,
  can: SKILL.permissions[DEACTIVATE]
}

export const aptitudeSkillForm = {
  path: "/aptitude-skill",
  component: AptitudeSkillForm,
  can: SKILL.permissions[DEACTIVATE]
}

export const knowledgeSkillForm = {
  path: "/knowledge-skill",
  component: KnowledgeSkillForm,
  can: SKILL.permissions[DEACTIVATE]
}

export const evaluationRubricsForm = {
  path: "/evaluation-rubrics",
  component: EvaluationRubricsForm,
  can: SKILL.permissions[DEACTIVATE]
}
