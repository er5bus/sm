import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import {isRLTLang} from "../../../../i18n"
import { store } from "./../../../../configureStore"


const FETCH_PARTNERSHIP_SERVICES_ENDPOINT = "/api/services/all"
//const FETCH_PARTNERSHIP_SERVICE_ENDPOINT = "/api/services/:param"

const formatPartnershipServices = (partnershipServices) => partnershipServices.map((partnershipService) => 
  ({ 
    label: isRLTLang() ? partnershipService.labelAr : partnershipService.labelFr , 
    value: partnershipService.id 
  }) 
)


export const partnershipServicesUIHelper = (callback) => {

  let endpoint = FETCH_PARTNERSHIP_SERVICES_ENDPOINT
  const { token } = store.getState().common.auth || {}

  let query = {}
  /*if (!_.isEmpty(keyword)){
    query = { q: keyword }
  }
  
  if (_.isNumber(param)){
    endpoint = FETCH_PARTNERSHIP_SERVICE_ENDPOINT.replace(":param", param)
  }*/

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, endpoint, {}, {'Authorization': `Bearer  ${token.access}`}, query)
    .then(resp => {
      let result = {}
      if (_.isPlainObject(resp.data)){
        result = [resp.data]
      }else {
        result = resp.data
      }
      resolve(callback(formatPartnershipServices( result )))
    })
    .catch(err => reject(err.response))
  )
}
