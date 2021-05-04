import OrientationDeleteDialog from "../components/dialog/OrientationDeleteDialog"
import OrientationsDeleteDialog from "../components/dialog/OrientationsDeleteDialog"
import OrientationCloseDialog from "../components/dialog/OrientationCloseDialog"
import {MODULES_PERMISSIONS, DEACTIVATE, CLOSE} from "../../../../../../../constants"


const {ORIENTATION} = MODULES_PERMISSIONS


export const orientationDelete = {
  path: "/delete/orientation/:orientationParam",
  component: OrientationDeleteDialog,
  can: ORIENTATION.permissions[DEACTIVATE]
}
export const orientationClose = {
  path: "/close/orientation/:orientationParam",
  component: OrientationCloseDialog,
  can: ORIENTATION.permissions[CLOSE]
}

export const orientationsDelete = {
  path: "/delete/orientations",
  component: OrientationsDeleteDialog,
  can: ORIENTATION.permissions[DEACTIVATE]
}
