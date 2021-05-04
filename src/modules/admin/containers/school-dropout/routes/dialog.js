import SchoolDropoutActivateDialog from "../components/dialog/SchoolDropoutActivateDialog"
import SchoolDropoutDeactivateDialog from "../components/dialog/SchoolDropoutDeactivateDialog"
import SchoolDropoutImportDialog from "../components/dialog/SchoolDropoutImportDialog"

import SchoolDropoutCloseDialog from "../components/dialog/SchoolDropoutCloseDialog"
import SchoolDropoutQualifyDialog from "../components/dialog/SchoolDropoutQualifyDialog"
import SchoolDropoutTransferDialog from "../components/dialog/SchoolDropoutTransferDialog"

import {MODULES_PERMISSIONS, DEACTIVATE, ACTIVATE, CREATE} from "../../../../../constants"

const {SCHOOL_DROPOUT} = MODULES_PERMISSIONS


export const schoolDropoutActivate = {
  path: "/activate/:param",
  component: SchoolDropoutActivateDialog,
  can: SCHOOL_DROPOUT.permissions[ACTIVATE]
}

export const schoolDropoutDeactivate = {
  path: "/deactivate/:param",
  component: SchoolDropoutDeactivateDialog,
  can: SCHOOL_DROPOUT.permissions[DEACTIVATE]
}

export const schoolDropoutClose = {
  path: "/close/:param",
  component: SchoolDropoutCloseDialog,
  can: SCHOOL_DROPOUT.permissions[ACTIVATE]
}

export const schoolDropoutQualify = {
  path: "/qualify/:param",
  component: SchoolDropoutQualifyDialog,
  can: SCHOOL_DROPOUT.permissions[DEACTIVATE]
}

export const schoolDropoutTransafer = {
  path: "/transfer/:param",
  component: SchoolDropoutTransferDialog,
  can: SCHOOL_DROPOUT.permissions[DEACTIVATE]
}

export const schoolDropoutImport = {
  path: "/import",
  component: SchoolDropoutImportDialog,
  can: SCHOOL_DROPOUT.permissions[CREATE]
}
