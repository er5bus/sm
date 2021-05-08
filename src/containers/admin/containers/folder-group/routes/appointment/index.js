import { folderGroupAppointments } from "./../show/folderGroup"

import { combinePathRoutes, getBaseUrl } from "./../../../../../../helpers"

import * as dialogRoute from "./dialog"

export const getAppointmentDialogs = () => combinePathRoutes({ path: getBaseUrl(folderGroupAppointments.path) }, dialogRoute)
