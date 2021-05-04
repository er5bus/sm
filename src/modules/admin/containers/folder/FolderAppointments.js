import React, { useEffect, useState } from "react"
import _ from "lodash"
import moment from "moment"
import { FormattedMessage, injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Button, Col, Row } from "react-bootstrap"
import {  Chips, CalendarView,ShowView } from "../../../../components/partials/controls"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { folderAppointmentDialogs } from "./routes/dialogs/appointment"
import { ProtectedDialogRoute } from "../../../../components/routes"
import { eventNatureUIHelper, NATURE, NATURE_COLOR, NATURE_CODE_COLOR } from "./../../UIHelpers"
import { clearStore, filterAppointment, fetchFolderAppointments } from "./store/actions"
import { getFilteredAppointments } from "./store/selector"


const Appointment = ({
  history,
  match: { params },
  intl,
  isLoading,
  appointments,
  isFetching,
  success,
  error,
  appointmentFilterTerm,
  clearStore=f=>f,
  filterAppointment=f=>f,
  fetchFolderAppointments=f=>f
}) => {

  const suhbeader = useSubheader()
  const [filtredElements, setFiltredElements] = useState([])
  const [initialValues, setInitialValues] = useState(null)

  const eventNature = eventNatureUIHelper(intl)

  useEffect(() => {
    suhbeader.setTitle(<FormattedMessage id="FOLDER.APPOINTMENT.TITLE" />)

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
    history.push(folderAppointmentDialogs.folderCreateAppointmentDialog.path.replace(":param", params.param))
  }

  const openEditAppointmentDialog = ({ event }) => {
    const { extendedProps: { appointment, folder, isExpired } } = event._def
    if (isExpired){
      history.push(folderAppointmentDialogs.folderEditAppointmentDialog.path.replace(":param", folder).replace(":appointmentParam", appointment) )
    }else {
      history.push(folderAppointmentDialogs.folderShowAppointmentDialog.path.replace(":param", folder).replace(":appointmentParam", appointment) )
    }
  }

  const fetchEvents = (date) => {
    fetchFolderAppointments(params, date)
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
    history.push(routes.folderAppointments.path.replace(":param", params.param))
  }

  const openDownloadScheduleDialog = () => {
    history.push(folderAppointmentDialogs.showDownloadScheduleDialog.path.replace(":param", params.param))
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
      { Object.keys(folderAppointmentDialogs).map(key => (
        <ProtectedDialogRoute key={key} path={folderAppointmentDialogs[key].path}>
          {({ history, match }) => renderRoute({ component: folderAppointmentDialogs[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <Col lg="3">
        <ShowView print={false} isLoading={isLoading || isFetching} title={<FormattedMessage id="FOLDER.APPOINTMENTS.FILTER" />} >
          <Chips
            label={intl.formatMessage({ id: "FOLDER.APPOINTMENTS.FILTRED_LIST" })}
            choices={filtredElements}
            handleDelete={clearAppointmentFilter}
          />
          <div className="fc-unthemed">
            { eventNature.map((nature, i) => (
              <div
                key={i}
                onClick={ () => filterAppointmentBy({ subject: nature.value }) }
                className={`btn btn-block font-weight-bold btn-light-${NATURE_COLOR[nature.value]}`}>
                { nature.label }
              </div>
            )) }
          </div>
        </ShowView>
      </Col>
      <Col lg="9">
        <CalendarView
          isLoading={isLoading || isFetching}
          error={error}
          onClose={clearStore}
          successMsg={[
            { condition: success.isCreated, label: intl.formatMessage({ id: "APPOINTMENT.NEW.MSG" }) },
            { condition: success.isUpdated, label: intl.formatMessage({ id: "APPOINTMENT.EDIT.MSG" }) }
          ]}
          title={<FormattedMessage id="FOLDER.APPOINTMENTS.TITLE" />}
          goBackTo={goBackToFoldersList}
          toolBar={
            <>
              <Button
                type="button"
                onClick={ openAppointmentDialog }
                className="btn btn-sm btn-primary mx-2"
              >
                <FormattedMessage id="FOLDER.APPOINTMENT.CREATE" />
              </Button>
              <Button
                type="button"
                onClick={ openDownloadScheduleDialog }
                className="btn btn-sm btn-primary mx-2"
              >
                <FormattedMessage id="FOLDER.APPOINTMENT.DOWNLOAD" />
              </Button>
            </>
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
  clearStore, filterAppointment, fetchFolderAppointments
})(injectIntl(Appointment))
