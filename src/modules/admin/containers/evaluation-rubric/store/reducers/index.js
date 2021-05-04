import { ACTIONS } from "./../constants"


const initialState = { 
  evaluationRubrics: [], 
  evaluationRubric: {}, 
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

    case ACTIONS.CLEAR_EVALUATION_RUBRIC : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_EVALUATION_RUBRICS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_EVALUATION_RUBRICS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, evaluationRubrics: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_EVALUATION_RUBRICS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_EVALUATION_RUBRIC_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_EVALUATION_RUBRIC_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_EVALUATION_RUBRIC_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_EVALUATION_RUBRIC_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_EVALUATION_RUBRIC_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_EVALUATION_RUBRIC_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_EVALUATION_RUBRIC_INIT : {
      return { ...state, isLoading: true, success: initialState.success, evaluationRubric: null, error: null }
    }
    case ACTIONS.FETCH_EVALUATION_RUBRIC_SUCCEDED : {
      return { ...state, evaluationRubric: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_EVALUATION_RUBRIC_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DEACTIVATE_EVALUATION_RUBRIC_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DEACTIVATE_EVALUATION_RUBRIC_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DEACTIVATE_EVALUATION_RUBRIC_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ACTIVATE_EVALUATION_RUBRIC_INIT : { 
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ACTIVATE_EVALUATION_RUBRIC_SUCCEDED : {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ACTIVATE_EVALUATION_RUBRIC_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }
    default: {
      return state
    }
  }
}
