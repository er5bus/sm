import {lazy} from "react"

import { MODULES_PERMISSIONS, VIEW } from "../../../../../../constants"

const FolderGroupDisplay = lazy(() => import("./../../components/display/FolderGroup"))
const FolderGroupAppointments = lazy(() => import("./../../components/display/FolderGroupAppointments"))


const { FOLDER_GROUP } = MODULES_PERMISSIONS


export const folderGroupDisplay = {
  path: "/folder-group-information",
  component: FolderGroupDisplay,
  can: FOLDER_GROUP.permissions[VIEW]
}


export const folderGroupAppointments = {
  path: "/folder-group-appointments",
  component: FolderGroupAppointments,
  can: FOLDER_GROUP.permissions[VIEW]
}
