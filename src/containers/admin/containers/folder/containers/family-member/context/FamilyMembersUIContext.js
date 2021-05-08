import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const FamilyMembersUIContext = createContext()

export function useFamilyMembersUIContext() {
  return useContext(FamilyMembersUIContext)
}

export const FamilyMembersUIConsumer = FamilyMembersUIContext.Consumer

export function FamilyMembersUIProvider({ familyMembersUIFamilyMembers, children }) {
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
    ...familyMembersUIFamilyMembers
  }

  return (
    <FamilyMembersUIContext.Provider value={value}>
      {children}
    </FamilyMembersUIContext.Provider>
  )
}
