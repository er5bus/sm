import { lazy } from "react"
import {VIEW, MODULES_PERMISSIONS} from "../../../../constants"

const MyAppointments = lazy(() => import("./../../containers/profile/MyAppointments"))
const AccountInformation = lazy(() => import("./../../containers/profile/AccountInformation"))
const UpdateAccount = lazy(() => import("./../../containers/profile/UpdateProfile"))

const { FOLDER } = MODULES_PERMISSIONS

export const myAppointments = {
  path: "/my-appointments",
  component: MyAppointments,
  can: FOLDER.permissions[VIEW]
}

export const profile = {
  path: "/profile",
  component: AccountInformation,
}

export const updateProfile = {
  path: "/update-profile",
  component: UpdateAccount,
}
