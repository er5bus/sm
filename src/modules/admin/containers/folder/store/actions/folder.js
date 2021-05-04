import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_FOLDER
  })


export const canBeJustified = (param) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FOLDER_INIT,
        success: ACTIONS.EDIT_FOLDER_SUCCEDED,
        fail: ACTIONS.EDIT_FOLDER_FAILED
      },
      endpoint: ENDPOINTS.ROUTE_OF_JUSTFIED.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const backToBeingProcessed = (param) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FOLDER_INIT,
        success: ACTIONS.EDIT_FOLDER_SUCCEDED,
        fail: ACTIONS.EDIT_FOLDER_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_BEING_PROCESSED.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const fetchFolders = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDERS_INIT,
        success: ACTIONS.FETCH_FOLDERS_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDERS_FAILED
      },
      endpoint: ENDPOINTS.FOLDERS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })

export const disableFolder = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_FOLDER_INIT,
        success: ACTIONS.DISABLE_FOLDER_SUCCEDED,
        fail: ACTIONS.DISABLE_FOLDER_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_DEACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const enableFolder = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_FOLDER_INIT,
        success: ACTIONS.ENABLE_FOLDER_SUCCEDED,
        fail: ACTIONS.ENABLE_FOLDER_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_ACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const disableFolders = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_FOLDERS_INIT,
        success: ACTIONS.DISABLE_FOLDERS_SUCCEDED,
        fail: ACTIONS.DISABLE_FOLDERS_FAILED
      },
      endpoint: ENDPOINTS.FOLDERS_DEACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const enableFolders = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_FOLDERS_INIT,
        success: ACTIONS.ENABLE_FOLDERS_SUCCEDED,
        fail: ACTIONS.ENABLE_FOLDERS_FAILED
      },
      endpoint: ENDPOINTS.FOLDERS_ACTIVATE,
      method: HTTP_METHODS.DELETE,
      params,
      auth: true
    }
  })


export const fetchFolder = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_INIT,
        success: ACTIONS.FETCH_FOLDER_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_FAILED
      },
      endpoint: ENDPOINTS.FOLDER.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
