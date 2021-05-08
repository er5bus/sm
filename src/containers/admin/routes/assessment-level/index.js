import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const AssessmentLevels = lazy(() => import("../../containers/assessment-level/AssessmentLevelNewEdit"))
const AssessmentLevelsEdit = lazy(() => import("../../containers/assessment-level/AssessmentLevelNewEdit"))
const AssessmentLevelsShow = lazy(() => import("../../containers/assessment-level/AssessmentLevelShow"))
const AssessmentLevelsPage = lazy(() => import("../../containers/assessment-level/AssessmentLevelPage"))

const { ASSESSMENT_LEVEL } = MODULES_PERMISSIONS

export const assessmentLevelCreate = {
  path: "/assessment-levels/new",
  component: AssessmentLevels,
  can: ASSESSMENT_LEVEL.permissions[CREATE],
  exact: true,
}

export const assessmentLevelEdit = {
  path: "/assessment-levels/:param/edit",
  component: AssessmentLevelsEdit,
  can: ASSESSMENT_LEVEL.permissions[UPDATE]
}

export const assessmentLevelShow = {
  path: "/assessment-levels/:param/show",
  component: AssessmentLevelsShow,
  can: ASSESSMENT_LEVEL.permissions[VIEW]
}

export const assessmentLevelList = {
  path: "/assessment-levels",
  component: AssessmentLevelsPage,
  can: ASSESSMENT_LEVEL.permissions[VIEW]
}
