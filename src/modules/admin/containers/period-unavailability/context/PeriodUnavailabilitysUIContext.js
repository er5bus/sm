import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const PeriodUnavailabilitysUIContext = createContext()

export function usePeriodUnavailabilitysUIContext() {
  return useContext(PeriodUnavailabilitysUIContext)
}

export const PeriodUnavailabilitysUIConsumer = () => PeriodUnavailabilitysUIContext.Consumer

export function PeriodUnavailabilitysUIProvider({ periodUnavailabilitysUIEvents, children }) {
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
    ...periodUnavailabilitysUIEvents
  }

  return (
    <PeriodUnavailabilitysUIContext.Provider value={value}>
      {children}
    </PeriodUnavailabilitysUIContext.Provider>
  )
}
