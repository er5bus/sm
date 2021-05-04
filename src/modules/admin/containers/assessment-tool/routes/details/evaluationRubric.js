import EvaluationRubricDisplay from "./../../components/display/EvaluationRubricDisplay"

import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {ASSESSMENT_TOOL} = MODULES_PERMISSIONS


export const associateEvaluationRubricDisplay = {
  path: "/associate/skill",
  component: EvaluationRubricDisplay,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}
