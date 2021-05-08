import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import * as folderRoutes from "./folderGroup"
import * as skillsEvaluationRoutes from "./../skills-evaluation"

export default combinePathRoutes(
  {
    path: routes.folderGroupShow.path
  },
  {
    ...folderRoutes,
    ...skillsEvaluationRoutes
  }
)
