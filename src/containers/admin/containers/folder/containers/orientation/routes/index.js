import * as routes from "../../../routes/orientation"

import { combinePathRoutes, getBaseUrl } from "../../../../../../../helpers"

import * as dialogRoute from "./dialog"

//export const basePath = 
export const getBasePath = () => getBaseUrl(routes.orientationList.path)
export const getDialogRoutes = () => combinePathRoutes({ path: getBasePath() }, dialogRoute)
