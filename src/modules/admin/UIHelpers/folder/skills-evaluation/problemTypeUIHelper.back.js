import { AR, FR, HTTP_METHODS } from "./../../../../../constants"
import { getAttr, makeCall } from "./../../../../../helpers"
import { store } from "./../../../../../configureStore"
import {getLang} from "../../../../../i18n"

const FETCH_PROBLEM_TYPE_ENDPOINT = "/api/folders/skills-evaluations/problem-type"

const LABEL_DATA_FIELD = {
  [FR]: "labelFr",
  [AR]: "labelAr"
}

const problemTypeOptionformat = (problemTypeOptions) => problemTypeOptions.map((problemTypeOption) => 
  ({ label: getAttr(problemTypeOption, LABEL_DATA_FIELD[getLang()]), value: problemTypeOption.id }) )


export const problemTypeUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_PROBLEM_TYPE_ENDPOINT, {}, {'Authorization': `Bearer  ${token.access}`}, {} )
    .then(resp => resolve(callback(problemTypeOptionformat( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
