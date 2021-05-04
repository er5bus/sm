import React, { useEffect, useState } from "react"
import _ from "lodash"
import moment from "moment"
import { FormattedMessage, injectIntl } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import { /*/Badge,*/ Button, Col, Row } from "react-bootstrap"

import { Card, CardBody, CardHeaderTitle, CardHeader, ModalProgressBar, Chips, CalendarView } from "../../../../components/partials/controls"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import appointmentDialogs from "./routes"
import {ProtectedDialogRoute} from "../../../../components/routes"
import { eventNatureUIHelper, NATURE, NATURE_COLOR, NATURE_CODE_COLOR, consultantUIHelper } from "./../../UIHelpers"
import { filterAppointment, fetchMyAppointments, clearError } from "./store/actions"
import { getFilteredAppointments } from "./store/selector"


const Appointment = ({ history, intl }) => {

  const suhbeader = useSubheader()

  const dispatch = useDispatch()
  const { isLoading, appointments, appointmentFilterTerm, isFetching, error } = useSelector((state) => ({
    appointments: getFilteredAppointments(state),
    isLoading: state.admin.consultantCalendar.isLoading,
    isFetching: state.admin.consultantCalendar.isFetching,
    error: state.admin.consultantCalendar.error,
    appointmentFilterTerm: state.admin.consultantCalendar.appointmentFilterTerm
  }), _.isEqual)
  const [filtredElements, setFiltredElements] = useState([])

  const eventNature = eventNatureUIHelper(intl)
  const [users, setUsers] = useState([])

  useEffect(() => {
    suhbeader.setTitle(<FormattedMessage id="FOLDER.APPOINTMENT.TITLE" />)
    consultantUIHelper(setUsers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const selectedChoices = []
    if (appointmentFilterTerm.subject) {
      selectedChoices.push({
        color: NATURE_COLOR[appointmentFilterTerm.subject],
        label: intl.formatMessage({ id: NATURE[appointmentFilterTerm.subject] }),
        value: appointmentFilterTerm.subject
      })
    }
    if (appointmentFilterTerm.participant){
      selectedChoices.push(users.find((user) => user.value === appointmentFilterTerm.participant))
    }
    setFiltredElements(selectedChoices)

    // eslint-disable-next-line
  }, [appointmentFilterTerm])

  const clearAppointmentFilter = (value) => {
    const currentAppointment = { ...appointmentFilterTerm }
    Object.keys(currentAppointment).forEach((key) => {
      if (currentAppointment[key] === value) {
        currentAppointment[key] = undefined
      }
    })
    dispatch(filterAppointment(currentAppointment))
  }

  const openEditAppointmentDialog = ({ event }) => {
    const { extendedProps: { appointment } } = event._def
    history.push(appointmentDialogs.showAppointmentDialog.path.replace(":param", appointment) )
  }

  const filterAppointmentBy = (object) => {
    dispatch(filterAppointment(object))
  }

  const fetchEvents = (date) => {
    dispatch(fetchMyAppointments(date))
  }

  const loadEvents = (successCallback, failureCallback) => {
    if (!_.isEmpty(appointments)) {
      successCallback(appointments.map((appointment) => ({
        appointment: appointment.id,
        participants: appointment.participantsDetails,
        folders: appointment.folders,
        isExpired: moment().isSameOrBefore(moment(`${appointment.date} ${appointment.endHour}`, "DD/MM/YYYY HH:mm:ss").toDate()),
        eventColor: NATURE_COLOR[appointment.subject] || "green",
        backgroundColor: NATURE_CODE_COLOR[appointment.subject] || "green",
        title:  intl.formatMessage({ id: (NATURE[appointment.subject] || "GENERAL.EMPTY") }),
        start: moment(`${appointment.date} ${appointment.startHour}`, "DD/MM/YYYY HH:mm:ss").toDate(),
        end: moment(`${appointment.date} ${appointment.endHour}`, "DD/MM/YYYY HH:mm:ss").toDate()
      })))
    }

    if (!isFetching && !_.isEmpty(error)){
      failureCallback(false)
    }
  }

  const onHide = () => {
    history.push(routes.consultantCalendar.path)
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}

    return <Component
      params={params}
      show={match !== null}
      history={history}
      onHide={onHide}
    />
  }

  const openDownloadScheduleDialog = () => {
    history.push(appointmentDialogs.showDownloadScheduleDialog.path)
  }

  return (
    <Row>
      { Object.keys(appointmentDialogs).map(key => (
        <ProtectedDialogRoute key={key} path={appointmentDialogs[key].path}>
          {({ history, match }) => renderRoute({ component: appointmentDialogs[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <Col lg="3">
        <Card>
          <CardHeader>
            {(isLoading || isFetching) && <ModalProgressBar />}
            <div className="card-title">
              <CardHeaderTitle>
                <FormattedMessage id="FOLDER.APPOINTMENTS.FILTER" />
              </CardHeaderTitle>
            </div>
          </CardHeader>
          <CardBody>
            <Chips
              label={""/*intl.formatMessage({ id: "FOLDER.APPOINTMENTS.FILTRED_LIST" })*/}
              choices={filtredElements}
              handleDelete={clearAppointmentFilter}
            />
            <div className="fc-unthemed">
              { eventNature.map((nature, idx) => (
                <div 
                  key={idx} 
                  onClick={ () => filterAppointmentBy({ subject: nature.value }) } 
                  className={`btn btn-block font-weight-bold btn-light-${NATURE_COLOR[nature.value]} ${appointmentFilterTerm && appointmentFilterTerm.subject === nature.value && 'active'}`}
                >
                  { nature.label }
                </div>
              )) }
              <div className="separator separator-dashed my-10"></div>
              { users.map((user, idx) => (
                <div
                  key={idx}
                  onClick={ () => filterAppointmentBy({ participant: user.value }) }
                  className={`btn btn-block font-weight-bold btn-light-primary ${appointmentFilterTerm && appointmentFilterTerm.participant === user.value && 'active'}`}
                >
                  { user.label }
                </div>
              )) }
              { /*<Badge key={idx} onClick={ () => filterAppointmentBy({ participant: user.value }) } className="font-weight-bold badge-primary cursor-pointer mx-1 my-1" >
                    { user.label }
                  </Badge> */}
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="9">
        <CalendarView
          toolBar={
            <Button
              type="button"
              onClick={ openDownloadScheduleDialog }
              className="btn btn-sm btn-primary mx-2"
            >
              <FormattedMessage id="FOLDER.APPOINTMENT.DOWNLOAD" />
            </Button>
          }
          isLoading={isLoading || isFetching}
          error={error}
          onClose={clearError}
          title={<FormattedMessage id="USER.APPOINTMENTS.TITLE" />}
          fetchEvents={fetchEvents}
          loadEvents={loadEvents}
          eventClick={openEditAppointmentDialog}
        />
      </Col>
    </Row>
  )

}

export default injectIntl(Appointment)
