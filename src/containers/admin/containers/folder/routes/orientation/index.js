import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"
import {FOLDER_EXIT_COURSE} from "../../../../UIHelpers"

const Orientation = lazy(() => import("../../containers/orientation/OrientationNewEdit"))
const OrientationEdit = lazy(() => import("../../containers/orientation/OrientationNewEdit"))
const OrientationShow = lazy(() => import("../../containers/orientation/OrientationShow"))
const OrientationPage = lazy(() => import("../../containers/orientation/OrientationPage"))


const { ORIENTATION } = MODULES_PERMISSIONS

const orientationBasePath = "/orientations"

export const orientationCreate = {
  path: `${orientationBasePath}/new`,
  component: Orientation,
  can: ORIENTATION.permissions[CREATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const orientationEdit = {
  path: `${orientationBasePath}/:orientationParam/update`,
  component: OrientationEdit,
  can: ORIENTATION.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const orientationShow = {
  path: `${orientationBasePath}/:orientationParam/read`,
  component: OrientationShow,
  can: ORIENTATION.permissions[VIEW],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const orientationList = {
  path: orientationBasePath,
  component: OrientationPage,
  can: ORIENTATION.permissions[VIEW],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}
