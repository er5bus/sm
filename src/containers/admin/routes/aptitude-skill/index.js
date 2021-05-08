import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const AptitudeSkills = lazy(() => import("../../containers/aptitude-skill/AptitudeSkillNewEdit"))
const AptitudeSkillsEdit = lazy(() => import("../../containers/aptitude-skill/AptitudeSkillNewEdit"))
const AptitudeSkillsShow = lazy(() => import("../../containers/aptitude-skill/AptitudeSkillShow"))
const AptitudeSkillsPage = lazy(() => import("../../containers/aptitude-skill/AptitudeSkillPage"))

const { APTITUDE_SKILL } = MODULES_PERMISSIONS

export const aptitudeSkillCreate = {
  path: "/aptitude-skills/new",
  component: AptitudeSkills,
  can: APTITUDE_SKILL.permissions[CREATE],
  exact: true,
}

export const aptitudeSkillEdit = {
  path: "/aptitude-skills/:param/edit",
  component: AptitudeSkillsEdit,
  can: APTITUDE_SKILL.permissions[UPDATE]
}

export const aptitudeSkillShow = {
  path: "/aptitude-skills/:param/show",
  component: AptitudeSkillsShow,
  can: APTITUDE_SKILL.permissions[VIEW]
}

export const aptitudeSkillList = {
  path: "/aptitude-skills",
  component: AptitudeSkillsPage,
  can: APTITUDE_SKILL.permissions[VIEW]
}
