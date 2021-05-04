import SkillEnableDialog from "./../../components/dialog/SkillEnableDialog"
import SkillsEnableDialog from "./../../components/dialog/SkillsEnableDialog"
import SkillDisableDialog from "./../../components/dialog/SkillDisableDialog"
import SkillsDisableDialog from "./../../components/dialog/SkillsDisableDialog"
import SkillImportDialog from "./../../components/dialog/SkillImportDialog"


import { MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE } from "../../../../../../constants"


const { SKILL } = MODULES_PERMISSIONS


export const skillEnable = {
  path: "/activate/skill/:param",
  component: SkillEnableDialog,
  can: SKILL.permissions[ACTIVATE]
}


export const skillDisable = {
  path: "/delete/skill/:param",
  component: SkillDisableDialog,
  can: SKILL.permissions[DEACTIVATE]
}

export const skillsDisable = {
  path: "/delete/skills",
  component: SkillsDisableDialog,
  can: SKILL.permissions[DEACTIVATE]
}

export const skillsEnable = {
  path: "/activate/skills",
  component: SkillsEnableDialog,
  can: SKILL.permissions[ACTIVATE]
}

export const skillsImport = {
  path: "/import/skills",
  component: SkillImportDialog,
  can: SKILL.permissions[ACTIVATE]
}
