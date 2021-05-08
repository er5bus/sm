import KnowledgeSkillActivateDialog from "./../components/dialog/KnowledgeSkillActivateDialog"
import KnowledgeSkillDeactivateDialog from "./../components/dialog/KnowledgeSkillDeactivateDialog"
import KnowledgeSkillImportDialog from "./../components/dialog/KnowledgeSkillImportDialog"
import KnowledgeSkillNewEditDialog from "./../components/dialog/KnowledgeSkillNewEditDialog"
import KnowledgeSkillShowDialog from "./../components/dialog/KnowledgeSkillDisplayDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, CREATE, VIEW, UPDATE} from "../../../../../constants"


const {KNOWLEDGE_SKILL} = MODULES_PERMISSIONS


export const knowledgeSkillActivate = {
  path: "/activate/:param",
  component: KnowledgeSkillActivateDialog,
  can: KNOWLEDGE_SKILL.permissions[ACTIVATE]
}

export const knowledgeSkillDeactivate = {
  path: "/deactivate/:param",
  component: KnowledgeSkillDeactivateDialog,
  can: KNOWLEDGE_SKILL.permissions[DEACTIVATE]
}

export const knowledgeSkillImport = {
  path: "/import",
  component: KnowledgeSkillImportDialog,
  can: KNOWLEDGE_SKILL.permissions[CREATE]
}

export const knowledgeSkillCreate = {
  path: "/create",
  component: KnowledgeSkillNewEditDialog,
  can: KNOWLEDGE_SKILL.permissions[CREATE]
}

export const knowledgeSkillEdit = {
  path: "/:param/update",
  component: KnowledgeSkillNewEditDialog,
  can: KNOWLEDGE_SKILL.permissions[UPDATE]
}


export const knowledgeSkillShow = {
  path: "/:param/view",
  component: KnowledgeSkillShowDialog,
  can: KNOWLEDGE_SKILL.permissions[VIEW]
}
