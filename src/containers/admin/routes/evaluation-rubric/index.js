import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const EvaluationRubrics = lazy(() => import("../../containers/evaluation-rubric/EvaluationRubricNewEdit"))
const EvaluationRubricsEdit = lazy(() => import("../../containers/evaluation-rubric/EvaluationRubricNewEdit"))
const EvaluationRubricsShow = lazy(() => import("../../containers/evaluation-rubric/EvaluationRubricShow"))
const EvaluationRubricsPage = lazy(() => import("../../containers/evaluation-rubric/EvaluationRubricPage"))

const { EVALUATION_RUBRIC } = MODULES_PERMISSIONS

export const evaluationRubricCreate = {
  path: "/evaluation-rubrics/new",
  component: EvaluationRubrics,
  can: EVALUATION_RUBRIC.permissions[CREATE],
  exact: true,
}

export const evaluationRubricEdit = {
  path: "/evaluation-rubrics/:param/edit",
  component: EvaluationRubricsEdit,
  can: EVALUATION_RUBRIC.permissions[UPDATE]
}

export const evaluationRubricShow = {
  path: "/evaluation-rubrics/:param/show",
  component: EvaluationRubricsShow,
  can: EVALUATION_RUBRIC.permissions[VIEW]
}

export const evaluationRubricList = {
  path: "/evaluation-rubrics",
  component: EvaluationRubricsPage,
  can: EVALUATION_RUBRIC.permissions[VIEW]
}
