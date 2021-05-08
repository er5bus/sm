import { ACTIONS } from "./../constants"


const initialState = { 
  skills: [], 
  skill: {},
  knowledgeSkill: {},
  aptitudeSkill: {},
  evaluationRubrics: {},
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

    case ACTIONS.CLEAR_SKILL : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_SKILLS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_SKILLS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, skills: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SKILLS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_SKILL_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_SKILL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_SKILL_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, skill: payload, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_SKILL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_KNOWLEDGE_SKILL_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_KNOWLEDGE_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, knowledgeSkill: payload, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_KNOWLEDGE_SKILL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_APTITUDE_SKILL_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_APTITUDE_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, aptitudeSkill: payload, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_APTITUDE_SKILL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_EVALUATION_RUBRICS_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_EVALUATION_RUBRICS_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, evaluationRubrics: payload, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_EVALUATION_RUBRICS_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_SKILL_INIT : {
      return { ...state, isFetching: true, skill: null, error: null }
    }
    case ACTIONS.FETCH_SKILL_SUCCEDED : {
      return { ...state, skill: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SKILL_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_KNOWLEDGE_SKILL_INIT : {
      return { ...state, isFetching: true, knowledgeSkill: null, error: null }
    }
    case ACTIONS.FETCH_KNOWLEDGE_SKILL_SUCCEDED : {
      return { ...state, knowledgeSkill: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_KNOWLEDGE_SKILL_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_APTITUDE_SKILL_INIT : {
      return { ...state, isFetching: true, aptitudeSkill: null, error: null }
    }
    case ACTIONS.FETCH_APTITUDE_SKILL_SUCCEDED : {
      return { ...state, aptitudeSkill: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_APTITUDE_SKILL_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_EVALUATION_RUBRICS_INIT : {
      return { ...state, isFetching: true, evaluationRubrics: null, error: null }
    }
    case ACTIONS.FETCH_EVALUATION_RUBRICS_SUCCEDED : {
      return { ...state, evaluationRubrics: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_EVALUATION_RUBRICS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }
    
    case ACTIONS.DISABLE_SKILL_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_SKILL_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_SKILL_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_SKILL_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_SKILL_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_SKILL_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
