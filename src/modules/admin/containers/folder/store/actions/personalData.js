import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const fetchFolderPersonalData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_EXTRA_DATA_INIT,
        success: ACTIONS.FETCH_FOLDER_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_EXTRA_DATA_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_PERSONAL_DATA.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const createFolderPersonalData = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_FOLDER_EXTRA_DATA_INIT,
        success: ACTIONS.CREATE_FOLDER_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.CREATE_FOLDER_EXTRA_DATA_FAILED
      },
      endpoint: ENDPOINTS.FOLDERS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editFolderPersonalData = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FOLDER_INIT,
        success: ACTIONS.EDIT_FOLDER_SUCCEDED,
        fail: ACTIONS.EDIT_FOLDER_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_PERSONAL_DATA.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })

