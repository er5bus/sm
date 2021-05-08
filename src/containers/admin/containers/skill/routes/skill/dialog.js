import SkillEnableDialog from "./../../components/dialog/SkillEnableDialog"
import SkillDisableDialog from "./../../components/dialog/SkillDisableDialog"
import SkillImportDialog from "./../../components/dialog/SkillImportDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE} from "../../../../../../constants"


const {SKILL} = MODULES_PERMISSIONS


export const skillEnable = {
  path: "/activate/skill/:param",
  component: SkillEnableDialog,
  can: SKILL.permissions[ACTIVATE]
}

export const skillDisable = {
  path: "/deactivate/skill/:param",
  component: SkillDisableDialog,
  can: SKILL.permissions[DEACTIVATE]
}

export const skillImport = {
  path: "/import/skill",
  component: SkillImportDialog,
  can: SKILL.permissions[DEACTIVATE]
}
