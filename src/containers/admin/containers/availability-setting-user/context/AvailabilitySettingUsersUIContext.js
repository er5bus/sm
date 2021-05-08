import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const AvailabilitySettingUsersUIContext = createContext()

export function useAvailabilitySettingUsersUIContext() {
  return useContext(AvailabilitySettingUsersUIContext)
}

export const AvailabilitySettingUsersUIConsumer = () => AvailabilitySettingUsersUIContext.Consumer

export function AvailabilitySettingUsersUIProvider({ availabilitySettingUsersUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState({})
  const [ids, setIds] = useState([])
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams)
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams
      }

      return nextQueryParams
    })
  }, [])

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    ...availabilitySettingUsersUIEvents
  }

  return (
    <AvailabilitySettingUsersUIContext.Provider value={value}>
      {children}
    </AvailabilitySettingUsersUIContext.Provider>
  )
}
