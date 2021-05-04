import { ACTIONS } from "./../constants"


const initialState = { 
  knowledgeSkills: [], 
  knowledgeSkill: {}, 
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

    case ACTIONS.CLEAR_KNOWLEDGE_SKILL : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_KNOWLEDGE_SKILLS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_KNOWLEDGE_SKILLS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, knowledgeSkills: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_KNOWLEDGE_SKILLS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_KNOWLEDGE_SKILL_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_KNOWLEDGE_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_KNOWLEDGE_SKILL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_KNOWLEDGE_SKILL_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_KNOWLEDGE_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_KNOWLEDGE_SKILL_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_KNOWLEDGE_SKILL_INIT : {
      return { ...state, isLoading: true, success: initialState.success, knowledgeSkill: null, error: null }
    }
    case ACTIONS.FETCH_KNOWLEDGE_SKILL_SUCCEDED : {
      return { ...state, knowledgeSkill: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_KNOWLEDGE_SKILL_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DEACTIVATE_KNOWLEDGE_SKILL_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DEACTIVATE_KNOWLEDGE_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DEACTIVATE_KNOWLEDGE_SKILL_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ACTIVATE_KNOWLEDGE_SKILL_INIT : { 
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ACTIVATE_KNOWLEDGE_SKILL_SUCCEDED : {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ACTIVATE_KNOWLEDGE_SKILL_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }
    default: {
      return state
    }
  }
}
