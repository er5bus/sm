import routes from "./../../../../routes"

import { combinePathRoutes } from "./../../../../../../helpers"

import * as skillsRoute from "./evaluationRubric"
import * as assessmentToolRoute from "./assessmentTool"
import * as assessmentLevelRoute from "./assessmentLevel"

const basePath = routes.assessmentToolShow.path
export default combinePathRoutes({ path: basePath }, skillsRoute, assessmentLevelRoute, assessmentToolRoute)
