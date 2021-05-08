import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"
import {isRLTLang} from "../../../../i18n"

const FETCH_USERS_ENDPOINT = "/api/users/all"


const formatUsers = (users) => users.map((user) => ({ 
  label: !isRLTLang() ? `${user.firstName} ${user.lastName}` : `${user.firstNameAr} ${user.lastNameAr}`, 
  value: user.id,
  ...user
}))

export const userUIHelper = (callback=f=>f) => {

  const { token } = store.getState().common.auth || {}

  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_USERS_ENDPOINT, {}, {'Authorization': `Bearer ${token.access}`}, {} )
    .then(resp => resolve(callback(formatUsers( resp.data ))))
    .catch(() => reject(callback([])))
  )
}
