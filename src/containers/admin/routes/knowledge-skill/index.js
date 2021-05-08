import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const KnowledgeSkills = lazy(() => import("../../containers/knowledge-skill/KnowledgeSkillNewEdit"))
const KnowledgeSkillsEdit = lazy(() => import("../../containers/knowledge-skill/KnowledgeSkillNewEdit"))
const KnowledgeSkillsShow = lazy(() => import("../../containers/knowledge-skill/KnowledgeSkillShow"))
const KnowledgeSkillsPage = lazy(() => import("../../containers/knowledge-skill/KnowledgeSkillPage"))

const { KNOWLEDGE_SKILL } = MODULES_PERMISSIONS

export const knowledgeSkillCreate = {
  path: "/knowledge-skills/new",
  component: KnowledgeSkills,
  can: KNOWLEDGE_SKILL.permissions[CREATE],
  exact: true,
}

export const knowledgeSkillEdit = {
  path: "/knowledge-skills/:param/edit",
  component: KnowledgeSkillsEdit,
  can: KNOWLEDGE_SKILL.permissions[UPDATE]
}

export const knowledgeSkillShow = {
  path: "/knowledge-skills/:param/show",
  component: KnowledgeSkillsShow,
  can: KNOWLEDGE_SKILL.permissions[VIEW]
}

export const knowledgeSkillList = {
  path: "/knowledge-skills",
  component: KnowledgeSkillsPage,
  can: KNOWLEDGE_SKILL.permissions[VIEW]
}
