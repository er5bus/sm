import AvailabilitySettingUserDeleteDialog from "./../components/dialog/AvailabilitySettingUserDeleteDialog"
import AvailabilitySettingUsersDeleteDialog from "./../components/dialog/AvailabilitySettingUsersDeleteDialog"
import {MODULES_PERMISSIONS, DEACTIVATE} from "../../../../../constants"


const {AVAILABILITY_SETTING_USER} = MODULES_PERMISSIONS


export const availabilitySettingUserDelete = {
  path: "/delete/availabilitySettingUser/:param",
  component: AvailabilitySettingUserDeleteDialog,
  can: AVAILABILITY_SETTING_USER.permissions[DEACTIVATE]
}

export const availabilitySettingUsersDelete = {
  path: "/delete/availabilitySettingUsers",
  component: AvailabilitySettingUsersDeleteDialog,
  can: AVAILABILITY_SETTING_USER.permissions[DEACTIVATE]
}
