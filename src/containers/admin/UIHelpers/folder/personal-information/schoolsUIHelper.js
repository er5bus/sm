import _ from "lodash"

import { HTTP_METHODS } from "./../../../../../constants"
import { makeExternalCall } from "./../../../../../helpers"
import {isRLTLang} from "../../../../../i18n"


const FETCH_SCHOOLSES_ENDPOINT = "/api/pa/Reference/Schools/all"
const FETCH_SCHOOLS_ENDPOINT = "/api/pa/Reference/School/:param"

const formatSchools = (schools) => schools.map((school) => ({ label: isRLTLang() ? school.labelAr : school.labelFr , value: school.id }) )


export const schoolsUIHelper = (callback, keyword, param) => {

  let endpoint = FETCH_SCHOOLSES_ENDPOINT
  let query = {}
  if (!_.isEmpty(keyword)){
    query = { q: keyword }
  }
  
  if (_.isNumber(param)){
    endpoint = FETCH_SCHOOLS_ENDPOINT.replace(":param", param)
  }

  return new Promise((resolve, reject) =>
    makeExternalCall(HTTP_METHODS.GET, endpoint, {}, {}, query)
    .then(resp => {
      let result = {}
      if (_.isPlainObject(resp.data)){
        result = [resp.data]
      }else {
        result = resp.data
      }
      resolve(callback(formatSchools( result )))
    })
    .catch(err => reject(err.response))
  )
}
