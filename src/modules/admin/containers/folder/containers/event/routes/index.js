import * as routes from "./../../../routes/event"

import { combinePathRoutes, getBaseUrl } from "./../../../../../../../helpers"

import * as dialogRoute from "./dialog"

export const getBasePath = () => getBaseUrl(routes.eventList.path)
export const getDialogRoutes = () => combinePathRoutes({ path: getBasePath() }, dialogRoute)
