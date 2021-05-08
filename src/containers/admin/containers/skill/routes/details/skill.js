import SkillDisplay from "./../../components/display/SkillDisplay"
import AptitudeSkillDisplay from "./../../components/display/AptitudeSkillDisplay"
import KnowledgeSkillDisplay from "./../../components/display/KnowledgeSkillDisplay"
import EvaluationRubricsDisplay from "./../../components/display/EvaluationRubricsDisplay"


import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {SKILL} = MODULES_PERMISSIONS


export const skillDisplay = {
  path: "/skill",
  component: SkillDisplay,
  can: SKILL.permissions[DEACTIVATE]
}

export const aptitudeSkillDisplay = {
  path: "/aptitude-skill",
  component: AptitudeSkillDisplay,
  can: SKILL.permissions[DEACTIVATE]
}

export const knowledgeSkillDisplay = {
  path: "/knowledge-skill",
  component: KnowledgeSkillDisplay,
  can: SKILL.permissions[DEACTIVATE]
}

export const evaluationRubricsDisplay = {
  path: "/evaluation-rubrics",
  component: EvaluationRubricsDisplay,
  can: SKILL.permissions[DEACTIVATE]
}
