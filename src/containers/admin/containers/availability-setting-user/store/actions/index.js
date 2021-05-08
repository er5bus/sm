import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_AVAILABILITY_SETTING_USER
  })


export const fetchAvailabilitySettingUsers = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_AVAILABILITY_SETTING_USERS_INIT,
        success: ACTIONS.FETCH_AVAILABILITY_SETTING_USERS_SUCCEDED,
        fail: ACTIONS.FETCH_AVAILABILITY_SETTING_USERS_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_USERS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createAvailabilitySettingUser = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_AVAILABILITY_SETTING_USER_INIT,
        success: ACTIONS.CREATE_AVAILABILITY_SETTING_USER_SUCCEDED,
        fail: ACTIONS.CREATE_AVAILABILITY_SETTING_USER_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_USERS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editAvailabilitySettingUser = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_AVAILABILITY_SETTING_USER_INIT,
        success: ACTIONS.EDIT_AVAILABILITY_SETTING_USER_SUCCEDED,
        fail: ACTIONS.EDIT_AVAILABILITY_SETTING_USER_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_USER.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const deleteAvailabilitySettingUser = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_AVAILABILITY_SETTING_USER_INIT,
        success: ACTIONS.DELETE_AVAILABILITY_SETTING_USER_SUCCEDED,
        fail: ACTIONS.DELETE_AVAILABILITY_SETTING_USER_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_USER.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const deleteAvailabilitySettingUsers = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_AVAILABILITY_SETTING_USER_INIT,
        success: ACTIONS.DELETE_AVAILABILITY_SETTING_USER_SUCCEDED,
        fail: ACTIONS.DELETE_AVAILABILITY_SETTING_USER_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_USERS,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const fetchAvailabilitySettingUser = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_AVAILABILITY_SETTING_USER_INIT,
        success: ACTIONS.FETCH_AVAILABILITY_SETTING_USER_SUCCEDED,
        fail: ACTIONS.FETCH_AVAILABILITY_SETTING_USER_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_USER.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
