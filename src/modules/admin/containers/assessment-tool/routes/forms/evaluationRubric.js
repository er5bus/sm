import EvaluationRubricForm from "./../../components/form/EvaluationRubricForm"

import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {ASSESSMENT_TOOL} = MODULES_PERMISSIONS


export const associateEvaluationRubricForm = {
  path: "/associate/skill",
  component: EvaluationRubricForm,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}
