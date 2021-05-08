/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import {ShowModal} from "../../../../../../components/partials"
import Appointment from "./../display/Appointment"


const AppointmentDialog = ({ params, show, onHide }) => {

  // Folders Redux state
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.admin.folder.isLoading,
    }),
    shallowEqual
  )

  return (
    <ShowModal
      show={show}
      onHide={onHide}
      size="lg"
      isLoading={isLoading}
      title={<FormattedMessage id='FOLDER.APPOINTMENT.DETAILS' />}
    >
      <Appointment params={params} />
    </ShowModal>
  )
}


export default AppointmentDialog
