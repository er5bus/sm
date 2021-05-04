import { createSelector } from 'reselect'

const getAppointments = (state) => state.admin.folder.appointments

const getFilterTerm = state => state.admin.folder.appointmentFilterTerm || {}

export const getFilteredAppointments = createSelector(
  [getAppointments, getFilterTerm],
  (appointments, filterTerm) => {
    let filtredAppointments = [...appointments]
    if (filterTerm.subject) {
      filtredAppointments = filtredAppointments.filter(appointment => appointment.subject === filterTerm.subject)
    }

    if (filterTerm.participant) {
      filtredAppointments = filtredAppointments.filter(appointment => appointment.participants.some((participant) => participant === filterTerm.participant))
    }

    return filtredAppointments
  })
