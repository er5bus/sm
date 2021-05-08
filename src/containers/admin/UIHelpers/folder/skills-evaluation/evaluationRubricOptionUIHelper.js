import { AR, FR, HTTP_METHODS } from "./../../../../../constants"
import { getAttr, makeCall } from "./../../../../../helpers"
import { store } from "./../../../../../configureStore"
import {getLang} from "../../../../../i18n"

const FETCH_ASSESSMENT_TOOL_ENDPOINT = "/api/evaluation-rubrics/all"

const LABEL_DATA_FIELD = {
  [FR]: "rubricFr",
  [AR]: "rubricAr"
}

const evaluationRubricOptionformat = (evaluationRubricOptions) => evaluationRubricOptions.map((evaluationRubricOption) => 
  ({ label: getAttr(evaluationRubricOption, LABEL_DATA_FIELD[getLang()]), value: evaluationRubricOption.id }) )


export const evaluationRubricOptionUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_ASSESSMENT_TOOL_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(evaluationRubricOptionformat( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
