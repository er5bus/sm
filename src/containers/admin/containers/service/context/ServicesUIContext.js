import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const ServicesUIContext = createContext()

export function useServicesUIContext() {
  return useContext(ServicesUIContext)
}

export const ServicesUIConsumer = () => ServicesUIContext.Consumer

export function ServicesUIProvider({ servicesUIEvents, children }) {
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
    ...servicesUIEvents
  }

  return (
    <ServicesUIContext.Provider value={value}>
      {children}
    </ServicesUIContext.Provider>
  )
}
