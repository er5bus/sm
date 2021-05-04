import ServiceActivateDialog from "./../components/dialog/ServiceActivateDialog"
import ServiceDeactivateDialog from "./../components/dialog/ServiceDeactivateDialog"
import ServiceImportDialog from "./../components/dialog/ServiceImportDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, CREATE} from "../../../../../constants"


const {SERVICE} = MODULES_PERMISSIONS


export const serviceActivate = {
  path: "/activate/:param",
  component: ServiceActivateDialog,
  can: SERVICE.permissions[ACTIVATE]
}

export const serviceDeactivate = {
  path: "/deactivate/:param",
  component: ServiceDeactivateDialog,
  can: SERVICE.permissions[DEACTIVATE]
}

export const serviceImport = {
  path: "/import",
  component: ServiceImportDialog,
  can: SERVICE.permissions[CREATE]
}
