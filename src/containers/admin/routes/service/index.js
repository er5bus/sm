import { lazy } from "react"
import {UPDATE, MODULES_PERMISSIONS, VIEW, CREATE} from "../../../../constants"

const Service = lazy(() => import("../../containers/service/ServiceNewEdit"))
const ServiceEdit = lazy(() => import("../../containers/service/ServiceNewEdit"))
const ServiceShow = lazy(() => import("../../containers/service/ServiceShow"))
const ServicePage = lazy(() => import("../../containers/service/ServicePage"))

const { SERVICE } = MODULES_PERMISSIONS

export const serviceCreate = {
  path: "/services/new",
  component: Service,
  can: SERVICE.permissions[CREATE],
  exact: true,
}

export const serviceEdit = {
  path: "/services/:param/edit",
  component: ServiceEdit,
  can: SERVICE.permissions[UPDATE]
}

export const serviceShow = {
  path: "/services/:param/show",
  component: ServiceShow,
  can: SERVICE.permissions[VIEW]
}

export const serviceList = {
  path: "/services",
  component: ServicePage,
  can: SERVICE.permissions[VIEW]
}
