import { ACTIONS } from "./../constants"


const initialState = { 
  assessmentTools: [], 
  assessmentTool: {}, 
  evaluationRubrics: {},
  assessmentLevels: {},
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isDeactivated: false,
    isActivated: false,
    isCreated: false,
    isUpdated: false,
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_ASSESSMENT_TOOL : {
      return { ...state, error: null, success: initialState.success, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_ASSESSMENT_TOOLS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_ASSESSMENT_TOOLS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, assessmentTools: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_ASSESSMENT_TOOLS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_ASSESSMENT_TOOL_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_ASSESSMENT_TOOL_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_ASSESSMENT_TOOL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_ASSESSMENT_TOOL_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_ASSESSMENT_TOOL_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, assessmentTool: payload, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_ASSESSMENT_TOOL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_ASSESSMENT_LEVEL_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_ASSESSMENT_LEVEL_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, assessmentLevels: payload, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_ASSESSMENT_LEVEL_FAILED : {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_SKILL_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, evaluationRubrics: payload, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_SKILL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_ASSESSMENT_TOOL_INIT : {
      return { ...state, isFetching: true, assessmentTool: null, error: null }
    }
    case ACTIONS.FETCH_ASSESSMENT_TOOL_SUCCEDED : {
      return { ...state, assessmentTool: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_ASSESSMENT_TOOL_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_ASSESSMENT_LEVEL_INIT : {
      return { ...state, isFetching: true, assessmentLevels: null, error: null }
    }
    case ACTIONS.FETCH_ASSESSMENT_LEVEL_SUCCEDED : {
      return { ...state, assessmentLevels: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_ASSESSMENT_LEVEL_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_SKILL_INIT : {
      return { ...state, isFetching: true, evaluationRubrics: null, error: null }
    }
    case ACTIONS.FETCH_SKILL_SUCCEDED : {
      return { ...state, evaluationRubrics: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SKILL_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.DISABLE_ASSESSMENT_TOOL_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_ASSESSMENT_TOOL_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_ASSESSMENT_TOOL_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_ASSESSMENT_TOOL_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_ASSESSMENT_TOOL_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_ASSESSMENT_TOOL_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
