import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const AssociateServicesUIContext = createContext()

export function useAssociateServicesUIContext() {
  return useContext(AssociateServicesUIContext)
}

export const AssociateServicesUIConsumer = () => AssociateServicesUIContext.Consumer

export function AssociateServicesUIProvider({ associateServicesUIAssociateServices, children }) {
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
    ...associateServicesUIAssociateServices
  }

  return (
    <AssociateServicesUIContext.Provider value={value}>
      {children}
    </AssociateServicesUIContext.Provider>
  )
}
