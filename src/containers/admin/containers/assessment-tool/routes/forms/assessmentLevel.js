import AssessmentLevelsForm from "./../../components/form/AssessmentLevelForm"

import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {ASSESSMENT_TOOL} = MODULES_PERMISSIONS


export const associateAssessmentLevelForm = {
  path: "/associate/assessment-level",
  component: AssessmentLevelsForm,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}
