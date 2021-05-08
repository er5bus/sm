import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const SkillsUIContext = createContext()

export const useSkillsUIContext = () =>  useContext(SkillsUIContext)

export const SkillsUIConsumer = () => SkillsUIContext.Consumer

export const SkillsUIProvider = ({ skillsUIEvents, children }) => {
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
    ...skillsUIEvents
  }

  return (
    <SkillsUIContext.Provider value={value}>
      {children}
    </SkillsUIContext.Provider>
  )
}
