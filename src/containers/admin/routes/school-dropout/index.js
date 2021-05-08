import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const SchoolDropouts = lazy(() => import("../../containers/school-dropout/SchoolDropoutNewEdit"))
const SchoolDropoutsEdit = lazy(() => import("../../containers/school-dropout/SchoolDropoutNewEdit"))
const SchoolDropoutsShow = lazy(() => import("../../containers/school-dropout/SchoolDropoutShow"))
const SchoolDropoutsPage = lazy(() => import("../../containers/school-dropout/SchoolDropoutPage"))

const { SCHOOL_DROPOUT } = MODULES_PERMISSIONS

export const schoolDropoutCreate = {
  path: "/school-dropouts/new",
  component: SchoolDropouts,
  can: SCHOOL_DROPOUT.permissions[CREATE],
  exact: true,
}

export const schoolDropoutEdit = {
  path: "/school-dropouts/:param/edit",
  component: SchoolDropoutsEdit,
  can: SCHOOL_DROPOUT.permissions[UPDATE]
}

export const schoolDropoutShow = {
  path: "/school-dropouts/:param/show",
  component: SchoolDropoutsShow,
  can: SCHOOL_DROPOUT.permissions[VIEW]
}

export const schoolDropoutList = {
  path: "/school-dropouts",
  component: SchoolDropoutsPage,
  can: SCHOOL_DROPOUT.permissions[VIEW]
}
