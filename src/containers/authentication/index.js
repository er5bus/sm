import { combineReducers } from "redux"
import {lazy} from "react"

import authReducer from "./store/reducers"

// Combined routes
export const layoutRoute = {
  path: "/auth",
  component: lazy(() =>  import("./layout/Layout"))
}


export const rootReducer = combineReducers({
  auth: authReducer
})
