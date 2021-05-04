import { ACTIONS } from "./../constants"


const initialState = {
  periodUnavailabilitys: [],
  periodUnavailability: {},
  totalSize: 0,
  isFetching: false,
  isLoading: false,
  hasMore: true,
  success: {
    isDelete: false,
    isCreated: false,
    isUpdated: false,
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_PERIOD_UNAVAILABILITY : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_PERIOD_UNAVAILABILITYS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_PERIOD_UNAVAILABILITYS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, periodUnavailabilitys: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_PERIOD_UNAVAILABILITYS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_PERIOD_UNAVAILABILITY_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_PERIOD_UNAVAILABILITY_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_PERIOD_UNAVAILABILITY_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_PERIOD_UNAVAILABILITY_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_PERIOD_UNAVAILABILITY_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_PERIOD_UNAVAILABILITY_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_PERIOD_UNAVAILABILITY_INIT : {
      return { ...state, isLoading: true, success: initialState.success, periodUnavailability: null, error: null }
    }
    case ACTIONS.FETCH_PERIOD_UNAVAILABILITY_SUCCEDED : {
      return { ...state, periodUnavailability: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_PERIOD_UNAVAILABILITY_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_PERIOD_UNAVAILABILITY_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_PERIOD_UNAVAILABILITY_SUCCEDED : {
      return { ...state, success: { ...state.success, isDelete: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_PERIOD_UNAVAILABILITY_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
