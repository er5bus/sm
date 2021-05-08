import { combineReducers } from "redux"

import { rootRoutes as authRoutes, rootReducer as authReducer } from "./authentication"


export const rootRoutes = Object.assign({}, authRoutes)
export const rootReducer = combineReducers({
  common: authReducer
})
