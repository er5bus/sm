import React, { useEffect, useState } from "react"
import _ from "lodash"
import moment from "moment"
import { FormattedMessage, injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Button, Col, Row, Badge } from "react-bootstrap"

import { Card, CardBody, CardHeaderTitle, CardHeader, ModalProgressBar, Chips, CalendarView } from "../../../../components/partials/controls"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { userAppointmentDialogs } from "./routes/dialogs/appointment"
import {ProtectedDialogRoute} from "../../../../components/routes"
import { consultantUIHelper, eventNatureUIHelper, NATURE, NATURE_COLOR, NATURE_CODE_COLOR } from "./../../UIHelpers"
import { clearStore, filterAppointment, fetchUserAppointments } from "./store/actions"
import { getFilteredAppointments } from "./store/selector"


const Appointment = ({
  history,
  match: { params },
  intl,
  isLoading,
  success,
  appointments,
  isFetching,
  error,
  appointmentFilterTerm,
  clearStore=f=>f,
  filterAppointment=f=>f,
  fetchUserAppointments=f=>f
}) => {

  const suhbeader = useSubheader()
  const [users, setUsers] = useState([])
  const [filtredElements, setFiltredElements] = useState([])
  const [initialValues, setInitialValues] = useState(null)

  const eventNature = eventNatureUIHelper(intl)

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
    filterAppointment(currentAppointment)
  }

  const filterAppointmentBy = (object) => {
    filterAppointment(object)
  }

  const goBackToFoldersList = () => {
    history.push(routes.folderShow.path.replace(":param", params.param))
  }

  const openAppointmentDialog = (event) => {
    if (event && event.date) {
      setInitialValues({ date: event.date })
    }
    history.push(userAppointmentDialogs.userCreateAppointmentDialog.path.replace(":param", params.param))
  }

  const openEditAppointmentDialog = ({ event }) => {
    const { extendedProps: { appointment, folder, isExpired } } = event._def
    if (isExpired){
      history.push(userAppointmentDialogs.userEditAppointmentDialog.path.replace(":param", folder).replace(":appointmentParam", appointment) )
    }else {
      history.push(userAppointmentDialogs.userShowAppointmentDialog.path.replace(":param", folder).replace(":appointmentParam", appointment) )
    }
  }

  const fetchEvents = (date) => {
    fetchUserAppointments(date)
  }

  const loadEvents = (successCallback, failureCallback) => {
    if (!_.isEmpty(appointments)) {
      successCallback(appointments.map((appointment) => ({
        appointment: appointment.id,
        participants: appointment.participantsDetails,
        folder: params.param,
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
    setInitialValues(null)
    history.push(routes.userAppointments.path.replace(":param", params.param))
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}

    return <Component
      params={params}
      initialValues={initialValues}
      show={match !== null}
      history={history}
      onHide={onHide}
    />
  }

  return (
    <Row>
      { Object.keys(userAppointmentDialogs).map(key => (
        <ProtectedDialogRoute key={key} path={userAppointmentDialogs[key].path}>
          {({ history, match }) => renderRoute({ component: userAppointmentDialogs[key].component, history, match })}
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
              label={intl.formatMessage({ id: "FOLDER.APPOINTMENTS.FILTRED_LIST" })}
              choices={filtredElements}
              handleDelete={clearAppointmentFilter}
            />
            <div className="fc-unthemed">
              { eventNature.map((nature, idx) => (
                <div key={idx} onClick={ () => filterAppointmentBy({ subject: nature.value }) } className={`btn btn-block font-weight-bold btn-light-${NATURE_COLOR[nature.value]}`}>
                  { nature.label }
                </div>
              )) }
              <div className="separator separator-dashed my-10"></div>
              { users.map((user, idx) => (
                <Badge key={idx} onClick={ () => filterAppointmentBy({ participant: user.value }) } className="font-weight-bold badge-primary cursor-pointer mx-1 my-1" >
                  { user.label }
                </Badge>
              )) }
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="9">
        <CalendarView
          isLoading={isLoading || isFetching}
          successMsg={[
            { condition: success.isCreated, label: intl.formatMessage({ id: "APPOINTMENT.NEW.MSG" }) },
            { condition: success.isUpdated, label: intl.formatMessage({ id: "APPOINTMENT.EDIT.MSG" }) }
          ]}
          error={error}
          onClose={clearStore}
          title={<FormattedMessage id="FOLDER.APPOINTMENTS.TITLE" />}
          goBackTo={goBackToFoldersList}
          toolBar={
            <Button
              type="button"
              onClick={ openAppointmentDialog }
              className="btn btn-sm btn-primary mx-2"
            >
              <FormattedMessage id="FOLDER.APPOINTMENT.CREATE" />
            </Button>
          }
          fetchEvents={fetchEvents}
          loadEvents={loadEvents}
          dateClick={openAppointmentDialog}
          eventClick={openEditAppointmentDialog}
        />
      </Col>
    </Row>
  )

}


const mapStateToProps = (state) => {
  const { isLoading, isFetching, success, error, appointmentFilterTerm } = state.admin.folder
  return { isLoading, isFetching, success, appointmentFilterTerm, error, appointments: getFilteredAppointments(state)}
}

export default connect(mapStateToProps, {
  clearStore, filterAppointment, fetchUserAppointments
})(injectIntl(Appointment))
