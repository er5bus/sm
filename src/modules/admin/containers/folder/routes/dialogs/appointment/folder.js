import routes from "./../../../../../routes"
import { combinePathRoutes } from "./../../../../../../../helpers"

import FolderAppointmentDialog from "./../../../components/dialog/appointment/FolderAppointmentDialog"
import FolderAppointmentDisplayDialog from "./../../../components/dialog/appointment/FolderAppointmentDetailsDialog"
import DownloadScheduleDialog from "./../../../components/dialog/appointment/DownloadScheduleDialog"

import {MODULES_PERMISSIONS, ACTIVATE} from "../../../../../../../constants"

const { FOLDER } = MODULES_PERMISSIONS

const folderCreateAppointmentDialog = {
  path: "/appointments/create",
  component: FolderAppointmentDialog,
  can: FOLDER.permissions[ACTIVATE]
}

const folderEditAppointmentDialog = {
  path: "/appointments/edit/:appointmentParam",
  component: FolderAppointmentDialog,
  can: FOLDER.permissions[ACTIVATE]
}

const folderShowAppointmentDialog = {
  path: "/appointments/show/:appointmentParam",
  component: FolderAppointmentDisplayDialog,
  can: FOLDER.permissions[ACTIVATE]
}

const showDownloadScheduleDialog = {
  path: "/download-schedule",
  component: DownloadScheduleDialog,
}

export default combinePathRoutes(
  { path : routes.folderAppointments.path },
  { 
    showDownloadScheduleDialog,
    folderCreateAppointmentDialog,
    folderEditAppointmentDialog,
    folderShowAppointmentDialog
  }
)
