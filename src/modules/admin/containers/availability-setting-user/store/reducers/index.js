import { ACTIONS } from "./../constants"


const initialState = { 
  availabilitySettingUsers: [], 
  availabilitySettingUser: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isCreated: false,
    isUpdated: false,
    isDeleted: false
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_AVAILABILITY_SETTING_USER : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_AVAILABILITY_SETTING_USERS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_AVAILABILITY_SETTING_USERS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, availabilitySettingUsers: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_AVAILABILITY_SETTING_USERS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_AVAILABILITY_SETTING_USER_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_AVAILABILITY_SETTING_USER_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_AVAILABILITY_SETTING_USER_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_AVAILABILITY_SETTING_USER_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_AVAILABILITY_SETTING_USER_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_AVAILABILITY_SETTING_USER_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_AVAILABILITY_SETTING_USER_INIT : {
      return { ...state, isLoading: true, availabilitySettingUser: null, error: null }
    }
    case ACTIONS.FETCH_AVAILABILITY_SETTING_USER_SUCCEDED : {
      return { ...state, availabilitySettingUser: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_AVAILABILITY_SETTING_USER_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_AVAILABILITY_SETTING_USER_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_AVAILABILITY_SETTING_USER_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_AVAILABILITY_SETTING_USER_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
