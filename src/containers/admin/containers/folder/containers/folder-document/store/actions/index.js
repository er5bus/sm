import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_FOLDER_DOCUMENT
  })


export const fetchFolderDocuments = (documentParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_DOCUMENTS_INIT,
        success: ACTIONS.FETCH_FOLDER_DOCUMENTS_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_DOCUMENTS_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_DOCUMENTS.replace(":param", documentParams.param),
      method: HTTP_METHODS.GET,
      params: documentParams,
      auth: true
    }
  })


export const createFolderDocument = (documentParams, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_FOLDER_DOCUMENT_INIT,
        success: ACTIONS.CREATE_FOLDER_DOCUMENT_SUCCEDED,
        fail: ACTIONS.CREATE_FOLDER_DOCUMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_DOCUMENTS.replace(":param", documentParams.param),
      method: HTTP_METHODS.POST,
      isFormData: true,
      auth: true
    }
  })


export const editFolderDocument = ({ documentParam, param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FOLDER_DOCUMENT_INIT,
        success: ACTIONS.EDIT_FOLDER_DOCUMENT_SUCCEDED,
        fail: ACTIONS.EDIT_FOLDER_DOCUMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_DOCUMENT.replace(":documentParam", documentParam).replace(":param", param),
      method: HTTP_METHODS.PATCH,
      isFormData: true,
      auth: true
    }
  })


export const deleteFolderDocument = ({ documentParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_FOLDER_DOCUMENT_INIT,
        success: ACTIONS.DELETE_FOLDER_DOCUMENT_SUCCEDED,
        fail: ACTIONS.DELETE_FOLDER_DOCUMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_DOCUMENT.replace(":documentParam", documentParam).replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const deleteFolderDocuments = (documentParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_FOLDER_DOCUMENT_INIT,
        success: ACTIONS.DELETE_FOLDER_DOCUMENT_SUCCEDED,
        fail: ACTIONS.DELETE_FOLDER_DOCUMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_DOCUMENTS,
      method: HTTP_METHODS.DELETE,
      documentParams,
      auth: true
    }
  })


export const fetchFolderDocument = ({ documentParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_DOCUMENT_INIT,
        success: ACTIONS.FETCH_FOLDER_DOCUMENT_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_DOCUMENT_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_DOCUMENT.replace(":documentParam", documentParam).replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
