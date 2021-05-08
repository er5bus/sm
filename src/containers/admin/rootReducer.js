/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux"

// Reducers
import profileReducer from "./containers/profile/store/reducers"
import userReducer from "./containers/user/store/reducers"
import userGroupReducer from "./containers/user-group/store/reducers"

import serviceReducer from "./containers/service/store/reducers"

import partnershipReducer from "./containers/partnership/store/reducers"
import associateServiceReducer from "./containers/partnership/containers/associate-service/store/reducers"
import periodUnavailabilityReducer from "./containers/period-unavailability/store/reducers"

import consultantCalendarReducer from "./containers/consultant-calendar/store/reducers"
import folderReducer from "./containers/folder/store/reducers"
import eventReducer from "./containers/folder/containers/event/store/reducers"
import postCourseFollowUpReducer from "./containers/folder/containers/post-course-follow-up/store/reducers"
import skillsEvaluationFolderReducer from "./containers/folder/containers/skills-evaluation/store/reducers"
import orientationReducer from "./containers/folder/containers/orientation/store/reducers"
import familyMemberReducer from "./containers/folder/containers/family-member/store/reducers"
import folderDocumentReducer from "./containers/folder/containers/folder-document/store/reducers"

import folderGroupReducer from "./containers/folder-group/store/reducers"
import skillsEvaluationGroupReducer from "./containers/folder-group/containers/skills-evaluation/store/reducers"
import availabilitySettingStructureReducer from "./containers/availability-setting-structure/store/reducers"
import availabilitySettingUserReducer from "./containers/availability-setting-user/store/reducers"
import evaluationRubricReducer from "./containers/evaluation-rubric/store/reducers"
import assessmentLevelsReducer from "./containers/assessment-level/store/reducers"
import assessmentToolReducer from "./containers/assessment-tool/store/reducers"
import knowledgeSkillsReducer from "./containers/knowledge-skill/store/reducers"
import aptitudeSkillsReducer from "./containers/aptitude-skill/store/reducers"
import skillsReducer from "./containers/skill/store/reducers"
import schoolDropoutRoutesReducer from "./containers/school-dropout/store/reducers"


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  userGroup: userGroupReducer,
  service: serviceReducer,
  folder: folderReducer,
  event: eventReducer,
  postCourseFollowUp: postCourseFollowUpReducer,
  orientation: orientationReducer,
  folderDocument: folderDocumentReducer,
  familyMember: familyMemberReducer,
  partnership: partnershipReducer,
  folderGroup: folderGroupReducer,
  associateService: associateServiceReducer,
  evaluationRubric: evaluationRubricReducer,
  assessmentLevel: assessmentLevelsReducer,
  knowledgeSkill: knowledgeSkillsReducer,
  aptitudeSkill: aptitudeSkillsReducer,
  skill: skillsReducer,
  skillsEvaluationFolder: skillsEvaluationFolderReducer,
  skillsEvaluationGroup: skillsEvaluationGroupReducer,
  assessmentTool : assessmentToolReducer,
  schoolDropout : schoolDropoutRoutesReducer,
  periodUnavailability: periodUnavailabilityReducer,
  consultantCalendar: consultantCalendarReducer,
  availabilitySettingStructure: availabilitySettingStructureReducer,
  availabilitySettingUser: availabilitySettingUserReducer,
})

