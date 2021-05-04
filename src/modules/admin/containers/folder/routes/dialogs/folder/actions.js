import FolderEnableDialog from "./../../../components/dialog/folder/FolderEnableDialog"
import FoldersEnableDialog from "./../../../components/dialog/folder/FoldersEnableDialog"
import FolderImportDialog from "./../../../components/dialog/folder/FolderImportDialog"
import FolderDisableDialog from "./../../../components/dialog/folder/FolderDisableDialog"
import FoldersDisableDialog from "./../../../components/dialog/folder/FoldersDisableDialog"


import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE, CREATE} from "../../../../../../../constants"


const { FOLDER } = MODULES_PERMISSIONS


export const folderEnable = {
  path: "/enable-folder/:param",
  component: FolderEnableDialog,
  can: FOLDER.permissions[ACTIVATE]
}

export const folderImport = {
  path: "/import-folders",
  component: FolderImportDialog,
  can: FOLDER.permissions[CREATE]
}

export const folderDisable = {
  path: "/disable-folder/:param",
  component: FolderDisableDialog,
  can: FOLDER.permissions[DEACTIVATE]
}

export const foldersDisable = {
  path: "/disable-folders",
  component: FoldersDisableDialog,
  can: FOLDER.permissions[DEACTIVATE]
}

export const foldersEnable = {
  path: "/enable-folders",
  component: FoldersEnableDialog,
  can: FOLDER.permissions[ACTIVATE]
}
