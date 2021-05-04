import AssessmentToolDisplay from "./../../components/display/AssessmentToolDisplay"

import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {ASSESSMENT_TOOL} = MODULES_PERMISSIONS


export const assessmentToolDisplay = {
  path: "/assessment-tool",
  component: AssessmentToolDisplay,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}
