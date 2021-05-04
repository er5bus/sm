import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_ASSESSMENT_TOOL
  })


export const fetchAssessmentTools = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ASSESSMENT_TOOLS_INIT,
        success: ACTIONS.FETCH_ASSESSMENT_TOOLS_SUCCEDED,
        fail: ACTIONS.FETCH_ASSESSMENT_TOOLS_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOLS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createAssessmentTool = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_ASSESSMENT_TOOL_INIT,
        success: ACTIONS.CREATE_ASSESSMENT_TOOL_SUCCEDED,
        fail: ACTIONS.CREATE_ASSESSMENT_TOOL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOLS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editAssessmentTool = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_ASSESSMENT_TOOL_INIT,
        success: ACTIONS.EDIT_ASSESSMENT_TOOL_SUCCEDED,
        fail: ACTIONS.EDIT_ASSESSMENT_TOOL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const editEvaluationRubric = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_SKILL_INIT,
        success: ACTIONS.EDIT_SKILL_SUCCEDED,
        fail: ACTIONS.EDIT_SKILL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL.replace(":param", param),
      method: HTTP_METHODS.PATCH,
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
      endpoint: ENDPOINTS.ASSESSMENT_TOOL.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const disableAssessmentTool = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_ASSESSMENT_TOOL_INIT,
        success: ACTIONS.DISABLE_ASSESSMENT_TOOL_SUCCEDED,
        fail: ACTIONS.DISABLE_ASSESSMENT_TOOL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL_DEACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const enableAssessmentTool = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_ASSESSMENT_TOOL_INIT,
        success: ACTIONS.ENABLE_ASSESSMENT_TOOL_SUCCEDED,
        fail: ACTIONS.ENABLE_ASSESSMENT_TOOL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL_ACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const fetchAssessmentTool = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ASSESSMENT_TOOL_INIT,
        success: ACTIONS.FETCH_ASSESSMENT_TOOL_SUCCEDED,
        fail: ACTIONS.FETCH_ASSESSMENT_TOOL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchAssessmentToolExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ASSESSMENT_TOOL_INIT,
        success: ACTIONS.FETCH_ASSESSMENT_TOOL_SUCCEDED,
        fail: ACTIONS.FETCH_ASSESSMENT_TOOL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchAssessmentLevelExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ASSESSMENT_LEVEL_INIT,
        success: ACTIONS.FETCH_ASSESSMENT_LEVEL_SUCCEDED,
        fail: ACTIONS.FETCH_ASSESSMENT_LEVEL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchEvaluationRubricExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SKILL_INIT,
        success: ACTIONS.FETCH_SKILL_SUCCEDED,
        fail: ACTIONS.FETCH_SKILL_FAILED
      },
      endpoint: ENDPOINTS.ASSESSMENT_TOOL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
