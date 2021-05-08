import { combinePathRoutes, getBaseUrl } from "./../../../../../../../helpers"
import * as routes from "./../../../routes/service"
import * as dialogRoute from "./dialog"


export const getBasePath = () => getBaseUrl(routes.serviceList.path)

export const getDialogRoutes = () => combinePathRoutes({ path: getBasePath() }, dialogRoute)
