import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_EVALUATION_RUBRIC
})


export const fetchEvaluationRubrics = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_EVALUATION_RUBRICS_INIT,
      success: ACTIONS.FETCH_EVALUATION_RUBRICS_SUCCEDED,
      fail: ACTIONS.FETCH_EVALUATION_RUBRICS_FAILED
    },
    endpoint: ENDPOINTS.EVALUATION_RUBRICS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createEvaluationRubric = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_EVALUATION_RUBRIC_INIT,
      success: ACTIONS.CREATE_EVALUATION_RUBRIC_SUCCEDED,
      fail: ACTIONS.CREATE_EVALUATION_RUBRIC_FAILED
    },
    endpoint: ENDPOINTS.EVALUATION_RUBRICS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editEvaluationRubric = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_EVALUATION_RUBRIC_INIT,
      success: ACTIONS.EDIT_EVALUATION_RUBRIC_SUCCEDED,
      fail: ACTIONS.EDIT_EVALUATION_RUBRIC_FAILED
    },
    endpoint: ENDPOINTS.EVALUATION_RUBRIC.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateEvaluationRubric = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_EVALUATION_RUBRIC_INIT,
      success: ACTIONS.DEACTIVATE_EVALUATION_RUBRIC_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_EVALUATION_RUBRIC_FAILED
    },
    endpoint: ENDPOINTS.EVALUATION_RUBRIC.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateEvaluationRubric = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_EVALUATION_RUBRIC_INIT,
      success: ACTIONS.ACTIVATE_EVALUATION_RUBRIC_SUCCEDED,
      fail: ACTIONS.ACTIVATE_EVALUATION_RUBRIC_FAILED
    },
    endpoint: ENDPOINTS.EVALUATION_RUBRIC_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchEvaluationRubric = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_EVALUATION_RUBRIC_INIT,
      success: ACTIONS.FETCH_EVALUATION_RUBRIC_SUCCEDED,
      fail: ACTIONS.FETCH_EVALUATION_RUBRIC_FAILED
    },
    endpoint: ENDPOINTS.EVALUATION_RUBRIC.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
