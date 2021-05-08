import { combinePathRoutes } from "./../../../helpers"

import * as loginRoutes from "./login/routes"


// Combined routes
export const rootRoutes = combinePathRoutes({ path: "/auth" }, loginRoutes)
