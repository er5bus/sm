import { ACTIONS, ENDPOINTS } from "../constants"
import { CALL_API, HTTP_METHODS } from "../../../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_ORIENTATION
  })


export const fetchOrientations = (orientationParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ORIENTATIONS_INIT,
        success: ACTIONS.FETCH_ORIENTATIONS_SUCCEDED,
        fail: ACTIONS.FETCH_ORIENTATIONS_FAILED
      },
      endpoint: ENDPOINTS.ORIENTATIONS.replace(":param", orientationParams.param),
      method: HTTP_METHODS.GET,
      params: orientationParams,
      auth: true
    }
  })


export const createOrientation = (orientationParams, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_ORIENTATION_INIT,
        success: ACTIONS.CREATE_ORIENTATION_SUCCEDED,
        fail: ACTIONS.CREATE_ORIENTATION_FAILED
      },
      endpoint: ENDPOINTS.ORIENTATIONS.replace(":param", orientationParams.param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editOrientation = ({ orientationParam }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_ORIENTATION_INIT,
        success: ACTIONS.EDIT_ORIENTATION_SUCCEDED,
        fail: ACTIONS.EDIT_ORIENTATION_FAILED
      },
      endpoint: ENDPOINTS.ORIENTATION.replace(":orientationParam", orientationParam),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const deleteOrientation = ({ orientationParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_ORIENTATION_INIT,
        success: ACTIONS.DELETE_ORIENTATION_SUCCEDED,
        fail: ACTIONS.DELETE_ORIENTATION_FAILED
      },
      endpoint: ENDPOINTS.ORIENTATION.replace(":orientationParam", orientationParam),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

  export const closeOrientation = ({ orientationParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.CLOSE_ORIENTATION_INIT,
        success: ACTIONS.CLOSE_ORIENTATION_SUCCEDED,
        fail: ACTIONS.CLOSE_ORIENTATION_FAILED
      },
      endpoint: ENDPOINTS.CLOSE_ORIENTATION.replace(":orientationParam", orientationParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const deleteOrientations = (orientationParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_ORIENTATION_INIT,
        success: ACTIONS.DELETE_ORIENTATION_SUCCEDED,
        fail: ACTIONS.DELETE_ORIENTATION_FAILED
      },
      endpoint: ENDPOINTS.ORIENTATIONS,
      method: HTTP_METHODS.DELETE,
      orientationParams,
      auth: true
    }
  })


export const fetchOrientation = ({ orientationParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ORIENTATION_INIT,
        success: ACTIONS.FETCH_ORIENTATION_SUCCEDED,
        fail: ACTIONS.FETCH_ORIENTATION_FAILED
      },
      endpoint: ENDPOINTS.ORIENTATION.replace(":orientationParam", orientationParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
