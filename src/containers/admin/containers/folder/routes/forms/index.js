import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import * as folderRoutes from "./folder"
import * as dialogRoutes from "./../dialogs/folder/status"
import * as documentRoutes from "./../document"
import * as eventRoutes from "./../event"
import * as orientationRoutes from "./../orientation"
import * as familyMemberRoutes from "./../family-member"
import * as skillsEvaluationRoutes from "./../skills-evaluation"
import * as postCourseFollowUpRoutes from "./../post-course-follow-up"

export default combinePathRoutes(
  {
    path: routes.folderEdit.path
  },
  {
    ...dialogRoutes,
    ...folderRoutes,
    ...documentRoutes,
    ...eventRoutes,
    ...familyMemberRoutes,
    ...orientationRoutes,
    ...skillsEvaluationRoutes,
    ...postCourseFollowUpRoutes
  }
)
