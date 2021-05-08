import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const createFolderAppointment = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_APPOINTMENT_INIT,
        success: ACTIONS.CREATE_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.CREATE_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_APPOINTMENTS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const filterAppointment = (payload) => 
  ({
    type: ACTIONS.FILTER_APPOINTMENT,
    payload
  })


export const editFolderAppointment = ({ appointmentParam }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_APPOINTMENT_INIT,
        success: ACTIONS.EDIT_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.EDIT_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_APPOINTMENT.replace(":param", appointmentParam),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const fetchFolderAppointment = ({ appointmentParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APPOINTMENT_INIT,
        success: ACTIONS.FETCH_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.FETCH_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_APPOINTMENT.replace(":param", appointmentParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchFolderAppointments = ({param}, params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APPOINTMENTS_INIT,
        success: ACTIONS.FETCH_APPOINTMENTS_SUCCEDED,
        fail: ACTIONS.FETCH_APPOINTMENTS_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_APPOINTMENTS_LIST.replace(":param", param),
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createUserAppointment = ({param}, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_APPOINTMENT_INIT,
        success: ACTIONS.CREATE_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.CREATE_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.USER_APPOINTMENTS.replace(":param", param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editUserAppointment = ({ appointmentParam }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_APPOINTMENT_INIT,
        success: ACTIONS.EDIT_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.EDIT_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.USER_APPOINTMENT.replace(":param", appointmentParam),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const fetchUserAppointment = ({ appointmentParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APPOINTMENT_INIT,
        success: ACTIONS.FETCH_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.FETCH_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.USER_APPOINTMENT.replace(":param", appointmentParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchUserAppointments = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APPOINTMENTS_INIT,
        success: ACTIONS.FETCH_APPOINTMENTS_SUCCEDED,
        fail: ACTIONS.FETCH_APPOINTMENTS_FAILED
      },
      endpoint: ENDPOINTS.USER_APPOINTMENTS_LIST,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })
