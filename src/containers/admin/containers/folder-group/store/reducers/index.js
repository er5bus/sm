import { ACTIONS } from "./../constants"


const initialState = { 
  folderGroups: [], 
  folderGroup: {}, 
  appointments: [],
  appointment: {},
  skillsEvaluation: {},
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

    case ACTIONS.CLEAR_FOLDER_GROUP : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_FOLDER_GROUPS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_FOLDER_GROUPS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, folderGroups: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_GROUPS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_FOLDER_GROUP_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_FOLDER_GROUP_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_FOLDER_GROUP_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_FOLDER_GROUP_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_FOLDER_GROUP_SUCCEDED : {
      return { ...state, folderGroup: payload, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_FOLDER_GROUP_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_FOLDER_GROUP_INIT : {
      return { ...state, isLoading: true, folderGroup: null, error: null }
    }
    case ACTIONS.FETCH_FOLDER_GROUP_SUCCEDED : {
      return { ...state, folderGroup: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_GROUP_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_FOLDER_GROUP_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_FOLDER_GROUP_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_FOLDER_GROUP_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_FOLDER_GROUP_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_FOLDER_GROUP_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_FOLDER_GROUP_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FETCH_APPOINTMENTS_INIT: {
      return { ...state, isFetching: true, appointments: [], error: null }
    }
    case ACTIONS.FETCH_APPOINTMENTS_SUCCEDED: {
      return { ...state, appointments: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_APPOINTMENTS_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.EDIT_FOLDER_GROUP_APPOINTMENT_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_FOLDER_GROUP_APPOINTMENT_SUCCEDED : {
      const appointments = state.appointments.map((appointment) => appointment.id !== payload.id ? ({ ...appointment }) : ({ ...payload}) )
      return { ...state, appointment: payload, success: { ...state.success, isUpdated: true }, appointments, isLoading: false, error: null }    
    }
    case ACTIONS.EDIT_FOLDER_GROUP_APPOINTMENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_FOLDER_GROUP_APPOINTMENT_INIT : {
      return { ...state, isLoading: true, appointment: null, error: null }
    }
    case ACTIONS.FETCH_FOLDER_GROUP_APPOINTMENT_SUCCEDED : {
      return { ...state, appointment: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_GROUP_APPOINTMENT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CREATE_FOLDER_GROUP_APPOINTMENT_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_FOLDER_GROUP_APPOINTMENT_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, appointment: payload, appointments: [...(state.appointments || []), payload ], isLoading: false }
    }
    case ACTIONS.CREATE_FOLDER_GROUP_APPOINTMENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    default: {
      return state
    }
  }
}
