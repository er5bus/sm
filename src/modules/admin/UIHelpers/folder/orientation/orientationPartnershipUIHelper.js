import _ from "lodash"

import { HTTP_METHODS } from "../../../../../constants"
import { makeCall } from "../../../../../helpers"
import {isRLTLang} from "../../../../../i18n"
import { store } from "../../../../../configureStore"


const FETCH_PARTNERSHIP_SERVICES_ENDPOINT = "/api/partnerships/all"
//const FETCH_PARTNERSHIP_SERVICE_ENDPOINT = "/api/services/:param"

const formatOrientationPartnerships = (orientationPartnerships) => orientationPartnerships.map((orientationPartnership) => 
  ({ 
    label: isRLTLang() ? orientationPartnership.nameAr : orientationPartnership.nameFr , 
    value: orientationPartnership.id 
  }) 
)


export const orientationPartnershipsUIHelper = (callback) => {

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
      resolve(callback(formatOrientationPartnerships( result )))
    })
    .catch(err => reject(err.response))
  )
}
