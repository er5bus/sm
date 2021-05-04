import * as actionsRoutes from "./actions"

import routes from "./../../../../../routes"
import { combinePathRoutes } from "./../../../../../../../helpers"


export default combinePathRoutes(
  {
    path: routes.folderList.path
  },
  {
    ...actionsRoutes
  }
)
