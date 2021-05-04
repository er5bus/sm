import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_SERVICE
})


export const fetchServices = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_SERVICES_INIT,
      success: ACTIONS.FETCH_SERVICES_SUCCEDED,
      fail: ACTIONS.FETCH_SERVICES_FAILED
    },
    endpoint: ENDPOINTS.SERVICES,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createService = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_SERVICE_INIT,
      success: ACTIONS.CREATE_SERVICE_SUCCEDED,
      fail: ACTIONS.CREATE_SERVICE_FAILED
    },
    endpoint: ENDPOINTS.SERVICES,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editService = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_SERVICE_INIT,
      success: ACTIONS.EDIT_SERVICE_SUCCEDED,
      fail: ACTIONS.EDIT_SERVICE_FAILED
    },
    endpoint: ENDPOINTS.SERVICE.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateService = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_SERVICE_INIT,
      success: ACTIONS.DEACTIVATE_SERVICE_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_SERVICE_FAILED
    },
    endpoint: ENDPOINTS.SERVICE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})
export const activateService = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_SERVICE_INIT,
      success: ACTIONS.ACTIVATE_SERVICE_SUCCEDED,
      fail: ACTIONS.ACTIVATE_SERVICE_FAILED
    },
    endpoint: ENDPOINTS.SERVICE_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchService = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_SERVICE_INIT,
      success: ACTIONS.FETCH_SERVICE_SUCCEDED,
      fail: ACTIONS.FETCH_SERVICE_FAILED
    },
    endpoint: ENDPOINTS.SERVICE.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
