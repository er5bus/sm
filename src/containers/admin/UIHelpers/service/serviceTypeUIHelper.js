import _ from "lodash"

import { HTTP_METHODS } from "../../../../constants"
import { makeExternalCall } from "../../../../helpers"
import {isRLTLang} from "../../../../i18n"


const FETCH_SERVICE_TYPES_ENDPOINT = "/api/pa/Reference/ServiceTypes/all"
const FETCH_SERVICE_TYPE_ENDPOINT = "/api/pa/Reference/ServiceType/:param"

const formatServiceTypes = (serviceTypes) => serviceTypes.map((ServiceType) => (
  { label: isRLTLang() ? ServiceType.labelAr : ServiceType.labelFr , value: ServiceType.id }) 
)


export const ServiceTypeUIHelper = (callback, param, keyword) => {

  let endpoint = FETCH_SERVICE_TYPES_ENDPOINT
  let query = {}
  if (!_.isEmpty(keyword)){
    query = { q: keyword }
  }
  
  if (_.isNumber(param)){
    endpoint = FETCH_SERVICE_TYPE_ENDPOINT.replace(":param", param)
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
      resolve(callback(formatServiceTypes( result )))
    })
    .catch(err => reject(err.response))
  )
}
