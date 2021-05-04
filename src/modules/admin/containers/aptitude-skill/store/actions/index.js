import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_APTITUDE_SKILL
})


export const fetchAptitudeSkills = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_APTITUDE_SKILLS_INIT,
      success: ACTIONS.FETCH_APTITUDE_SKILLS_SUCCEDED,
      fail: ACTIONS.FETCH_APTITUDE_SKILLS_FAILED
    },
    endpoint: ENDPOINTS.APTITUDE_SKILLS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createAptitudeSkill = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_APTITUDE_SKILL_INIT,
      success: ACTIONS.CREATE_APTITUDE_SKILL_SUCCEDED,
      fail: ACTIONS.CREATE_APTITUDE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.APTITUDE_SKILLS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editAptitudeSkill = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_APTITUDE_SKILL_INIT,
      success: ACTIONS.EDIT_APTITUDE_SKILL_SUCCEDED,
      fail: ACTIONS.EDIT_APTITUDE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.APTITUDE_SKILL.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateAptitudeSkill = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_APTITUDE_SKILL_INIT,
      success: ACTIONS.DEACTIVATE_APTITUDE_SKILL_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_APTITUDE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.APTITUDE_SKILL.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateAptitudeSkill = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_APTITUDE_SKILL_INIT,
      success: ACTIONS.ACTIVATE_APTITUDE_SKILL_SUCCEDED,
      fail: ACTIONS.ACTIVATE_APTITUDE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.APTITUDE_SKILL_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchAptitudeSkill = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_APTITUDE_SKILL_INIT,
      success: ACTIONS.FETCH_APTITUDE_SKILL_SUCCEDED,
      fail: ACTIONS.FETCH_APTITUDE_SKILL_FAILED
    },
    endpoint: ENDPOINTS.APTITUDE_SKILL.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
