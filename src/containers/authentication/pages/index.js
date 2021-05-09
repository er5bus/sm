import {layoutRoute} from ".."
import { combinePathRoutes } from "./../../../helpers"

import * as loginRoutes from "./login/routes"
import * as forgotPasswordRoutes from "./forgot-password/routes"


// Combined routes
export const pageRoutes = combinePathRoutes({ path: layoutRoute.path }, loginRoutes, forgotPasswordRoutes)
