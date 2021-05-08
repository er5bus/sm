import PostCourseFollowUpDeleteDialog from "./../components/dialog/PostCourseFollowUpDeleteDialog"
import PostCourseFollowUpsDeleteDialog from "./../components/dialog/PostCourseFollowUpsDeleteDialog"
import PostCourseFollowUpCloseDialog from "./../components/dialog/PostCourseFollowUpCloseDialog"
import {MODULES_PERMISSIONS, DEACTIVATE, CLOSE} from "../../../../../../../constants"


const {POST_COURSE_FOLLOWUP} = MODULES_PERMISSIONS


export const postCourseFollowUpDelete = {
  path: "/delete/postCourseFollowUp/:postCourseFollowUpParam",
  component: PostCourseFollowUpDeleteDialog,
  can: POST_COURSE_FOLLOWUP.permissions[DEACTIVATE]
}
export const postCourseFollowUpClose = {
  path: "/close/postCourseFollowUp/:postCourseFollowUpParam",
  component: PostCourseFollowUpCloseDialog,
  can: POST_COURSE_FOLLOWUP.permissions[CLOSE]
}

export const postCourseFollowUpsDelete = {
  path: "/delete/postCourseFollowUps",
  component: PostCourseFollowUpsDeleteDialog,
  can: POST_COURSE_FOLLOWUP.permissions[DEACTIVATE]
}
