/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import {ShowModal} from "../../../../../../../components/partials"
//import { ENDPOINTS } from "./../../../store/constants"
import Appointment from "./../../display/UserAppointment"


const FolderAppointmentDialog = ({ params, show, onHide }) => {

  // Folders Redux state
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.admin.folder.isLoading,
    }),
    shallowEqual
  )

  /*printURL={ENDPOINTS.DOWNLOAD_EVENT.replace(":param", params.appointmentParam)}*/
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


export default FolderAppointmentDialog
