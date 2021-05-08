import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_ASSESSMENT_LEVEL
})


export const fetchAssessmentLevels = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_ASSESSMENT_LEVELS_INIT,
      success: ACTIONS.FETCH_ASSESSMENT_LEVELS_SUCCEDED,
      fail: ACTIONS.FETCH_ASSESSMENT_LEVELS_FAILED
    },
    endpoint: ENDPOINTS.ASSESSMENT_LEVELS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createAssessmentLevel = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_ASSESSMENT_LEVEL_INIT,
      success: ACTIONS.CREATE_ASSESSMENT_LEVEL_SUCCEDED,
      fail: ACTIONS.CREATE_ASSESSMENT_LEVEL_FAILED
    },
    endpoint: ENDPOINTS.ASSESSMENT_LEVELS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editAssessmentLevel = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_ASSESSMENT_LEVEL_INIT,
      success: ACTIONS.EDIT_ASSESSMENT_LEVEL_SUCCEDED,
      fail: ACTIONS.EDIT_ASSESSMENT_LEVEL_FAILED
    },
    endpoint: ENDPOINTS.ASSESSMENT_LEVEL.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateAssessmentLevel = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_ASSESSMENT_LEVEL_INIT,
      success: ACTIONS.DEACTIVATE_ASSESSMENT_LEVEL_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_ASSESSMENT_LEVEL_FAILED
    },
    endpoint: ENDPOINTS.ASSESSMENT_LEVEL.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateAssessmentLevel = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_ASSESSMENT_LEVEL_INIT,
      success: ACTIONS.ACTIVATE_ASSESSMENT_LEVEL_SUCCEDED,
      fail: ACTIONS.ACTIVATE_ASSESSMENT_LEVEL_FAILED
    },
    endpoint: ENDPOINTS.ASSESSMENT_LEVEL_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchAssessmentLevel = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_ASSESSMENT_LEVEL_INIT,
      success: ACTIONS.FETCH_ASSESSMENT_LEVEL_SUCCEDED,
      fail: ACTIONS.FETCH_ASSESSMENT_LEVEL_FAILED
    },
    endpoint: ENDPOINTS.ASSESSMENT_LEVEL.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
