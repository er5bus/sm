import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const SkillsEvaluationsUIContext = createContext()

export function useSkillsEvaluationsUIContext() {
  return useContext(SkillsEvaluationsUIContext)
}

export const SkillsEvaluationsUIConsumer = SkillsEvaluationsUIContext.Consumer

export function SkillsEvaluationsUIProvider({ skillsEvaluationsUISkillsEvaluations, children }) {
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
    ...skillsEvaluationsUISkillsEvaluations
  }

  return (
    <SkillsEvaluationsUIContext.Provider value={value}>
      {children}
    </SkillsEvaluationsUIContext.Provider>
  )
}
