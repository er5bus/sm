import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"



export const editFolderAcademicProfessionalPath = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FOLDER_EXTRA_DATA_INIT,
        success: ACTIONS.EDIT_FOLDER_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.EDIT_FOLDER_EXTRA_DATA_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_ACADEMIC_PROFESSIONAL_PATH.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })

export const fetchFolderAcademicProfessionalPath = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FOLDER_EXTRA_DATA_INIT,
        success: ACTIONS.FETCH_FOLDER_EXTRA_DATA_SUCCEDED,
        fail: ACTIONS.FETCH_FOLDER_EXTRA_DATA_FAILED
      },
      endpoint: ENDPOINTS.FOLDER_ACADEMIC_PROFESSIONAL_PATH.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
