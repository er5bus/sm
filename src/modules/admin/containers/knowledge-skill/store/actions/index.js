import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_KNOWLEDGE_SKILL
})


export const fetchKnowledgeSkills = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_KNOWLEDGE_SKILLS_INIT,
      success: ACTIONS.FETCH_KNOWLEDGE_SKILLS_SUCCEDED,
      fail: ACTIONS.FETCH_KNOWLEDGE_SKILLS_FAILED
    },
    endpoint: ENDPOINTS.KNOWLEDGE_SKILLS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createKnowledgeSkill = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_KNOWLEDGE_SKILL_INIT,
      success: ACTIONS.CREATE_KNOWLEDGE_SKILL_SUCCEDED,
      fail: ACTIONS.CREATE_KNOWLEDGE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.KNOWLEDGE_SKILLS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editKnowledgeSkill = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_KNOWLEDGE_SKILL_INIT,
      success: ACTIONS.EDIT_KNOWLEDGE_SKILL_SUCCEDED,
      fail: ACTIONS.EDIT_KNOWLEDGE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.KNOWLEDGE_SKILL.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateKnowledgeSkill = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_KNOWLEDGE_SKILL_INIT,
      success: ACTIONS.DEACTIVATE_KNOWLEDGE_SKILL_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_KNOWLEDGE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.KNOWLEDGE_SKILL.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateKnowledgeSkill = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_KNOWLEDGE_SKILL_INIT,
      success: ACTIONS.ACTIVATE_KNOWLEDGE_SKILL_SUCCEDED,
      fail: ACTIONS.ACTIVATE_KNOWLEDGE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.KNOWLEDGE_SKILL_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchKnowledgeSkill = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_KNOWLEDGE_SKILL_INIT,
      success: ACTIONS.FETCH_KNOWLEDGE_SKILL_SUCCEDED,
      fail: ACTIONS.FETCH_KNOWLEDGE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.KNOWLEDGE_SKILL.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
