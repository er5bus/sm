import { ACTIONS } from "./../constants"


const initialState = { 
  events: [], 
  event: {}, 
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

    case ACTIONS.CLEAR_EVENT : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_EVENTS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_EVENTS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, events: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_EVENTS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_EVENT_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_EVENT_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_EVENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_EVENT_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_EVENT_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_EVENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_EVENT_INIT : {
      return { ...state, isLoading: true, event: null, error: null }
    }
    case ACTIONS.FETCH_EVENT_SUCCEDED : {
      return { ...state, event: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_EVENT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_EVENT_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_EVENT_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_EVENT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CLOSE_EVENT_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.CLOSE_EVENT_SUCCEDED: {
      return { ...state, success: { ...state.success, isClosed: true }, isLoading: false, error: null }
    }
    case ACTIONS.CLOSE_EVENT_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
