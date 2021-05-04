import SkillsEvaluationActivateDialog from "./../components/dialog/SkillsEvaluationActivateDialog"
import SkillsEvaluationDeactivateDialog from "./../components/dialog/SkillsEvaluationDeactivateDialog"
import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE} from "../../../../../../../constants"

const {SKILLS_EVALUATION} = MODULES_PERMISSIONS

export const skillsEvaluationActivate = {
  path: "/activate/skillsEvaluation/:skillsEvaluationParam",
  component: SkillsEvaluationActivateDialog,
  can: SKILLS_EVALUATION.permissions[DEACTIVATE]
}
export const skillsEvaluationDeactivate = {
  path: "/deactivate/skillsEvaluation/:skillsEvaluationParam",
  component: SkillsEvaluationDeactivateDialog,
  can: SKILLS_EVALUATION.permissions[ACTIVATE]
}
