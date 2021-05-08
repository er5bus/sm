import { ACTIONS } from "./../constants"


const initialState = { 
  orientations: [], 
  orientation: {}, 
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

    case ACTIONS.CLEAR_ORIENTATION : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_ORIENTATIONS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_ORIENTATIONS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, orientations: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_ORIENTATIONS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_ORIENTATION_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_ORIENTATION_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_ORIENTATION_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_ORIENTATION_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_ORIENTATION_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_ORIENTATION_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_ORIENTATION_INIT : {
      return { ...state, isLoading: true, orientation: null, error: null }
    }
    case ACTIONS.FETCH_ORIENTATION_SUCCEDED : {
      return { ...state, orientation: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_ORIENTATION_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_ORIENTATION_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_ORIENTATION_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_ORIENTATION_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CLOSE_ORIENTATION_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.CLOSE_ORIENTATION_SUCCEDED: {
      return { ...state, success: { ...state.success, isClosed: true }, isLoading: false, error: null }
    }
    case ACTIONS.CLOSE_ORIENTATION_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
