import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const SkillNew = lazy(() => import("../../containers/skill/SkillNew"))
const SkillEdit = lazy(() => import("../../containers/skill/SkillEdit"))
const SkillShow = lazy(() => import("../../containers/skill/SkillShow"))
const SkillPage = lazy(() => import("../../containers/skill/SkillPage"))

const { SERVICE } = MODULES_PERMISSIONS

export const skillCreate = {
  path: "/skills/new",
  component: SkillNew,
  can: SERVICE.permissions[CREATE],
  exact: true,
}

export const skillEdit = {
  path: "/skills/:param/edit",
  component: SkillEdit,
  can: SERVICE.permissions[UPDATE]
}

export const skillShow = {
  path: "/skills/:param/show",
  component: SkillShow,
  can: SERVICE.permissions[VIEW]
}

export const skillList = {
  path: "/skills",
  component: SkillPage,
  can: SERVICE.permissions[VIEW]
}
