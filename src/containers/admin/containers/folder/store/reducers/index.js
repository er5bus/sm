import moment from "moment"
import {DEFAULT_NATURE_VALUE} from "../../../../UIHelpers"
import { ACTIONS } from "./../constants"

const initialState = {
  folders: [],
  folder: {},
  folderContent: {},
  folderExtraData: {},
  appointment: {},
  appointments: [],
  totalSize: 0,
  appointmentFilterTerm: {},
  availabilitySettings: {
    startDate: moment().startOf("isoweek"),
    endDate: moment().endOf("isoweek"),
    eventNature: DEFAULT_NATURE_VALUE
  },
  event: {},
  refresh: false,
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
    case ACTIONS.CLEAR_FOLDER: {
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

    case ACTIONS.FETCH_FOLDERS_INIT: {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_FOLDERS_SUCCEDED: {
      const { count, results } = payload
      return {
        ...state,
        totalSize: count,
        folders: results,
        isFetching: false,
        error: null,
      }
    }
    case ACTIONS.FETCH_FOLDERS_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_FOLDER_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_FOLDER_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_FOLDER_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_FOLDER_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_FOLDER_SUCCEDED: {
      return {
        ...state,
        folder: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_FOLDER_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_FOLDER_CONTENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_FOLDER_CONTENT_SUCCEDED: {
      return {
        ...state,
        folderContent: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_FOLDER_CONTENT_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_FOLDER_CONTENT_INIT: {
      return { ...state, isFetching: true, folderContent: null, error: null }
    }
    case ACTIONS.FETCH_FOLDER_CONTENT_SUCCEDED: {
      return { ...state, folderContent: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_CONTENT_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_AVAILABILITIES_INIT: {
      return { ...state, isFetching: true, availabilities: [], error: null }
    }
    case ACTIONS.FETCH_AVAILABILITIES_SUCCEDED: {
      return { ...state, availabilities: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_AVAILABILITIES_FAILED: {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_FOLDER_INIT: {
      return { ...state, isFetching: true, refresh: false, folder: null, error: null }
    }
    case ACTIONS.FETCH_FOLDER_SUCCEDED: {
      return { ...state, folder: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    case ACTIONS.FETCH_APPOINTMENT_INIT: {
      return { ...state, isFetching: true, success: false, appointment: null, error: null }
    }
    case ACTIONS.FETCH_APPOINTMENT_SUCCEDED: {
      return { ...state, appointment: payload, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_APPOINTMENT_FAILED: {
      return { ...state, isFetching: false, error: payload }
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

    case ACTIONS.CREATE_APPOINTMENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_APPOINTMENT_SUCCEDED: {
      return {
        ...state,
        appointment: payload,
        appointments: [...(state.appointments || []), payload ],
        success: { ...state.success, isCreated: true },
        isLoading: false,
      }
    }
    case ACTIONS.CREATE_APPOINTMENT_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.EDIT_APPOINTMENT_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_APPOINTMENT_SUCCEDED: {
      const appointments = state.appointments.map((appointment) => appointment.id !== payload.id ? ({ ...appointment }) : ({ ...payload}) )
      return { ...state, appointment: payload, success: { ...state.success, isUpdated: true }, appointments, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_APPOINTMENT_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_FOLDER_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_FOLDER_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_FOLDER_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DISABLE_FOLDERS_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DISABLE_FOLDERS_SUCCEDED: {
      return { ...state, success: { ...state.success, isDeactivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.DISABLE_FOLDERS_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_FOLDER_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_FOLDER_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_FOLDER_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.ENABLE_FOLDERS_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.ENABLE_FOLDERS_SUCCEDED: {
      return { ...state, success: { ...state.success, isActivated: true }, isLoading: false, error: null }
    }
    case ACTIONS.ENABLE_FOLDERS_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CREATE_FOLDER_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_FOLDER_EXTRA_DATA_SUCCEDED: {
      return { ...state, success: { ...state.success, isCreated: true }, folderExtraData: payload, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_FOLDER_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false, success: false }
    }

    case ACTIONS.EDIT_FOLDER_EXTRA_DATA_INIT: {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_FOLDER_EXTRA_DATA_SUCCEDED: {
      return {
        ...state,
        refresh: true,
        folder: null,
        folderExtraData: payload,
        success: { ...state.success, isUpdated: true },
        isLoading: false,
        error: null,
      }
    }
    case ACTIONS.EDIT_FOLDER_EXTRA_DATA_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_FOLDER_EXTRA_DATA_INIT: {
      return { ...state, isFetching: true, folderExtraData: null, error: null }
    }
    case ACTIONS.FETCH_FOLDER_EXTRA_DATA_SUCCEDED: {
      return { ...state, folderExtraData: payload, isLoading: false, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_EXTRA_DATA_FAILED: {
      return { ...state, isFetching: false, isLoading: false, error: payload }
    }

    case ACTIONS.CREATE_FOLDER_DOCUMENT_SUCCEDED : {
      return { ...state, refresh: true, folder: null }
    }
    case ACTIONS.EDIT_FOLDER_DOCUMENT_SUCCEDED : {
      return { ...state, refresh: true, folder: null }
    }
    case ACTIONS.DELETE_FOLDER_DOCUMENT_SUCCEDED : {
      return { ...state, refresh: true, folder: null }
    }
    case ACTIONS.DELETE_ORIENTATION_SUCCEDED : {
      return { ...state, refresh: true, folder: null }
    }
    case ACTIONS.CREATE_ORIENTATION_SUCCEDED : {
      return { ...state, refresh: true, folder: null }
    }
    case ACTIONS.CLOSE_ORIENTATION_SUCCEDED : {
      return { ...state, refresh: true, folder: null }
    }
    case ACTIONS.UPDATE_AVAILABILITY_SETTINGS: {
      return { ...state, availabilitySettings: { ...state.availabilitySettings, ...payload } }
    }
    case ACTIONS.LOAD_PREV_AVAILABILITIES : {
      let { startDate, endDate } = state.availabilitySettings
      startDate = startDate.clone().subtract(1, 'weeks').startOf('isoWeek')
      endDate = startDate.clone().endOf('isoWeek')
      return { ...state, availabilitySettings: { ...state.availabilitySettings, startDate, endDate  } }
    }
    case ACTIONS.LOAD_NEXT_AVAILABILITIES : {
      const startDate = state.availabilitySettings.startDate.add(1, 'weeks').startOf('isoWeek')
      const endDate = startDate.clone().endOf('isoWeek')
      return { ...state, availabilitySettings: { ...state.availabilitySettings, startDate, endDate  } }
    }

    default: {
      return state
    }
  }
}
