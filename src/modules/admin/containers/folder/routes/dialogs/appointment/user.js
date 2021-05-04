import routes from "./../../../../../routes"
import { combinePathRoutes } from "./../../../../../../../helpers"

import UserAppointmentFormDialog from "./../../../components/dialog/appointment/UserAppointmentDialog"
import UserAppointmentDisplayDialog from "./../../../components/dialog/appointment/UserAppointmentDetailsDialog"

import {MODULES_PERMISSIONS, ACTIVATE} from "../../../../../../../constants"

const { FOLDER } = MODULES_PERMISSIONS

const userCreateAppointmentDialog = {
  path: "/appointments/create",
  component: UserAppointmentFormDialog,
  can: FOLDER.permissions[ACTIVATE]
}

const userEditAppointmentDialog = {
  path: "/appointments/edit/:appointmentParam",
  component: UserAppointmentFormDialog,
  can: FOLDER.permissions[ACTIVATE]
}

const userShowAppointmentDialog = {
  path: "/appointments/show/:appointmentParam",
  component: UserAppointmentDisplayDialog,
  can: FOLDER.permissions[ACTIVATE]
}

export default combinePathRoutes(
  { path: routes.userAppointments.path },
  { 
    userCreateAppointmentDialog, 
    userEditAppointmentDialog,
    userShowAppointmentDialog
  }
)
