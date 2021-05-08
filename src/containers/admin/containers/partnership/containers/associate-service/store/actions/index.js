import { ACTIONS, ENDPOINTS } from './../constants'
import { CALL_API, HTTP_METHODS } from './../../../../../../../../constants'

export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_ASSOCIATE_SERVICE
  })

export const fetchAssociateServices = (associateServiceParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ASSOCIATE_SERVICES_INIT,
        success: ACTIONS.FETCH_ASSOCIATE_SERVICES_SUCCEDED,
        fail: ACTIONS.FETCH_ASSOCIATE_SERVICES_FAILED
      },
      endpoint: ENDPOINTS.ASSOCIATE_SERVICES.replace(':param', associateServiceParams.param),
      method: HTTP_METHODS.GET,
      params: associateServiceParams,
      auth: true
    }
  })

export const createAssociateService = (associateServiceParams, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_ASSOCIATE_SERVICE_INIT,
        success: ACTIONS.CREATE_ASSOCIATE_SERVICE_SUCCEDED,
        fail: ACTIONS.CREATE_ASSOCIATE_SERVICE_FAILED
      },
      endpoint: ENDPOINTS.ASSOCIATE_SERVICES.replace(':param', associateServiceParams.param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })

export const editAssociateService = ({ associateServiceParam, param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_ASSOCIATE_SERVICE_INIT,
        success: ACTIONS.EDIT_ASSOCIATE_SERVICE_SUCCEDED,
        fail: ACTIONS.EDIT_ASSOCIATE_SERVICE_FAILED
      },
      endpoint: ENDPOINTS.ASSOCIATE_SERVICE.replace(':param', param).replace(':associateServiceParam', associateServiceParam),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })

export const deleteAssociateService = ({ associateServiceParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_ASSOCIATE_SERVICE_INIT,
        success: ACTIONS.DELETE_ASSOCIATE_SERVICE_SUCCEDED,
        fail: ACTIONS.DELETE_ASSOCIATE_SERVICE_FAILED
      },
      endpoint: ENDPOINTS.ASSOCIATE_SERVICE.replace(':param', param).replace(':associateServiceParam', associateServiceParam),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const stopAssociateService = ({ associateServiceParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_INIT,
        success: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_SUCCEDED,
        fail: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_FAILED
      },
      endpoint: ENDPOINTS.SUSPENDED_ASSOCIATE_SERVICE.replace(':param', param).replace(':associateServiceParam', associateServiceParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const finishAssociateService = ({ associateServiceParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_INIT,
        success: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_SUCCEDED,
        fail: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_FAILED
      },
      endpoint: ENDPOINTS.FINISH_ASSOCIATE_SERVICE.replace(':param', param).replace(':associateServiceParam', associateServiceParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const permanentAssociateService = ({ associateServiceParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_INIT,
        success: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_SUCCEDED,
        fail: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_FAILED
      },
      endpoint: ENDPOINTS.PERMANENT_ASSOCIATE_SERVICE.replace(':param', param).replace(':associateServiceParam', associateServiceParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const inProgressAssociateService = ({ associateServiceParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_INIT,
        success: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_SUCCEDED,
        fail: ACTIONS.CHANGE_ASSOCIATE_SERVICE_STATUS_FAILED
      },
      endpoint: ENDPOINTS.IN_PROGRESS_ASSOCIATE_SERVICE.replace(':param', param).replace(':associateServiceParam', associateServiceParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const deleteAssociateServices = (associateServiceParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_ASSOCIATE_SERVICE_INIT,
        success: ACTIONS.DELETE_ASSOCIATE_SERVICE_SUCCEDED,
        fail: ACTIONS.DELETE_ASSOCIATE_SERVICE_FAILED
      },
      endpoint: ENDPOINTS.ASSOCIATE_SERVICES.replace(':param', associateServiceParams.param),
      method: HTTP_METHODS.DELETE,
      associateServiceParams,
      auth: true
    }
  })

export const fetchAssociateService = ({ associateServiceParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ASSOCIATE_SERVICE_INIT,
        success: ACTIONS.FETCH_ASSOCIATE_SERVICE_SUCCEDED,
        fail: ACTIONS.FETCH_ASSOCIATE_SERVICE_FAILED
      },
      endpoint: ENDPOINTS.ASSOCIATE_SERVICE.replace(':param', param).replace(':associateServiceParam', associateServiceParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
