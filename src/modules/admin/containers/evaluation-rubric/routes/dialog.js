import EvaluationRubricActivateDialog from "./../components/dialog/EvaluationRubricActivateDialog"
import EvaluationRubricDeactivateDialog from "./../components/dialog/EvaluationRubricDeactivateDialog"
import EvaluationRubricImportDialog from "./../components/dialog/EvaluationRubricImportDialog"
import EvaluationRubricNewEditDialog from "./../components/dialog/EvaluationRubricNewEditDialog"
import EvaluationRubricShowDialog from "./../components/dialog/EvaluationRubricDisplayDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, CREATE, VIEW, UPDATE} from "../../../../../constants"


const {EVALUATION_RUBRIC} = MODULES_PERMISSIONS


export const evaluationRubricActivate = {
  path: "/activate/:param",
  component: EvaluationRubricActivateDialog,
  can: EVALUATION_RUBRIC.permissions[ACTIVATE]
}

export const evaluationRubricDeactivate = {
  path: "/deactivate/:param",
  component: EvaluationRubricDeactivateDialog,
  can: EVALUATION_RUBRIC.permissions[DEACTIVATE]
}

export const evaluationRubricImport = {
  path: "/import",
  component: EvaluationRubricImportDialog,
  can: EVALUATION_RUBRIC.permissions[CREATE]
}

export const evaluationRubricCreate = {
  path: "/create",
  component: EvaluationRubricNewEditDialog,
  can: EVALUATION_RUBRIC.permissions[CREATE]
}

export const evaluationRubricEdit = {
  path: "/:param/update",
  component: EvaluationRubricNewEditDialog,
  can: EVALUATION_RUBRIC.permissions[UPDATE]
}


export const evaluationRubricShow = {
  path: "/:param/view",
  component: EvaluationRubricShowDialog,
  can: EVALUATION_RUBRIC.permissions[VIEW]
}
