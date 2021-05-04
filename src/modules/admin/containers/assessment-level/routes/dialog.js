import AssessmentLevelActivateDialog from "./../components/dialog/AssessmentLevelActivateDialog"
import AssessmentLevelDeactivateDialog from "./../components/dialog/AssessmentLevelDeactivateDialog"
import AssessmentLevelImportDialog from "./../components/dialog/AssessmentLevelImportDialog"
import AssessmentLevelNewEditDialog from "./../components/dialog/AssessmentLevelNewEditDialog"
import AssessmentLevelShowDialog from "./../components/dialog/AssessmentLevelDisplayDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, CREATE, VIEW, UPDATE} from "../../../../../constants"


const {ASSESSMENT_LEVEL} = MODULES_PERMISSIONS


export const assessmentLevelActivate = {
  path: "/activate/:param",
  component: AssessmentLevelActivateDialog,
  can: ASSESSMENT_LEVEL.permissions[ACTIVATE]
}

export const assessmentLevelDeactivate = {
  path: "/deactivate/:param",
  component: AssessmentLevelDeactivateDialog,
  can: ASSESSMENT_LEVEL.permissions[DEACTIVATE]
}

export const assessmentLevelImport = {
  path: "/import",
  component: AssessmentLevelImportDialog,
  can: ASSESSMENT_LEVEL.permissions[CREATE]
}

export const assessmentLevelCreate = {
  path: "/create",
  component: AssessmentLevelNewEditDialog,
  can: ASSESSMENT_LEVEL.permissions[CREATE]
}

export const assessmentLevelEdit = {
  path: "/:param/update",
  component: AssessmentLevelNewEditDialog,
  can: ASSESSMENT_LEVEL.permissions[UPDATE]
}


export const assessmentLevelShow = {
  path: "/:param/view",
  component: AssessmentLevelShowDialog,
  can: ASSESSMENT_LEVEL.permissions[VIEW]
}
