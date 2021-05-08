import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const KnowledgeSkillsUIContext = createContext()

export function useKnowledgeSkillsUIContext() {
  return useContext(KnowledgeSkillsUIContext)
}

export const KnowledgeSkillsUIConsumer = () => KnowledgeSkillsUIContext.Consumer

export function KnowledgeSkillsUIProvider({ knowledgeSkillsUIEvents, children }) {
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
    ...knowledgeSkillsUIEvents
  }

  return (
    <KnowledgeSkillsUIContext.Provider value={value}>
      {children}
    </KnowledgeSkillsUIContext.Provider>
  )
}
