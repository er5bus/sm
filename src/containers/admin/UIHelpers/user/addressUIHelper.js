import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall } from "./../../../../helpers"
import {isRLTLang} from "../../../../i18n"


const FETCH_ADDRESSES_ENDPOINT = "/api/pa/head_addresses"
const FETCH_ADDRESS_ENDPOINT = "/api/pa/head_addresses/:param"

const formatAddresses = (addresses) => addresses.map((address) => ({ label: isRLTLang() ? address.arabic : address.french , value: address.id }) )


export const addressUIHelper = (callback, keyword, param) => {

  let endpoint = FETCH_ADDRESSES_ENDPOINT
  let query = {}
  if (!_.isEmpty(keyword)){
    query = { q: keyword }
  }
  
  if (_.isNumber(param)){
    endpoint = FETCH_ADDRESS_ENDPOINT.replace(":param", param)
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
      resolve(callback(formatAddresses( result )))
    })
    .catch(err => reject(err.response))
  )
}
