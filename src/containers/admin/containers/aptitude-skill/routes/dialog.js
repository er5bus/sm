import AptitudeSkillActivateDialog from "./../components/dialog/AptitudeSkillActivateDialog"
import AptitudeSkillDeactivateDialog from "./../components/dialog/AptitudeSkillDeactivateDialog"
import AptitudeSkillImportDialog from "./../components/dialog/AptitudeSkillImportDialog"
import AptitudeSkillNewEditDialog from "./../components/dialog/AptitudeSkillNewEditDialog"
import AptitudeSkillShowDialog from "./../components/dialog/AptitudeSkillDisplayDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, CREATE, VIEW, UPDATE} from "../../../../../constants"


const {APTITUDE_SKILL} = MODULES_PERMISSIONS


export const aptitudeSkillActivate = {
  path: "/activate/:param",
  component: AptitudeSkillActivateDialog,
  can: APTITUDE_SKILL.permissions[ACTIVATE]
}

export const aptitudeSkillDeactivate = {
  path: "/deactivate/:param",
  component: AptitudeSkillDeactivateDialog,
  can: APTITUDE_SKILL.permissions[DEACTIVATE]
}

export const aptitudeSkillImport = {
  path: "/import",
  component: AptitudeSkillImportDialog,
  can: APTITUDE_SKILL.permissions[CREATE]
}

export const aptitudeSkillCreate = {
  path: "/create",
  component: AptitudeSkillNewEditDialog,
  can: APTITUDE_SKILL.permissions[CREATE]
}

export const aptitudeSkillEdit = {
  path: "/:param/update",
  component: AptitudeSkillNewEditDialog,
  can: APTITUDE_SKILL.permissions[UPDATE]
}


export const aptitudeSkillShow = {
  path: "/:param/view",
  component: AptitudeSkillShowDialog,
  can: APTITUDE_SKILL.permissions[VIEW]
}
