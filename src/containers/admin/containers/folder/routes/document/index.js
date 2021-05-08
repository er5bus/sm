import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"

const Document = lazy(() => import("./../../containers/folder-document/FolderDocumentNewEdit"))
const DocumentEdit = lazy(() => import("./../../containers/folder-document/FolderDocumentNewEdit"))
const DocumentPage = lazy(() => import("./../../containers/folder-document/FolderDocumentPage"))


const { FOLDER } = MODULES_PERMISSIONS

const folderDocumentBasePath = "/documents"


export const folderDocumentCreate = {
  path: `${folderDocumentBasePath}/new`,
  component: Document,
  can: FOLDER.permissions[CREATE],
}

export const folderDocumentEdit = {
  path: `${folderDocumentBasePath}/:documentParam/update`,
  component: DocumentEdit,
  can: FOLDER.permissions[UPDATE],
}

export const folderDocumentList = {
  path: folderDocumentBasePath,
  component: DocumentPage,
  can: FOLDER.permissions[VIEW],
}
