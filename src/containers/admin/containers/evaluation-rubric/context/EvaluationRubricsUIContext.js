import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const EvaluationRubricsUIContext = createContext()

export function useEvaluationRubricsUIContext() {
  return useContext(EvaluationRubricsUIContext)
}

export const EvaluationRubricsUIConsumer = () => EvaluationRubricsUIContext.Consumer

export function EvaluationRubricsUIProvider({ evaluationRubricsUIEvents, children }) {
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
    ...evaluationRubricsUIEvents
  }

  return (
    <EvaluationRubricsUIContext.Provider value={value}>
      {children}
    </EvaluationRubricsUIContext.Provider>
  )
}
