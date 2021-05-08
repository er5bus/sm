import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_PERIOD_UNAVAILABILITY
})


export const fetchPeriodUnavailabilitys = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_PERIOD_UNAVAILABILITYS_INIT,
      success: ACTIONS.FETCH_PERIOD_UNAVAILABILITYS_SUCCEDED,
      fail: ACTIONS.FETCH_PERIOD_UNAVAILABILITYS_FAILED
    },
    endpoint: ENDPOINTS.PERIOD_UNAVAILABILITYS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createPeriodUnavailability = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_PERIOD_UNAVAILABILITY_INIT,
      success: ACTIONS.CREATE_PERIOD_UNAVAILABILITY_SUCCEDED,
      fail: ACTIONS.CREATE_PERIOD_UNAVAILABILITY_FAILED
    },
    endpoint: ENDPOINTS.PERIOD_UNAVAILABILITYS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editPeriodUnavailability = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_PERIOD_UNAVAILABILITY_INIT,
      success: ACTIONS.EDIT_PERIOD_UNAVAILABILITY_SUCCEDED,
      fail: ACTIONS.EDIT_PERIOD_UNAVAILABILITY_FAILED
    },
    endpoint: ENDPOINTS.PERIOD_UNAVAILABILITY.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deletePeriodUnavailability = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DELETE_PERIOD_UNAVAILABILITY_INIT,
      success: ACTIONS.DELETE_PERIOD_UNAVAILABILITY_SUCCEDED,
      fail: ACTIONS.DELETE_PERIOD_UNAVAILABILITY_FAILED
    },
    endpoint: ENDPOINTS.PERIOD_UNAVAILABILITY.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})

export const fetchPeriodUnavailability = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_PERIOD_UNAVAILABILITY_INIT,
      success: ACTIONS.FETCH_PERIOD_UNAVAILABILITY_SUCCEDED,
      fail: ACTIONS.FETCH_PERIOD_UNAVAILABILITY_FAILED
    },
    endpoint: ENDPOINTS.PERIOD_UNAVAILABILITY.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
