import routes from "./../../../routes"

import { combinePathRoutes } from "./../../../../../helpers"

import * as dialogRoute from "./dialog"


export const basePath = routes.aptitudeSkillList.path
export const dialogRoutes = combinePathRoutes({ path: basePath }, dialogRoute)
