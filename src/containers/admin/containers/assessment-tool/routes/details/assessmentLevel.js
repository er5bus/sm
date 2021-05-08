import AssessmentLevelDisplay from "./../../components/display/AssessmentLevelDisplay"

import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {ASSESSMENT_TOOL} = MODULES_PERMISSIONS


export const associateAssessmentLevelDisplay = {
  path: "/associate/assessment-level",
  component: AssessmentLevelDisplay,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}
