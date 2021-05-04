import FolderGroupAppointmentDialog from "./../../components/dialog/appointment/FolderGroupAppointmentDialog"
import FolderGroupAppointmentDisplayDialog from "./../../components/dialog/appointment/FolderGroupAppointmentDisplayDialog"

import {MODULES_PERMISSIONS, DEACTIVATE,} from "../../../../../../constants"


const {FOLDER_GROUP} = MODULES_PERMISSIONS


export const folderGroupAppoitmentCreate = {
  path: "/appointment/folderGroup/new",
  component: FolderGroupAppointmentDialog,
  can: FOLDER_GROUP.permissions[DEACTIVATE]
}


export const folderGroupAppoitmentEdit = {
  path: "/appointment/folderGroup/:appointmentParam/edit",
  component: FolderGroupAppointmentDialog,
  can: FOLDER_GROUP.permissions[DEACTIVATE]
}


export const folderGroupAppoitmentShow = {
  path: "/appointment/folderGroup/:appointmentParam/show",
  component: FolderGroupAppointmentDisplayDialog,
  can: FOLDER_GROUP.permissions[DEACTIVATE]
}
