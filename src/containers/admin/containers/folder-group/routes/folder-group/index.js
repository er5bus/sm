import routes from "./../../../../routes"

import { combinePathRoutes } from "./../../../../../../helpers"

import * as dialogRoute from "./dialog"

export const basePath = routes.folderGroupList.path
export const folderGroupRoutes = combinePathRoutes({ path: basePath }, dialogRoute)
