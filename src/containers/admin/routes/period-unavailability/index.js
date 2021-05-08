import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const PeriodUnavailabilitys = lazy(() => import("../../containers/period-unavailability/PeriodUnavailabilityNewEdit"))
const PeriodUnavailabilitysEdit = lazy(() => import("../../containers/period-unavailability/PeriodUnavailabilityNewEdit"))
const PeriodUnavailabilitysShow = lazy(() => import("../../containers/period-unavailability/PeriodUnavailabilityShow"))
const PeriodUnavailabilitysPage = lazy(() => import("../../containers/period-unavailability/PeriodUnavailabilityPage"))

const { PERIOD_UNAVAILABILITY } = MODULES_PERMISSIONS

export const periodUnavailabilityCreate = {
  path: "/period-unavailabilities/new",
  component: PeriodUnavailabilitys,
  can: PERIOD_UNAVAILABILITY.permissions[CREATE],
  exact: true,
}

export const periodUnavailabilityEdit = {
  path: "/period-unavailabilities/:param/edit",
  component: PeriodUnavailabilitysEdit,
  can: PERIOD_UNAVAILABILITY.permissions[UPDATE]
}

export const periodUnavailabilityShow = {
  path: "/period-unavailabilities/:param/show",
  component: PeriodUnavailabilitysShow,
  can: PERIOD_UNAVAILABILITY.permissions[VIEW]
}

export const periodUnavailabilityList = {
  path: "/period-unavailabilities",
  component: PeriodUnavailabilitysPage,
  can: PERIOD_UNAVAILABILITY.permissions[VIEW]
}
