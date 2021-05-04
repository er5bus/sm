import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Partnership = lazy(() => import("../../containers/partnership/PartnershipNew"))
const PartnershipEdit = lazy(() => import("../../containers/partnership/PartnershipEdit"))
const PartnershipShow = lazy(() => import("../../containers/partnership/PartnershipShow"))
const PartnershipPage = lazy(() => import("../../containers/partnership/PartnershipPage"))

const { SERVICE } = MODULES_PERMISSIONS

export const partnershipCreate = {
  path: "/partnerships/new",
  component: Partnership,
  can: SERVICE.permissions[CREATE],
  exact: true,
}

export const partnershipEdit = {
  path: "/partnerships/:param/update-details",
  component: PartnershipEdit,
  can: SERVICE.permissions[UPDATE]
}

export const partnershipShow = {
  path: "/partnerships/:param/more-details",
  component: PartnershipShow,
  can: SERVICE.permissions[VIEW]
}

export const partnershipList = {
  path: "/partnerships",
  component: PartnershipPage,
  can: SERVICE.permissions[VIEW]
}
