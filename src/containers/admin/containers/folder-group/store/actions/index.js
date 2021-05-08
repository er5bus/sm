import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_FOLDER_GROUP
  })


export const fetchFolderGroups = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_GROUPS_INIT,
        success: ACTIONS.FETCH_FOLDER_GROUPS_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_GROUPS_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUPS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createFolderGroup = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_FOLDER_GROUP_INIT,
        success: ACTIONS.CREATE_FOLDER_GROUP_SUCCEDED,
        fail: ACTIONS.CREATE_FOLDER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUPS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editFolderGroup = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FOLDER_GROUP_INIT,
        success: ACTIONS.EDIT_FOLDER_GROUP_SUCCEDED,
        fail: ACTIONS.EDIT_FOLDER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const disableFolderGroup = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_FOLDER_GROUP_INIT,
        success: ACTIONS.DISABLE_FOLDER_GROUP_SUCCEDED,
        fail: ACTIONS.DISABLE_FOLDER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP_DEACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const enableFolderGroup = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_FOLDER_GROUP_INIT,
        success: ACTIONS.ENABLE_FOLDER_GROUP_SUCCEDED,
        fail: ACTIONS.ENABLE_FOLDER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP_ACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const fetchFolderGroup = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_GROUP_INIT,
        success: ACTIONS.FETCH_FOLDER_GROUP_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_GROUP_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchAppointments = ({ param }, params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APPOINTMENTS_INIT,
        success: ACTIONS.FETCH_APPOINTMENTS_SUCCEDED,
        fail: ACTIONS.FETCH_APPOINTMENTS_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP_APPOINTMENTS.replace(":param", param),
      params,
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchFolderGroupAppointment = ({ param, appointmentParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_GROUP_APPOINTMENT_INIT,
        success: ACTIONS.FETCH_FOLDER_GROUP_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_GROUP_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP_APPOINTMENT.replace(":param", param).replace(":appointmentParam", appointmentParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const editFolderGroupAppointment = ({ param, appointmentParam }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FOLDER_GROUP_APPOINTMENT_INIT,
        success: ACTIONS.EDIT_FOLDER_GROUP_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.EDIT_FOLDER_GROUP_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP_APPOINTMENT.replace(":param", param).replace(":appointmentParam", appointmentParam),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const createFolderGroupAppointment = ({ param }, payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_FOLDER_GROUP_APPOINTMENT_INIT,
        success: ACTIONS.CREATE_FOLDER_GROUP_APPOINTMENT_SUCCEDED,
        fail: ACTIONS.CREATE_FOLDER_GROUP_APPOINTMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_GROUP_APPOINTMENTS.replace(":param", param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })
