import AssessmentToolEnableDialog from "./../../components/dialog/AssessmentToolEnableDialog"
import AssessmentToolDisableDialog from "./../../components/dialog/AssessmentToolDisableDialog"
import AssessmentToolImportDialog from "./../../components/dialog/AssessmentToolImportDialog"
import AssessmentToolNewDialog from "./../../components/dialog/AssessmentToolNewDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, CREATE} from "../../../../../../constants"


const {ASSESSMENT_TOOL} = MODULES_PERMISSIONS


export const assessmentToolEnable = {
  path: "/activate/assessment-tool/:param",
  component: AssessmentToolEnableDialog,
  can: ASSESSMENT_TOOL.permissions[ACTIVATE]
}

export const assessmentToolDisable = {
  path: "/deactivate/assessment-tool/:param",
  component: AssessmentToolDisableDialog,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}

export const assessmentToolImport = {
  path: "/import/assessment-tool",
  component: AssessmentToolImportDialog,
  can: ASSESSMENT_TOOL.permissions[DEACTIVATE]
}


export const assessmentToolNew = {
  path: "/new/assessment-tool",
  component: AssessmentToolNewDialog,
  can: ASSESSMENT_TOOL.permissions[CREATE]
}
