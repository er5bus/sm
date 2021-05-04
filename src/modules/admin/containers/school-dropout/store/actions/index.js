import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../constants"


export const clearStore = () =>
({
  type: ACTIONS.CLEAR_SCHOOL_DROPOUT
})


export const fetchSchoolDropouts = (params) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_SCHOOL_DROPOUTS_INIT,
      success: ACTIONS.FETCH_SCHOOL_DROPOUTS_SUCCEDED,
      fail: ACTIONS.FETCH_SCHOOL_DROPOUTS_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUTS,
    method: HTTP_METHODS.GET,
    params,
    auth: true
  }
})


export const createSchoolDropout = (payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.CREATE_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.CREATE_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.CREATE_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUTS,
    method: HTTP_METHODS.POST,
    auth: true
  }
})


export const editSchoolDropout = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.EDIT_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.EDIT_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.EDIT_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUT.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const deactivateSchoolDropout = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.DEACTIVATE_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.DEACTIVATE_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.DEACTIVATE_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUT_DEACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})


export const activateSchoolDropout = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.ACTIVATE_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.ACTIVATE_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.ACTIVATE_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUT_ACTIVATE.replace(":param", param),
    method: HTTP_METHODS.DELETE,
    auth: true
  }
})


export const qualifySchoolDropout = ({ param }, payload) =>
({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.QUALIFY_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.QUALIFY_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.QUALIFY_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUT.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const transferSchoolDropout = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.TRANSFORME_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.TRANSFORME_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.TRANSFORME_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUT_TRANSFER.replace(":param", param),
    method: HTTP_METHODS.PATCH,
    auth: true
  }
})


export const closeSchoolDropout = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.CLOSE_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.CLOSE_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.CLOSE_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUT_CLOSE.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})


export const fetchSchoolDropout = ({ param }) =>
({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_SCHOOL_DROPOUT_INIT,
      success: ACTIONS.FETCH_SCHOOL_DROPOUT_SUCCEDED,
      fail: ACTIONS.FETCH_SCHOOL_DROPOUT_FAILED
    },
    endpoint: ENDPOINTS.SCHOOL_DROPOUT.replace(":param", param),
    method: HTTP_METHODS.GET,
    auth: true
  }
})
