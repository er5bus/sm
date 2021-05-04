import React, { useEffect, useState } from "react"
import _ from "lodash"
import moment from "moment"
import { FormattedMessage, injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Button } from "react-bootstrap"

import { CalendarView } from "../../../../../../components/partials/controls"
import { useSubheader } from "../../../../../../components/layout"
import routes from "./../../../../routes"
import { getAppointmentDialogs } from "./../../routes/appointment"
import { ProtectedDialogRoute } from "../../../../../../components/routes"
import { NATURE, NATURE_COLOR, NATURE_CODE_COLOR, DEFAULT_NATURE_GROUP_VALUE } from "./../../../../UIHelpers"
import { clearStore, fetchAppointments } from "./../../store/actions"

const Appointment = ({
  history,
  params,
  intl,
  success,
  isLoading,
  appointments,
  isFetching,
  error,
  fetchAppointments=f=>f
}) => {

  const appointmentDialogs = getAppointmentDialogs()

  const suhbeader = useSubheader()
  const [initialValues, setInitialValues] = useState()

  useEffect(() => {
    suhbeader.setTitle(<FormattedMessage id="FOLDER_GROUP.APPOINTMENT.TITLE" />)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToFoldersList = () => {
    history.push(routes.folderGroupList.path.replace(":param", params.param))
  }

  const openAppointmentDialog = (event) => {
    if (event && event.date) {
      setInitialValues({ subject: DEFAULT_NATURE_GROUP_VALUE, date: event.date })
    }
    history.push(appointmentDialogs.folderGroupAppoitmentCreate.path.replace(":param", params.param))
  }

  const openEditAppointmentDialog = ({ event }) => {
    const { extendedProps: { appointment, folderGroup, isExpired } } = event._def
    if (isExpired){
      history.push(appointmentDialogs.folderGroupAppoitmentEdit.path.replace(":param", folderGroup).replace(":appointmentParam", appointment) )
    }else {
      history.push(appointmentDialogs.folderGroupAppoitmentShow.path.replace(":param", folderGroup).replace(":appointmentParam", appointment) )
    }
  }

  const fetchEvents = (date) => {
    fetchAppointments(params, date)
  }

  const loadEvents = (successCallback, failureCallback) => {
    if (!_.isEmpty(appointments)) {
      successCallback(appointments.map((appointment) => ({
        appointment: appointment.id,
        participants: appointment.participantsDetails,
        folderGroup: appointment.folderGroup,
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
    history.goBack()
  }

  const goToDisplay = () => {
    history.push(routes.folderGroupEdit.path)
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component

    return <Component
      params={Object.assign((match && match.params)||{}, params)} 
      initialValues={initialValues}
      show={match !== null}
      history={history}
      onHide={onHide}
    />
  }

  return (
    <>
      { Object.keys(appointmentDialogs).map(key => (
        <ProtectedDialogRoute key={key} path={appointmentDialogs[key].path}>
          {({ history, match }) => renderRoute({ component: appointmentDialogs[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <CalendarView
        isLoading={isLoading || isFetching}
        successMsg={[
          { condition: success.isCreated, label: intl.formatMessage({ id: "APPOINTMENT.NEW.MSG" }) },
          { condition: success.isUpdated, label: intl.formatMessage({ id: "APPOINTMENT.EDIT.MSG" }) }
        ]}
        error={error}
        onClose={clearStore}
        title={<FormattedMessage id="FOLDER_GROUP.APPOINTMENTS.TITLE" />}
        goBackTo={goBackToFoldersList}
        goToDisplay={goToDisplay}
        toolBar={
          <Button
            type="button"
            onClick={ openAppointmentDialog }
            className="btn btn-sm btn-primary mx-2"
          >
            <FormattedMessage id="FOLDER_GROUP.APPOINTMENT.CREATE" />
          </Button>
        }
        fetchEvents={fetchEvents}
        loadEvents={loadEvents}
        dateClick={openAppointmentDialog}
        eventClick={openEditAppointmentDialog}
      />
    </>
  )

}


const mapStateToProps = (state) =>  state.admin.folderGroup

export default connect(mapStateToProps, {
  clearStore, fetchAppointments
})(injectIntl(Appointment))
