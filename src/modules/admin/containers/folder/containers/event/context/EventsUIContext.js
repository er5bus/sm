import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const EventsUIContext = createContext()

export function useEventsUIContext() {
  return useContext(EventsUIContext)
}

export function EventsUIProvider({ eventsUIEvents, children }) {
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
    ...eventsUIEvents
  }

  return (
    <EventsUIContext.Provider value={value}>
      {children}
    </EventsUIContext.Provider>
  )
}
