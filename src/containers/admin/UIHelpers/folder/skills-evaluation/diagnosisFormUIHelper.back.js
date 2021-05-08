import { AR, FR, HTTP_METHODS } from "./../../../../../constants"
import { getAttr, makeCall } from "./../../../../../helpers"
import { store } from "./../../../../../configureStore"
import {getLang} from "../../../../../i18n"

const FETCH_DIAGNOSIS_FORM_ENDPOINT = "/api/folders/skills-evaluations/diagnosis-form"

const LABEL_DATA_FIELD = {
  [FR]: "labelFr",
  [AR]: "labelAr"
}

const diagnosisFormOptionformat = (diagnosisFormOptions) => diagnosisFormOptions.map((diagnosisFormOption) => 
  ({ label: getAttr(diagnosisFormOption, LABEL_DATA_FIELD[getLang()]), value: diagnosisFormOption.id }) )


export const diagnosisFormUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_DIAGNOSIS_FORM_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(diagnosisFormOptionformat( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
