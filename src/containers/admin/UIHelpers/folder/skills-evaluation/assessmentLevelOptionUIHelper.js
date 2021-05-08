import { AR, FR, HTTP_METHODS } from "./../../../../../constants"
import { getAttr, makeCall } from "./../../../../../helpers"
import { store } from "./../../../../../configureStore"
import {getLang} from "../../../../../i18n"

const FETCH_ASSESSMENT_LEVEL_ENDPOINT = "/api/assessment-levels/all"

const LABEL_DATA_FIELD = {
  [FR]: "levelFr",
  [AR]: "levelAr"
}

const assessmentLevelOptionformat = (assessmentLevelOptions) => assessmentLevelOptions.map((assessmentLevelOption) => 
  ({ label: getAttr(assessmentLevelOption, LABEL_DATA_FIELD[getLang()]), value: assessmentLevelOption.id }) )


export const assessmentLevelOptionUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_ASSESSMENT_LEVEL_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(assessmentLevelOptionformat( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
