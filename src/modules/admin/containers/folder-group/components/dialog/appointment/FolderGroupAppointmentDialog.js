/* eslint-disable no-restricted-imports */
import React from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { FormModal } from "../../../../../../../components/partials/controls"

import AppointmentForm from "./../../form/FolderGroupAppointmentForm"

const FolderGroupAppointmentDialog = ({ initialValues, params, show, onHide, intl }) => {

  // FolderGroups Redux state
  const { isLoading, error, success } = useSelector(
    (state) => ({
      isLoading: state.admin.folderGroup.isLoading,
      success: state.admin.folderGroup.success,
      error: state.admin.folderGroup.error
    }),
    shallowEqual
  )

  return (
    <FormModal
      size={"lg"}
      title={intl.formatMessage({ id: !params.appointmentParam ? "FOLDER.APPOINTMENT.CREATE" : "FOLDER.APPOINTMENT.EDIT" })}
      show={show}
      success={ success.isCreated || success.isUpdated }
      error={error}
      onHide={onHide}
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <AppointmentForm params={params} saveRef={saveRef} initialValues={initialValues && initialValues} />
      ) }
    </FormModal>
  )
}


export default injectIntl(FolderGroupAppointmentDialog)
