import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const FoldersUIContext = createContext()

export function useFoldersUIContext() {
  return useContext(FoldersUIContext)
}


export const FoldersUIConsumer = () => FoldersUIContext.Consumer

export function FoldersUIProvider({ foldersUIEvents, children }) {

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
    ...foldersUIEvents
  }

  return (
    <FoldersUIContext.Provider value={value}>
      {children}
    </FoldersUIContext.Provider>
  )
}
