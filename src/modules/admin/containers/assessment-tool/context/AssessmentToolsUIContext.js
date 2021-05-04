import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const AssessmentToolsUIContext = createContext()

export function useAssessmentToolsUIContext() {
  return useContext(AssessmentToolsUIContext)
}

export function AssessmentToolsUIProvider({ assessmentToolsUIEvents, children }) {
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
    ...assessmentToolsUIEvents
  }

  return (
    <AssessmentToolsUIContext.Provider value={value}>
      {children}
    </AssessmentToolsUIContext.Provider>
  )
}
