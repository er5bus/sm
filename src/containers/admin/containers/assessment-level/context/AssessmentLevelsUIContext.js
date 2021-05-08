import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const AssessmentLevelsUIContext = createContext()

export function useAssessmentLevelsUIContext() {
  return useContext(AssessmentLevelsUIContext)
}

export const AssessmentLevelsUIConsumer = () => AssessmentLevelsUIContext.Consumer

export function AssessmentLevelsUIProvider({ assessmentLevelsUIEvents, children }) {
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
    ...assessmentLevelsUIEvents
  }

  return (
    <AssessmentLevelsUIContext.Provider value={value}>
      {children}
    </AssessmentLevelsUIContext.Provider>
  )
}
