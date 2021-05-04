import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Group = lazy(() => import("./../../containers/folder-group/FolderGroupNew"))
const GroupEdit = lazy(() => import("./../../containers/folder-group/FolderGroupEdit"))
const GroupShow = lazy(() => import("./../../containers/folder-group/FolderGroupShow"))
const GroupPage = lazy(() => import("./../../containers/folder-group/FolderGroupPage"))

const { FOLDER_GROUP } = MODULES_PERMISSIONS

export const folderGroupCreate = {
  path: "/folder-groups/new",
  component: Group,
  can: FOLDER_GROUP.permissions[CREATE],
  exact: true,
}

export const folderGroupEdit = {
  path: "/folder-groups/:param/update-details",
  component: GroupEdit,
  can: FOLDER_GROUP.permissions[UPDATE]
}

export const folderGroupShow = {
  path: "/folder-groups/:param/more-details",
  component: GroupShow,
  can: FOLDER_GROUP.permissions[VIEW]
}

export const folderGroupList = {
  path: "/folder-groups",
  component: GroupPage,
  can: FOLDER_GROUP.permissions[VIEW]
}
