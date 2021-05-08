import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const AssessmentToolsNew = lazy(() => import("../../containers/assessment-tool/AssessmentToolNew"))
const AssessmentToolsEdit = lazy(() => import("../../containers/assessment-tool/AssessmentToolEdit"))
const AssessmentToolsShow = lazy(() => import("../../containers/assessment-tool/AssessmentToolShow"))
const AssessmentToolsPage = lazy(() => import("../../containers/assessment-tool/AssessmentToolPage"))

const { ASSESSMENT_TOOL } = MODULES_PERMISSIONS

export const assessmentToolCreate = {
  path: "/assessment-tools/new",
  component: AssessmentToolsNew,
  can: ASSESSMENT_TOOL.permissions[CREATE],
  exact: true,
}

export const assessmentToolEdit = {
  path: "/assessment-tools/:param/edit",
  component: AssessmentToolsEdit,
  can: ASSESSMENT_TOOL.permissions[UPDATE]
}

export const assessmentToolShow = {
  path: "/assessment-tools/:param/show",
  component: AssessmentToolsShow,
  can: ASSESSMENT_TOOL.permissions[VIEW]
}

export const assessmentToolList = {
  path: "/assessment-tools",
  component: AssessmentToolsPage,
  can: ASSESSMENT_TOOL.permissions[VIEW]
}
