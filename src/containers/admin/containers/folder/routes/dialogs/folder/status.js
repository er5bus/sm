import {lazy} from "react"
import {MODULES_PERMISSIONS, UPDATE} from "../../../../../../../constants"

const FolderJustifiedDialog = lazy(() => import("./../../../components/dialog/folder/FolderJustifiedDialog"))
const FolderBackToBeingProcessedDialog = lazy(() => import("./../../../components/dialog/folder/FolderBackToBeingProcessedDialog"))

const { FOLDER } = MODULES_PERMISSIONS

export const justifiedFolder = {
  path: "/justified-folder",
  component: FolderJustifiedDialog,
  can: FOLDER.permissions[UPDATE],
}


export const backToBeingProcessedFolder = {
  path: "/back-to-being-processed",
  component: FolderBackToBeingProcessedDialog,
  can: FOLDER.permissions[UPDATE],
}
