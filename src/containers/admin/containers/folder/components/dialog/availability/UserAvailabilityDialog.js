/* eslint-disable no-restricted-imports */
import React, {useEffect} from "react"
import { isEmpty } from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import {withRouter} from "react-router-dom"
import {FormModal} from "../../../../../../../components/partials"
import { folderAppointmentDialogs } from "./../../../routes/dialogs/appointment"
import AssistedAppointmentForm from "./../../form/UserAssistedAppointmentForm"


const FolderAssistedAppointmentDialog = ({ params, initialValues, show, onHide, history, intl }) => {

  // Folders Redux state
  const { isLoading, error, success, appointment } = useSelector(
    (state) => ({
      appointment: state.admin.folder.appointment,
      isLoading: state.admin.folder.isLoading,
      success: state.admin.folder.success,
      error: state.admin.folder.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(initialValues)){
      onHide()
    }
    // eslint-disable-next-line
  }, [initialValues])

  const onCloseModal = () => {
    onHide()
  }

  const onSuccess = () => {
    history.push(
      folderAppointmentDialogs.folderShowAppointmentDialog.path
      .replace(":param", params.param)
      .replace(":appointmentParam", appointment.id)
    )
  }

  return (
    <FormModal
      title={intl.formatMessage({ id: !params.appointmentParam ? "FOLDER.APPOINTMENT.CREATE" : "FOLDER.APPOINTMENT.EDIT" })}
      show={show}
      success={ success.isCreated }
      onSuccess={onSuccess}
      error={error}
      onHide={onCloseModal}
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <AssistedAppointmentForm params={params} initialValues={initialValues} saveRef={saveRef} />
      ) }
    </FormModal>
  )
}


export default withRouter(injectIntl(FolderAssistedAppointmentDialog))
