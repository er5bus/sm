import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import * as serviceRoutes from "./../service"

export default combinePathRoutes(
  {
    path: routes.partnershipShow.path
  },
  {
    ...serviceRoutes
  }
)
