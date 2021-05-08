import EventDeleteDialog from "./../components/dialog/EventDeleteDialog"
import EventsDeleteDialog from "./../components/dialog/EventsDeleteDialog"
import EventCloseDialog from "./../components/dialog/EventCloseDialog"
import {MODULES_PERMISSIONS, DEACTIVATE, CLOSE} from "../../../../../../../constants"


const {EVENT} = MODULES_PERMISSIONS


export const eventDelete = {
  path: "/delete/event/:eventParam",
  component: EventDeleteDialog,
  can: EVENT.permissions[DEACTIVATE]
}
export const eventClose = {
  path: "/close/event/:eventParam",
  component: EventCloseDialog,
  can: EVENT.permissions[CLOSE]
}

export const eventsDelete = {
  path: "/delete/events",
  component: EventsDeleteDialog,
  can: EVENT.permissions[DEACTIVATE]
}
