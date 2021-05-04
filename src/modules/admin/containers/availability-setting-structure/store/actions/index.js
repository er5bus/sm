import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_AVAILABILITY_SETTING_STRUCTURE
  })


export const fetchAvailabilitySettingStructures = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_AVAILABILITY_SETTING_STRUCTURES_INIT,
        success: ACTIONS.FETCH_AVAILABILITY_SETTING_STRUCTURES_SUCCEDED,
        fail: ACTIONS.FETCH_AVAILABILITY_SETTING_STRUCTURES_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_STRUCTURES,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createAvailabilitySettingStructure = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_AVAILABILITY_SETTING_STRUCTURE_INIT,
        success: ACTIONS.CREATE_AVAILABILITY_SETTING_STRUCTURE_SUCCEDED,
        fail: ACTIONS.CREATE_AVAILABILITY_SETTING_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_STRUCTURES,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editAvailabilitySettingStructure = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_AVAILABILITY_SETTING_STRUCTURE_INIT,
        success: ACTIONS.EDIT_AVAILABILITY_SETTING_STRUCTURE_SUCCEDED,
        fail: ACTIONS.EDIT_AVAILABILITY_SETTING_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_STRUCTURE.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const deleteAvailabilitySettingStructure = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_AVAILABILITY_SETTING_STRUCTURE_INIT,
        success: ACTIONS.DELETE_AVAILABILITY_SETTING_STRUCTURE_SUCCEDED,
        fail: ACTIONS.DELETE_AVAILABILITY_SETTING_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_STRUCTURE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const deleteAvailabilitySettingStructures = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_AVAILABILITY_SETTING_STRUCTURE_INIT,
        success: ACTIONS.DELETE_AVAILABILITY_SETTING_STRUCTURE_SUCCEDED,
        fail: ACTIONS.DELETE_AVAILABILITY_SETTING_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_STRUCTURES,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const fetchAvailabilitySettingStructure = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_AVAILABILITY_SETTING_STRUCTURE_INIT,
        success: ACTIONS.FETCH_AVAILABILITY_SETTING_STRUCTURE_SUCCEDED,
        fail: ACTIONS.FETCH_AVAILABILITY_SETTING_STRUCTURE_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITY_SETTING_STRUCTURE.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
