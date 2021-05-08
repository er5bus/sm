import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const fetchUserAvailabilities = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_AVAILABILITIES_INIT,
        success: ACTIONS.FETCH_AVAILABILITIES_SUCCEDED,
        fail: ACTIONS.FETCH_AVAILABILITIES_FAILED
      },
      endpoint: ENDPOINTS.AVAILABILITIES,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const updateAvailabilitySettings = (payload) => 
  ({
    type: ACTIONS.UPDATE_AVAILABILITY_SETTINGS,
    payload
  })


export const loadPrevAvailabilities = () =>
  ({
    type: ACTIONS.LOAD_PREV_AVAILABILITIES
  })


export const loadNextAvailabilities = () => 
  ({
    type: ACTIONS.LOAD_NEXT_AVAILABILITIES
  })
