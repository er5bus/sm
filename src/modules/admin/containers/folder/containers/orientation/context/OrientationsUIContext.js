import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const OrientationsUIContext = createContext()

export function useOrientationsUIContext() {
  return useContext(OrientationsUIContext)
}

export const OrientationsUIConsumer = OrientationsUIContext.Consumer

export function OrientationsUIProvider({ orientationsUIOrientations, children }) {
  const [queryParams, setQueryParamsBase] = useState()
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
    ...orientationsUIOrientations
  }

  return (
    <OrientationsUIContext.Provider value={value}>
      {children}
    </OrientationsUIContext.Provider>
  )
}
