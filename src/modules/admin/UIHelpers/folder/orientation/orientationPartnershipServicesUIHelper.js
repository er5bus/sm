import _ from "lodash"

import { AR, FR, HTTP_METHODS } from "../../../../../constants"
import { getAttr, makeCall } from "../../../../../helpers"
import { store } from "../../../../../configureStore"


const FETCH_SERVICES_ENDPOINT = "/api/partnerships/:param/service-details/all"

const formatOrientationPartnershipServices = (orientationPartnershipServices) => orientationPartnershipServices.map((orientationPartnership) => 
  ({ 
    label: getAttr(orientationPartnership, { [AR]: "serviceDisplay.labelAr", [FR]: "serviceDisplay.labelFr" }, "----") , 
    value: orientationPartnership.id 
  }) 
)


export const orientationPartnershipServicesUIHelper = (callback, param) => {

  if (!_.isInteger(param) || !param){
    callback([])
    return
  }

  let endpoint = FETCH_SERVICES_ENDPOINT.replace(":param", param)
  const { token } = store.getState().common.auth || {}

  let query = {}
  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, endpoint, {}, {'Authorization': `Bearer  ${token.access}`}, query)
    .then(resp => {
      let result = {}
      if (_.isPlainObject(resp.data)){
        result = [resp.data]
      }else {
        result = resp.data
      }
      resolve(callback(formatOrientationPartnershipServices( result )))
    })
    .catch(err => reject(err.response))
  )
}
