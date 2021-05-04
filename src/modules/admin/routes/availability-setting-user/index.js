import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const AvailabilitySettingUsersNew = lazy(() => import("../../containers/availability-setting-user/AvailabilitySettingUserNewEdit"))
const AvailabilitySettingUsersEdit = lazy(() => import("../../containers/availability-setting-user/AvailabilitySettingUserNewEdit"))
const AvailabilitySettingUsersShow = lazy(() => import("../../containers/availability-setting-user/AvailabilitySettingUserShow"))
const AvailabilitySettingUsersPage = lazy(() => import("../../containers/availability-setting-user/AvailabilitySettingUserPage"))

const { ASSESSMENT_TOOL } = MODULES_PERMISSIONS

export const availabilitySettingUserCreate = {
  path: "/availability-setting-user/new",
  component: AvailabilitySettingUsersNew,
  can: ASSESSMENT_TOOL.permissions[CREATE],
  exact: true,
}

export const availabilitySettingUserEdit = {
  path: "/availability-setting-user/:param/edit",
  component: AvailabilitySettingUsersEdit,
  can: ASSESSMENT_TOOL.permissions[UPDATE]
}

export const availabilitySettingUserShow = {
  path: "/availability-setting-user/:param/show",
  component: AvailabilitySettingUsersShow,
  can: ASSESSMENT_TOOL.permissions[VIEW]
}

export const availabilitySettingUserList = {
  path: "/availability-setting-user",
  component: AvailabilitySettingUsersPage,
  can: ASSESSMENT_TOOL.permissions[VIEW]
}
