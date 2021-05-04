import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"
import {FOLDER_EXIT_COURSE} from "../../../../UIHelpers"

const PostCourseFollowUpNew = lazy(() => import("../../containers/post-course-follow-up/PostCourseFollowUpNewEdit"))
const PostCourseFollowUpEdit = lazy(() => import("../../containers/post-course-follow-up/PostCourseFollowUpNewEdit"))
const PostCourseFollowUpShow = lazy(() => import("../../containers/post-course-follow-up/PostCourseFollowUpShow"))
const PostCourseFollowUpPage = lazy(() => import("../../containers/post-course-follow-up/PostCourseFollowUpPage"))


const { ORIENTATION } = MODULES_PERMISSIONS

const postCourseFollowUpBasePath = "/post-course-follow-up"

export const postCourseFollowUpCreate = {
  path: `${postCourseFollowUpBasePath}/new`,
  component: PostCourseFollowUpNew,
  can: ORIENTATION.permissions[CREATE],
  showWhen: ({ status }) => status === FOLDER_EXIT_COURSE
}

export const postCourseFollowUpEdit = {
  path: `${postCourseFollowUpBasePath}/:postCourseFollowUpParam/update`,
  component: PostCourseFollowUpEdit,
  can: ORIENTATION.permissions[UPDATE],
  showWhen: ({ status }) => status === FOLDER_EXIT_COURSE
}

export const postCourseFollowUpShow = {
  path: `${postCourseFollowUpBasePath}/:postCourseFollowUpParam/read`,
  component: PostCourseFollowUpShow,
  can: ORIENTATION.permissions[VIEW],
  showWhen: ({ status }) => status === FOLDER_EXIT_COURSE
}

export const postCourseFollowUpList = {
  path: postCourseFollowUpBasePath,
  component: PostCourseFollowUpPage,
  can: ORIENTATION.permissions[VIEW],
  showWhen: ({ status }) => status === FOLDER_EXIT_COURSE
}
