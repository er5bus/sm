import { lazy } from "react"

const Appointments = lazy(() => import("./../../containers/consultant-calendar/Appointments"))

export const consultantCalendar = {
  path: "/consulatant-appointments",
  component: Appointments,
}
