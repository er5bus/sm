import PartnershipEnableDialog from "./../../components/dialog/PartnershipEnableDialog"
import PartnershipsEnableDialog from "./../../components/dialog/PartnershipsEnableDialog"
import PartnershipDisableDialog from "./../../components/dialog/PartnershipDisableDialog"
import PartnershipsDisableDialog from "./../../components/dialog/PartnershipsDisableDialog"


import {MODULES_PERMISSIONS, ACTIVATE, DEACTIVATE} from "../../../../../../constants"


const { PARTNERSHIP } = MODULES_PERMISSIONS


export const partnershipEnable = {
  path: "/enable-partnership/:param",
  component: PartnershipEnableDialog,
  can: PARTNERSHIP.permissions[ACTIVATE]
}


export const partnershipDisable = {
  path: "/disable-partnership/:param",
  component: PartnershipDisableDialog,
  can: PARTNERSHIP.permissions[DEACTIVATE]
}

export const partnershipsDisable = {
  path: "/disable-partnerships",
  component: PartnershipsDisableDialog,
  can: PARTNERSHIP.permissions[DEACTIVATE]
}

export const partnershipsEnable = {
  path: "/enable-partnerships",
  component: PartnershipsEnableDialog,
  can: PARTNERSHIP.permissions[ACTIVATE]
}
