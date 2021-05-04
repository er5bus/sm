/* eslint-disable no-restricted-imports */
import React from "react"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import {ShowModal} from "../../../../../../../components/partials"
//import { ENDPOINTS } from "./../../../store/constants"
import Appointment from "./../../display/FolderAppointment"
import {getAttr} from "../../../../../../../helpers"


const FolderAppointmentDialog = ({ params, show, onHide }) => {

  // Folders Redux state
  const { isLoading, hasEvent } = useSelector(
    (state) => ({ 
      isLoading: state.admin.folder.isLoading,
      hasEvent: getAttr(state, "admin.folder.appointment.folders", []).some((folder) => parseInt(folder.id, 10) === parseInt(params.param, 10) && folder.hasEvent),
    }),
    shallowEqual
  )
  
  //printURL={ENDPOINTS.DOWNLOAD_EVENT.replace(":param", params.appointmentParam)}

  return (
    <ShowModal
      show={show}
      onHide={onHide}
      size="lg"
      isLoading={isLoading}
      title={<>{ hasEvent && <VerifiedUserIcon className="mx-2 text-primary" />}<FormattedMessage id='FOLDER.APPOINTMENT.DETAILS' /></>}
    >
      <Appointment params={params} />
    </ShowModal>
  )
}


export default React.memo(FolderAppointmentDialog)
