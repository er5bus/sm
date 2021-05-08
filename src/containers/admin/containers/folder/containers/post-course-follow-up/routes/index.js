import * as routes from "./../../../routes/post-course-follow-up"

import { combinePathRoutes, getBaseUrl } from "./../../../../../../../helpers"

import * as dialogRoute from "./dialog"

//export const basePath = 
export const getBasePath = () => getBaseUrl(routes.postCourseFollowUpList.path)
export const getDialogRoutes = () => combinePathRoutes({ path: getBasePath() }, dialogRoute)
