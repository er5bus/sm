import * as routes from "./../../../routes/skills-evaluation"

import { combinePathRoutes, getBaseUrl } from "./../../../../../../../helpers"

import * as dialogRoute from "./dialog"

//export const basePath = 
export const getBasePath = () => getBaseUrl(routes.skillsEvaluationFolderList.path)
export const getDialogRoutes = () => combinePathRoutes({ path: getBasePath() }, dialogRoute)
