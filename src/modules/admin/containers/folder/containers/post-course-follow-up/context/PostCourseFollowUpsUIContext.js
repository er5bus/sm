import React, { createContext, useContext, useState, useCallback } from "react"
import { isEqual, isFunction } from "lodash"

const PostCourseFollowUpsUIContext = createContext()

export function usePostCourseFollowUpsUIContext() {
  return useContext(PostCourseFollowUpsUIContext)
}

export const PostCourseFollowUpsUIConsumer = PostCourseFollowUpsUIContext.Consumer

export function PostCourseFollowUpsUIProvider({ postCourseFollowUpsUIPostCourseFollowUps, children }) {
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
    ...postCourseFollowUpsUIPostCourseFollowUps
  }

  return (
    <PostCourseFollowUpsUIContext.Provider value={value}>
      {children}
    </PostCourseFollowUpsUIContext.Provider>
  )
}
