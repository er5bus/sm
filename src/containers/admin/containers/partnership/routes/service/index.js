import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"

const Service = lazy(() => import("./../../containers/associate-service/AssociateServiceNewEdit"))
const ServiceEdit = lazy(() => import("./../../containers/associate-service/AssociateServiceNewEdit"))
//const ServiceShow = lazy(() => import("./../../containers/associate-service/AssociateServiceShow"))
const ServicePage = lazy(() => import("./../../containers/associate-service/AssociateServicePage"))


const { PARTNERSHIP } = MODULES_PERMISSIONS

const serviceBasePath = "/services"

export const serviceCreate = {
  path: `${serviceBasePath}/new`,
  component: Service,
  exact: true,
  can: PARTNERSHIP.permissions[CREATE],
}

export const serviceEdit = {
  path: `${serviceBasePath}/:associateServiceParam/edit`,
  component: ServiceEdit,
  can: PARTNERSHIP.permissions[UPDATE]
}

/*export const serviceShow = {
  path: "/services/:serviceParam/show",
  component: ServiceShow,
  can: PARTNERSHIP.permissions[VIEW]
}*/

export const serviceList = {
  path: serviceBasePath,
  component: ServicePage,
  can: PARTNERSHIP.permissions[VIEW]
}
