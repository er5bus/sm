import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const FolderDocumentsUIContext = createContext()

export function useFolderDocumentsUIContext() {
  return useContext(FolderDocumentsUIContext)
}

export const FolderDocumentsUIConsumer = FolderDocumentsUIContext.Consumer

export function FolderDocumentsUIProvider({ folderDocumentsUIFolderDocuments, children }) {
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
    ...folderDocumentsUIFolderDocuments
  }

  return (
    <FolderDocumentsUIContext.Provider value={value}>
      {children}
    </FolderDocumentsUIContext.Provider>
  )
}
