import React from "react"
import { isEqual } from "lodash"
import {useSelector} from "react-redux"

const Online = ({ children }) => {
  const { isOffline } = useSelector((state) => ({ isOffline: state.connectivity.isOffline }), isEqual)

  if (!isOffline) {
    return children
  }

  return <></>
}

export default Online
