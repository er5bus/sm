import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_PARTNERSHIP
  })


export const fetchPartnerships = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_PARTNERSHIPS_INIT,
        success: ACTIONS.FETCH_PARTNERSHIPS_SUCCEDED,
        fail: ACTIONS.FETCH_PARTNERSHIPS_FAILED
      },
      endpoint: ENDPOINTS.PARTNERSHIPS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })

export const disablePartnership = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_PARTNERSHIP_INIT,
        success: ACTIONS.DISABLE_PARTNERSHIP_SUCCEDED,
        fail: ACTIONS.DISABLE_PARTNERSHIP_FAILED
      },
      endpoint: ENDPOINTS.PARTNERSHIP_DEACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const enablePartnership = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_PARTNERSHIP_INIT,
        success: ACTIONS.ENABLE_PARTNERSHIP_SUCCEDED,
        fail: ACTIONS.ENABLE_PARTNERSHIP_FAILED
      },
      endpoint: ENDPOINTS.PARTNERSHIP_ACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const disablePartnerships = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_PARTNERSHIPS_INIT,
        success: ACTIONS.DISABLE_PARTNERSHIPS_SUCCEDED,
        fail: ACTIONS.DISABLE_PARTNERSHIPS_FAILED
      },
      endpoint: ENDPOINTS.PARTNERSHIPS_DEACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const enablePartnerships = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_PARTNERSHIPS_INIT,
        success: ACTIONS.ENABLE_PARTNERSHIPS_SUCCEDED,
        fail: ACTIONS.ENABLE_PARTNERSHIPS_FAILED
      },
      endpoint: ENDPOINTS.PARTNERSHIPS_ACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const createPartnership = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_PARTNERSHIP_EXTRA_DATA_INIT,
        success: ACTIONS.CREATE_PARTNERSHIP_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.CREATE_PARTNERSHIP_EXTRA_DATA_FAILED
      },
      isFormData: true,
      endpoint: ENDPOINTS.PARTNERSHIPS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editPartnership = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_PARTNERSHIP_EXTRA_DATA_INIT,
        success: ACTIONS.EDIT_PARTNERSHIP_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.EDIT_PARTNERSHIP_EXTRA_DATA_FAILED
      },
      isFormData: true,
      endpoint: ENDPOINTS.PARTNERSHIP.replace(":param", param),
      method: HTTP_METHODS.PUT,
      auth: true
    }
  })

export const fetchPartnership = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_PARTNERSHIP_INIT,
        success: ACTIONS.FETCH_PARTNERSHIP_SUCCEDED,
        fail: ACTIONS.FETCH_PARTNERSHIP_FAILED
      },
      endpoint: ENDPOINTS.PARTNERSHIP.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchPartnershipExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_PARTNERSHIP_EXTRA_DATA_INIT,
        success: ACTIONS.FETCH_PARTNERSHIP_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.FETCH_PARTNERSHIP_EXTRA_DATA_FAILED
      },
      endpoint: ENDPOINTS.PARTNERSHIP.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
