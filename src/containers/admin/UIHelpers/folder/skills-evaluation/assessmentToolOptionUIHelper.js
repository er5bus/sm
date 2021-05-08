import { AR, FR, HTTP_METHODS } from "./../../../../../constants"
import { getAttr, makeCall } from "./../../../../../helpers"
import { store } from "./../../../../../configureStore"
import {getLang} from "../../../../../i18n"

const FETCH_ASSESSMENT_TOOL_ENDPOINT = "/api/evaluation-tools/all"

const LABEL_DATA_FIELD = {
  [FR]: "outilFr",
  [AR]: "outilAr"
}

const assessmentToolOptionformat = (assessmentToolOptions) => assessmentToolOptions.map((assessmentToolOption) => 
  ({ label: getAttr(assessmentToolOption, LABEL_DATA_FIELD[getLang()]), value: assessmentToolOption.id, ...assessmentToolOption }) )


export const assessmentToolOptionUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_ASSESSMENT_TOOL_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(assessmentToolOptionformat( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
