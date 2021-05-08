import routes from "./../../../../routes"

import { combinePathRoutes } from "./../../../../../../helpers"

import * as dialogRoute from "./dialog"

export const basePath = routes.assessmentToolList.path
export const assessmentToolRoutes = combinePathRoutes({ path: basePath }, dialogRoute)
