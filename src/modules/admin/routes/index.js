import * as dashboardRoutes from "./dashboard"
import * as homeRoutes from "./home"
import * as profileRoutes from "./profile"
import * as userRoutes from "./user"
import * as userGroupRoutes from "./user-group"
import * as folderGroupRoutes from "./folder-group"
import * as folderRoutes from "./folder"
import * as serviceRoutes from "./service"
import * as partnershipRoutes from "./partnership"
import * as evaluationRubricRoutes from "./evaluation-rubric"
import * as assessmentLevelsRoutes from "./assessment-level"
import * as knowledgeSkillsRoutes from "./knowledge-skill"
import * as aptitudeSkillsRoutes from "./aptitude-skill"
import * as skillsRoutes from "./skill"
import * as schoolDropoutRoutes from "./school-dropout"
import * as assessmentRoutes from "./assessment-tool"
import * as periodUnavailabilityRoutes from "./period-unavailability"
import * as consultantCalendarRoutes from "./consultant-calendar"
import * as availabilitySettingsStructureRoutes from "./availability-setting-structure"
import * as availabilitySettingsUserRoutes from "./availability-setting-user"

import { combinePathRoutes } from "./../../../helpers"

import baseRoutes from "./../../../routes"

const objectProps = { path: baseRoutes.admin.path, anonymous: true }

// Combined routes
export default combinePathRoutes(
  objectProps, 
  homeRoutes, 
  profileRoutes, 
  dashboardRoutes, 
  userRoutes,
  userGroupRoutes,
  folderRoutes,
  serviceRoutes,
  partnershipRoutes,
  evaluationRubricRoutes,
  folderGroupRoutes,
  assessmentLevelsRoutes,
  knowledgeSkillsRoutes,
  aptitudeSkillsRoutes,
  skillsRoutes,
  assessmentRoutes,
  schoolDropoutRoutes,
  periodUnavailabilityRoutes,
  consultantCalendarRoutes,
  availabilitySettingsStructureRoutes,
  availabilitySettingsUserRoutes
)
