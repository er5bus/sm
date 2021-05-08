import { ACTIONS } from "./../constants"

const initialState = {
  partnerships: [],
  partnership: {},
  partnershipExtraData: {},
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
  error: null,
}


export default (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_PARTNERSHIP: {
      return {
        ...state,
        success: initialState.success,
        error: null,
        isFetching: false,
        isLoading: false,
      }
    }

    case ACTIONS.FILTER_APPOINTMENT : {
      return { ...state, appointmentFilterTerm: { ...state.appointmentFilterTerm, ...payload } }
    }

    case ACTIONS.FETCH_PARTNERSHIPS_INIT: {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_PARTNERSHIPS_SUCCEDED: {
      const { count, results } = payload
      return {
        ...state,
        totalSize: count,
        partnerships: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_PARTNERSHIPS_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_PARTNERSHIP_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_PARTNERSHIP_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_PARTNERSHIP_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_PARTNERSHIP_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_PARTNERSHIP_SUCCEDED: {
      return {
        ...state,
        partnershipContent: payload,
        partnership: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_PARTNERSHIP_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_PARTNERSHIP_CONTENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_PARTNERSHIP_CONTENT_SUCCEDED: {
      return {
        ...state,
        partnershipContent: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_PARTNERSHIP_CONTENT_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_PARTNERSHIP_CONTENT_INIT: {
      return { ...state, isFetching: true, partnershipContent: null, error: null }
    }
    case ACTIONS.FETCH_PARTNERSHIP_CONTENT_SUCCEDED: {
      return { ...state, partnershipContent: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_PARTNERSHIP_CONTENT_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_PARTNERSHIP_INIT: {
      return { ...state, isFetching: true, partnership: null, error: null }
    }
    case ACTIONS.FETCH_PARTNERSHIP_SUCCEDED: {
      return { ...state, partnership: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_PARTNERSHIP_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_PARTNERSHIP_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_PARTNERSHIP_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_PARTNERSHIP_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_PARTNERSHIP_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_PARTNERSHIP_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_PARTNERSHIP_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CREATE_PARTNERSHIP_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_PARTNERSHIP_EXTRA_DATA_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, partnershipExtraData: payload, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_PARTNERSHIP_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_PARTNERSHIP_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_PARTNERSHIP_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        partnership: payload,
        partnershipExtraData: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_PARTNERSHIP_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_PARTNERSHIP_EXTRA_DATA_INIT: {
      return { ...state, isFetching: true, partnershipExtraData: null, error: null }
    }
    case ACTIONS.FETCH_PARTNERSHIP_EXTRA_DATA_SUCCEDED: {
      return { ...state, partnershipExtraData: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_PARTNERSHIP_EXTRA_DATA_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
