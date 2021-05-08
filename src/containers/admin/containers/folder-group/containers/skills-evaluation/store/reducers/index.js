import { ACTIONS } from "./../constants"


const initialState = { 
  skillsEvaluations: [], 
  skillsEvaluation: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isDeactivated: false,
    isCreated: false,
    isUpdated: false,
    isActivated: false,
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_SKILLS_EVALUATION : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_SKILLS_EVALUATIONS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_SKILLS_EVALUATIONS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, skillsEvaluations: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SKILLS_EVALUATIONS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_SKILLS_EVALUATION_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_SKILLS_EVALUATION_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_SKILLS_EVALUATION_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_SKILLS_EVALUATION_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_SKILLS_EVALUATION_SUCCEDED : {
      return { ...state, skillsEvaluation: payload, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_SKILLS_EVALUATION_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_SKILLS_EVALUATION_INIT : {
      return { ...state, isLoading: true, skillsEvaluation: null, error: null }
    }
    case ACTIONS.FETCH_SKILLS_EVALUATION_SUCCEDED : {
      return { ...state, skillsEvaluation: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_SKILLS_EVALUATION_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ACTIVATE_SKILLS_EVALUATION_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ACTIVATE_SKILLS_EVALUATION_SUCCEDED : {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ACTIVATE_SKILLS_EVALUATION_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DEACTIVATE_SKILLS_EVALUATION_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DEACTIVATE_SKILLS_EVALUATION_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DEACTIVATE_SKILLS_EVALUATION_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
