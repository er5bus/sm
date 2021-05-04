import { HTTP_METHODS } from "./../../../../constants"
import { makeCall } from "./../../../../helpers"
import { store } from "./../../../../configureStore"

const FETCH_ENDPOINT = "/api/aptitude-skills"

export const aptitudeSkillUIHelper = (params, fetchCallback=f=>f, dataCallback=f=>f, totalSizeCallBack=f=>f) => {

  const { token } = store.getState().common.auth || {}

  fetchCallback(true)
  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_ENDPOINT, {}, {'Authorization': `Bearer ${token.access}`}, params )
    .then(resp => {
      resolve(dataCallback( resp.data.results ))
      fetchCallback(false)
      totalSizeCallBack(resp.data.count)
    })
    .catch(() => reject(dataCallback([])))
  )
}
