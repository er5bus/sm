import SkillsEvaluationActivateDialog from "./../components/dialog/SkillsEvaluationActivateDialog"
import SkillsEvaluationDeactivateDialog from "./../components/dialog/SkillsEvaluationDeactivateDialog"
import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE} from "../../../../../../../constants"

const {SKILLS_EVALUATION} = MODULES_PERMISSIONS

export const skillsEvaluationFolderActivate = {
  path: "/activate/skillsEvaluationFolder/:skillsEvaluationFolderParam",
  component: SkillsEvaluationActivateDialog,
  can: SKILLS_EVALUATION.permissions[DEACTIVATE]
}
export const skillsEvaluationFolderDeactivate = {
  path: "/deactivate/skillsEvaluationFolder/:skillsEvaluationFolderParam",
  component: SkillsEvaluationDeactivateDialog,
  can: SKILLS_EVALUATION.permissions[ACTIVATE]
}
