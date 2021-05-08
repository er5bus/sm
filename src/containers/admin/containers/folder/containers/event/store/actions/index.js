import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_EVENT
  })


export const fetchEvents = (eventParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EVENTS_INIT,
        success: ACTIONS.FETCH_EVENTS_SUCCEDED,
        fail: ACTIONS.FETCH_EVENTS_FAILED
      },
      endpoint: ENDPOINTS.EVENTS.replace(":param", eventParams.param),
      method: HTTP_METHODS.GET,
      params: eventParams,
      auth: true
    }
  })


export const createEvent = (eventParams, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_EVENT_INIT,
        success: ACTIONS.CREATE_EVENT_SUCCEDED,
        fail: ACTIONS.CREATE_EVENT_FAILED
      },
      endpoint: ENDPOINTS.EVENTS.replace(":param", eventParams.param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editEvent = ({ eventParam }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_EVENT_INIT,
        success: ACTIONS.EDIT_EVENT_SUCCEDED,
        fail: ACTIONS.EDIT_EVENT_FAILED
      },
      endpoint: ENDPOINTS.EVENT.replace(":eventParam", eventParam),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const deleteEvent = ({ eventParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_EVENT_INIT,
        success: ACTIONS.DELETE_EVENT_SUCCEDED,
        fail: ACTIONS.DELETE_EVENT_FAILED
      },
      endpoint: ENDPOINTS.EVENT.replace(":eventParam", eventParam),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

  export const closeEvent = ({ eventParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.CLOSE_EVENT_INIT,
        success: ACTIONS.CLOSE_EVENT_SUCCEDED,
        fail: ACTIONS.CLOSE_EVENT_FAILED
      },
      endpoint: ENDPOINTS.CLOSE_EVENT.replace(":eventParam", eventParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const deleteEvents = (eventParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_EVENT_INIT,
        success: ACTIONS.DELETE_EVENT_SUCCEDED,
        fail: ACTIONS.DELETE_EVENT_FAILED
      },
      endpoint: ENDPOINTS.EVENTS,
      method: HTTP_METHODS.DELETE,
      eventParams,
      auth: true
    }
  })


export const fetchEvent = ({ eventParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EVENT_INIT,
        success: ACTIONS.FETCH_EVENT_SUCCEDED,
        fail: ACTIONS.FETCH_EVENT_FAILED
      },
      endpoint: ENDPOINTS.EVENT.replace(":eventParam", eventParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
