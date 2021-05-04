import routes from "./../../../../routes"

import { combinePathRoutes } from "./../../../../../../helpers"

import * as skillRoute from "./skill"

const basePath = routes.skillEdit.path
export default combinePathRoutes({ path: basePath }, skillRoute)
