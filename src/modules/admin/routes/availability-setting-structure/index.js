import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const AvailabilitySettingStructureNew = lazy(() => import("../../containers/availability-setting-structure/AvailabilitySettingStructureNewEdit"))
const AvailabilitySettingStructureEdit = lazy(() => import("../../containers/availability-setting-structure/AvailabilitySettingStructureNewEdit"))
const AvailabilitySettingStructureShow = lazy(() => import("../../containers/availability-setting-structure/AvailabilitySettingStructureShow"))
const AvailabilitySettingStructurePage = lazy(() => import("../../containers/availability-setting-structure/AvailabilitySettingStructurePage"))

const { ASSESSMENT_TOOL } = MODULES_PERMISSIONS

export const availabilitySettingStructureCreate = {
  path: "/availability-setting-structure/new",
  component: AvailabilitySettingStructureNew,
  can: ASSESSMENT_TOOL.permissions[CREATE],
  exact: true,
}

export const availabilitySettingStructureEdit = {
  path: "/availability-setting-structure/:param/edit",
  component: AvailabilitySettingStructureEdit,
  can: ASSESSMENT_TOOL.permissions[UPDATE]
}

export const availabilitySettingStructureShow = {
  path: "/availability-setting-structure/:param/show",
  component: AvailabilitySettingStructureShow,
  can: ASSESSMENT_TOOL.permissions[VIEW]
}

export const availabilitySettingStructureList = {
  path: "/availability-setting-structure",
  component: AvailabilitySettingStructurePage,
  can: ASSESSMENT_TOOL.permissions[VIEW]
}
