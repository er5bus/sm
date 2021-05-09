import { combineReducers } from "redux"

import { layoutRoute as authRoutes, rootReducer as authReducer } from "./authentication"


export const rootRoutes = [ authRoutes ]
export const rootReducer = combineReducers({
  common: authReducer
})
