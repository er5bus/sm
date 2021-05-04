import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../constants"

const Folder = lazy(() => import("./../../containers/folder/FolderNew"))
const FolderEdit = lazy(() => import("./../../containers/folder/FolderEdit"))
const FolderShow = lazy(() => import("./../../containers/folder/FolderShow"))
const FolderPage = lazy(() => import("./../../containers/folder/FolderPage"))
const FolderAppointments = lazy(() => import("./../../containers/folder/FolderAppointments"))
const UserAppointments = lazy(() => import("./../../containers/folder/UserAppointments"))
const UserAvailability = lazy(() => import("./../../containers/folder/UserAvailability"))


const { FOLDER } = MODULES_PERMISSIONS

export const folderCreate = {
  path: "/folders/new",
  component: Folder,
  exact: true,
  can: FOLDER.permissions[CREATE],
}

export const folderEdit = {
  path: "/folders/:param/update-details",
  component: FolderEdit,
  can: FOLDER.permissions[UPDATE]
}

export const folderShow = {
  path: "/folders/:param/more-details",
  component: FolderShow,
  can: FOLDER.permissions[VIEW]
}

export const userAppointments = {
  path: "/folders/:param/users-appointments",
  component: UserAppointments,
  can: FOLDER.permissions[VIEW]
}

export const userAvailability = {
  path: "/folders/:param/users-avaibilitity",
  component: UserAvailability,
  can: FOLDER.permissions[VIEW]
}

export const folderAppointments = {
  path: "/folders/:param/appointments",
  component: FolderAppointments,
  can: FOLDER.permissions[VIEW]
}


export const folderList = {
  path: "/folders",
  component: FolderPage,
  can: FOLDER.permissions[VIEW]
}

