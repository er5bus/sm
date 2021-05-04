import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall } from "./../../../../helpers"
import {isRLTLang} from "../../../../i18n"


const FETCH_PARTNERSHIP_TYPEES_ENDPOINT = "/api/pa/Reference/PartnerTypes/all"
const FETCH_PARTNERSHIP_TYPE_ENDPOINT = "/api/pa/Reference/PartnerType/:param"

const formatPartnershipTypes = (partnershipType) => partnershipType.map((partnershipType) => 
  ({ 
    label: isRLTLang() ? partnershipType.labelAr : partnershipType.labelFr , 
    value: partnershipType.id 
  }) )


export const partnershipTypeUIHelper = (callback, keyword, param) => {

  let endpoint = FETCH_PARTNERSHIP_TYPEES_ENDPOINT
  let query = {}
  if (!_.isEmpty(keyword)){
    query = { q: keyword }
  }
  
  if (_.isNumber(param)){
    endpoint = FETCH_PARTNERSHIP_TYPE_ENDPOINT.replace(":param", param)
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
      resolve(callback(formatPartnershipTypes( result )))
    })
    .catch(err => reject(err.response))
  )
}
