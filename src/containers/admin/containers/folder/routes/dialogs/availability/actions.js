import UserAvailabilityDialog from "./../../../components/dialog/availability/UserAvailabilityDialog"


import {MODULES_PERMISSIONS, ACTIVATE} from "../../../../../../../constants"


const { FOLDER } = MODULES_PERMISSIONS


export const userConfirmAvailability = {
  path: "/confirm-availability",
  component: UserAvailabilityDialog,
  can: FOLDER.permissions[ACTIVATE]
}
