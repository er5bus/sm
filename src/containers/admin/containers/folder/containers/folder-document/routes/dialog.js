import FolderDocumentDeleteDialog from "./../components/dialog/FolderDocumentDeleteDialog"
import FolderDocumentsDeleteDialog from "./../components/dialog/FolderDocumentsDeleteDialog"
import {MODULES_PERMISSIONS, DEACTIVATE} from "../../../../../../../constants"


const {FOLDER_DOCUMENT} = MODULES_PERMISSIONS


export const folderDocumentDelete = {
  path: "/delete/folderDocument/:documentParam",
  component: FolderDocumentDeleteDialog,
  can: FOLDER_DOCUMENT.permissions[DEACTIVATE]
}

export const folderDocumentsDelete = {
  path: "/delete/folderDocuments",
  component: FolderDocumentsDeleteDialog,
  can: FOLDER_DOCUMENT.permissions[DEACTIVATE]
}
