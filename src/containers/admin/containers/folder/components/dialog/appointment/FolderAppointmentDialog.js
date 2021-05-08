/* eslint-disable no-restricted-imports */
import React from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { FormModal } from "../../../../../../../components/partials/controls"

import AppointmentForm from "./../../form/FolderAppointmentForm"

const FolderAppointmentDialog = ({ initialValues={}, params, show, onHide, intl }) => {

  // Folders Redux state
  const { isLoading, success, error } = useSelector(
    (state) => ({ 
      isLoading: state.admin.folder.isLoading, 
      success: state.admin.folder.success,
      error: state.admin.folder.error
    }),
    shallowEqual
  )

  return (
    <FormModal
      size="lg"
      error={error}
      title={intl.formatMessage({ id: !params.appointmentParam ? "FOLDER.APPOINTMENT.CREATE" : "FOLDER.APPOINTMENT.EDIT" })}
      show={show}
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


export default React.memo(injectIntl(FolderAppointmentDialog))
