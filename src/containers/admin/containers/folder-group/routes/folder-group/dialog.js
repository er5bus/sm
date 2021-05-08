import FolderGroupEnableDialog from "./../../components/dialog/folder-group/FolderGroupEnableDialog"
import FolderGroupDisableDialog from "./../../components/dialog/folder-group/FolderGroupDisableDialog"
import FolderGroupImportDialog from "./../../components/dialog/folder-group/FolderGroupImportDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE} from "../../../../../../constants"


const {FOLDER_GROUP} = MODULES_PERMISSIONS


export const folderGroupEnable = {
  path: "/activate/folderGroup/:param",
  component: FolderGroupEnableDialog,
  can: FOLDER_GROUP.permissions[ACTIVATE]
}

export const folderGroupDisable = {
  path: "/deactivate/folderGroup/:param",
  component: FolderGroupDisableDialog,
  can: FOLDER_GROUP.permissions[DEACTIVATE]
}

export const folderGroupImport = {
  path: "/import/folderGroup",
  component: FolderGroupImportDialog,
  can: FOLDER_GROUP.permissions[DEACTIVATE]
}
