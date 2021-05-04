import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"

const Event = lazy(() => import("./../../containers/event/EventNewEdit"))
const EventEdit = lazy(() => import("./../../containers/event/EventNewEdit"))
const EventShow = lazy(() => import("./../../containers/event/EventShow"))
const EventPage = lazy(() => import("./../../containers/event/EventPage"))


const { FOLDER } = MODULES_PERMISSIONS

const eventBasePath = "/events"

export const eventCreate = {
  path: `${eventBasePath}/new`,
  component: Event,
  can: FOLDER.permissions[CREATE],
}

export const eventEdit = {
  path: `${eventBasePath}/:eventParam/update`,
  component: EventEdit,
  can: FOLDER.permissions[UPDATE],
}

export const eventShow = {
  path: `${eventBasePath}/:eventParam/read`,
  component: EventShow,
  can: FOLDER.permissions[VIEW],
}

export const eventList = {
  path: eventBasePath,
  component: EventPage,
  can: FOLDER.permissions[VIEW],
}
