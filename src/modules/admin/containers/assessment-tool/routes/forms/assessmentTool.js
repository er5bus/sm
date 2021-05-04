import AssessmentToolForm from "./../../components/form/AssessmentToolForm"

import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {ASSESSMENT_TOOL} = MODULES_PERMISSIONS


export const assessmentToolForm = {
  path: "/assessment-tool",
  component: AssessmentToolForm,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}
