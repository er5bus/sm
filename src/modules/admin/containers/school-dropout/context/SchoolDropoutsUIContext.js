import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const SchoolDropoutsUIContext = createContext()

export function useSchoolDropoutsUIContext() {
  return useContext(SchoolDropoutsUIContext)
}

export const SchoolDropoutsUIConsumer = () => SchoolDropoutsUIContext.Consumer

export function SchoolDropoutsUIProvider({ schoolDropoutsUIEvents, children }) {
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
    ...schoolDropoutsUIEvents
  }

  return (
    <SchoolDropoutsUIContext.Provider value={value}>
      {children}
    </SchoolDropoutsUIContext.Provider>
  )
}
