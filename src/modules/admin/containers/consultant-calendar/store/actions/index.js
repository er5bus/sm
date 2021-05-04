import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearError = () => 
  ({
    type: ACTIONS.CLEAR_ERROR
  })


export const updateAccountInformation = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.UPDATE_ACCOUNT_INFORMATION_INIT,
        success: ACTIONS.UPDATE_ACCOUNT_INFORMATION_SUCCEDED,
        fail: ACTIONS.UPDATE_ACCOUNT_INFORMATION_FAILED
      },
      auth: true,
      endpoint: ENDPOINTS.UPDATE_ACCOUNT_INFORMATION,
      method: HTTP_METHODS.PATCH
    }
  })


export const changeAccountPassword = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CHANGE_PASSWORD_INIT,
        success: ACTIONS.CHANGE_PASSWORD_SUCCEDED,
        fail: ACTIONS.CHANGE_PASSWORD_FAILED
      },
      auth: true,
      endpoint: ENDPOINTS.CHANGE_PASSWORD,
      method: HTTP_METHODS.POST
    }
  })


export const updatePersonalInformation = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.UPDATE_PERSONAL_INFORMATION_INIT,
        success: ACTIONS.UPDATE_PERSONAL_INFORMATION_SUCCEDED,
        fail: ACTIONS.UPDATE_PERSONAL_INFORMATION_FAILED
      },
      auth: true,
      endpoint: ENDPOINTS.UPDATE_PERSONAL_INFORMATION,
      method: HTTP_METHODS.PATCH
    }
  })


export const fetchUser = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USER_INIT,
        success: ACTIONS.FETCH_USER_SUCCEDED,
        fail: ACTIONS.FETCH_USER_FAILED
      },
      auth: true,
      endpoint: ENDPOINTS.FETCH_PROFILE,
      method: HTTP_METHODS.GET
    }
  })


export const fetchMyAppointments = ({param}, params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APPOINTMENTS_INIT,
        success: ACTIONS.FETCH_APPOINTMENTS_SUCCEDED,
        fail: ACTIONS.FETCH_APPOINTMENTS_FAILED
      },
      endpoint: ENDPOINTS.APPOINTMENTS.replace(":param", param),
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const fetchAppointment = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APPOINTMENT_INIT,
        success: ACTIONS.FETCH_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.FETCH_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.APPOINTMENT.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const filterAppointment = (payload) =>
  ({
    type: ACTIONS.FILTER_APPOINTMENT,
    payload
  })

