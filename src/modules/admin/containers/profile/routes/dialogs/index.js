import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import AppointmentDisplayDialog from "./../../components/dialog/AppointmentDetailsDialog"
import DownloadScheduleDialog from "./../../components/dialog/DownloadScheduleDialog"

const showAppointmentDialog = {
  path: "/show/:param",
  component: AppointmentDisplayDialog,
}

const showDownloadScheduleDialog = {
  path: "/download-schedule",
  component: DownloadScheduleDialog,
}

export default combinePathRoutes(
  { path: routes.myAppointments.path },
  { 
    showAppointmentDialog, 
    showDownloadScheduleDialog
  }
)
