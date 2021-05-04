import _ from "lodash"

import { HTTP_METHODS } from "./../../../../constants"
import { makeExternalCall } from "./../../../../helpers"
import {isRLTLang} from "../../../../i18n"


const FETCH_PARTNERSHIP_THEMESES_ENDPOINT = "/api/pa/Convention-contract-Types/all"
const FETCH_PARTNERSHIP_THEMES_ENDPOINT = "/api/pa/Convention-contract-Type/:param"

const formatPartnershipThemes = (partnershipThemes) => partnershipThemes.map((partnershipTheme) => 
  ({ 
    label: isRLTLang() ? partnershipTheme.thematicAr : partnershipTheme.thematicFr , 
    value: partnershipTheme.id 
  }) 
)


export const partnershipThemesUIHelper = (callback, keyword, param) => {

  let endpoint = FETCH_PARTNERSHIP_THEMESES_ENDPOINT
  let query = {}
  if (!_.isEmpty(keyword)){
    query = { q: keyword }
  }
  
  if (_.isNumber(param)){
    endpoint = FETCH_PARTNERSHIP_THEMES_ENDPOINT.replace(":param", param)
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
      resolve(callback(formatPartnershipThemes( result )))
    })
    .catch(err => reject(err.response))
  )
}
