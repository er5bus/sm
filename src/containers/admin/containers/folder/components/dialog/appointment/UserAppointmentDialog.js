/* eslint-disable no-restricted-imports */
import React from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import {FormModal} from "../../../../../../../components/partials"
import AppointmentForm from "./../../form/UserAppointmentForm"

const FolderAppointmentDialog = ({ params, initialValues, show, intl, onHide }) => {

  // Folders Redux state
  const { isLoading, success, error } = useSelector(
    (state) => ({ 
      isLoading: state.admin.folder.isLoading, 
      error: state.admin.folder.error,
      success: state.admin.folder.success
    }),
    shallowEqual
  )

  return (
    <FormModal
      size="lg"
      title={intl.formatMessage({ id: !params.appointmentParam ? "FOLDER.APPOINTMENT.CREATE" : "FOLDER.APPOINTMENT.EDIT" })}
      show={show}
      error={error}
      success={ success.isCreated || success.isUpdated }
      onHide={onHide}
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <AppointmentForm params={params} saveRef={saveRef} initialValues={initialValues} />
      ) }
    </FormModal>
  )
}


export default injectIntl(FolderAppointmentDialog)
