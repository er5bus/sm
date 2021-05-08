import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const AvailabilitySettingStructuresUIContext = createContext()

export function useAvailabilitySettingStructuresUIContext() {
  return useContext(AvailabilitySettingStructuresUIContext)
}

export const AvailabilitySettingStructuresUIConsumer = () => AvailabilitySettingStructuresUIContext.Consumer

export function AvailabilitySettingStructuresUIProvider({ availabilitySettingStructuresUIEvents, children }) {
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
    ...availabilitySettingStructuresUIEvents
  }

  return (
    <AvailabilitySettingStructuresUIContext.Provider value={value}>
      {children}
    </AvailabilitySettingStructuresUIContext.Provider>
  )
}
