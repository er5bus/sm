import { ACTIONS } from "./../constants"


const initialState = { 
  associateServices: [], 
  associateService: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isDeleted: false,
    isStatusChanged: false,
    isCreated: false,
    isUpdated: false,
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_ASSOCIATE_SERVICE : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_ASSOCIATE_SERVICES_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_ASSOCIATE_SERVICES_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, associateServices: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_ASSOCIATE_SERVICES_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_ASSOCIATE_SERVICE_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_ASSOCIATE_SERVICE_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_ASSOCIATE_SERVICE_FAILED : {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_ASSOCIATE_SERVICE_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_ASSOCIATE_SERVICE_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_ASSOCIATE_SERVICE_FAILED : {
      return { ...state, error: payload, isLoading: false, success: false }
    }
 
    case ACTIONS.FETCH_ASSOCIATE_SERVICE_INIT : {
      return { ...state, isLoading: true, associateService: null, error: null }
    }
    case ACTIONS.FETCH_ASSOCIATE_SERVICE_SUCCEDED : {
      return { ...state, associateService: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_ASSOCIATE_SERVICE_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_ASSOCIATE_SERVICE_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_ASSOCIATE_SERVICE_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_ASSOCIATE_SERVICE_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_SUCCEDED: {
      return { ...state, success: { ...state.success, isStatusChanged: true }, isLoading: false, error: null }
    }
    case ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
