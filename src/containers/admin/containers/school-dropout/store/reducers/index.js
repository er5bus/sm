import { ACTIONS } from "./../constants"


const initialState = { 
  schoolDropouts: [], 
  schoolDropout: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isDeactivated: false,
    isActivated: false,
    isCreated: false,
    isUpdated: false,
    isQualified: false,
    isTransformed: false,
    isClosed: false
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_SCHOOL_DROPOUT : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_SCHOOL_DROPOUTS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_DROPOUTS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, schoolDropouts: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_DROPOUTS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_SCHOOL_DROPOUT_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_SCHOOL_DROPOUT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_SCHOOL_DROPOUT_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_SCHOOL_DROPOUT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_SCHOOL_DROPOUT_INIT : {
      return { ...state, isLoading: true, success: initialState.success, schoolDropout: null, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, schoolDropout: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_SCHOOL_DROPOUT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DEACTIVATE_SCHOOL_DROPOUT_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DEACTIVATE_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DEACTIVATE_SCHOOL_DROPOUT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ACTIVATE_SCHOOL_DROPOUT_INIT : { 
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ACTIVATE_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ACTIVATE_SCHOOL_DROPOUT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CLOSE_SCHOOL_DROPOUT_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.CLOSE_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, success: { ...state.success, isClosed: true }, isLoading: false, error: null }
    }
    case ACTIONS.CLOSE_SCHOOL_DROPOUT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.TRANSFORME_SCHOOL_DROPOUT_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.TRANSFORME_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, success: { ...state.success, isTransformed: true }, isLoading: false, error: null }
    }
    case ACTIONS.TRANSFORME_SCHOOL_DROPOUT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.QUALIFY_SCHOOL_DROPOUT_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.QUALIFY_SCHOOL_DROPOUT_SUCCEDED : {
      return { ...state, success: { ...state.success, isQualified: true }, isLoading: false, error: null }
    }
    case ACTIONS.QUALIFY_SCHOOL_DROPOUT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }
    default: {
      return state
    }
  }
}
