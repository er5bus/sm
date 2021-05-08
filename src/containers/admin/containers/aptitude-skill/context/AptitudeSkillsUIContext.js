import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const AptitudeSkillsUIContext = createContext()

export function useAptitudeSkillsUIContext() {
  return useContext(AptitudeSkillsUIContext)
}

export const AptitudeSkillsUIConsumer = () => AptitudeSkillsUIContext.Consumer

export function AptitudeSkillsUIProvider({ aptitudeSkillsUIEvents, children }) {
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
    ...aptitudeSkillsUIEvents
  }

  return (
    <AptitudeSkillsUIContext.Provider value={value}>
      {children}
    </AptitudeSkillsUIContext.Provider>
  )
}
