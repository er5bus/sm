import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const FolderGroupsUIContext = createContext()

export function useFolderGroupsUIContext() {
  return useContext(FolderGroupsUIContext)
}

export const FolderGroupsUIConsumer = () => FolderGroupsUIContext.Consumer

export function FolderGroupsUIProvider({ folderGroupsUIEvents, children }) {
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
    ...folderGroupsUIEvents
  }

  return (
    <FolderGroupsUIContext.Provider value={value}>
      {children}
    </FolderGroupsUIContext.Provider>
  )
}
