import { ACTIONS } from "./../constants"


const initialState = { 
  postCourseFollowUps: [], 
  postCourseFollowUp: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isDeleted: false,
    isCreated: false,
    isUpdated: false,
    isClosed: false,
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_POST_COURSE_FOLLOWUP : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_POST_COURSE_FOLLOWUPS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_POST_COURSE_FOLLOWUPS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, postCourseFollowUps: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_POST_COURSE_FOLLOWUPS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_POST_COURSE_FOLLOWUP_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_POST_COURSE_FOLLOWUP_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_POST_COURSE_FOLLOWUP_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_POST_COURSE_FOLLOWUP_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_POST_COURSE_FOLLOWUP_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_POST_COURSE_FOLLOWUP_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_POST_COURSE_FOLLOWUP_INIT : {
      return { ...state, isLoading: true, postCourseFollowUp: null, error: null }
    }
    case ACTIONS.FETCH_POST_COURSE_FOLLOWUP_SUCCEDED : {
      return { ...state, postCourseFollowUp: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_POST_COURSE_FOLLOWUP_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_POST_COURSE_FOLLOWUP_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_POST_COURSE_FOLLOWUP_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_POST_COURSE_FOLLOWUP_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CLOSE_POST_COURSE_FOLLOWUP_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.CLOSE_POST_COURSE_FOLLOWUP_SUCCEDED: {
      return { ...state, success: { ...state.success, isClosed: true }, isLoading: false, error: null }
    }
    case ACTIONS.CLOSE_POST_COURSE_FOLLOWUP_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
