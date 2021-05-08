/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ShowModal } from '../../../../../../../components/partials/controls'
import { fetchFolderGroupAppointment } from '../../../store/actions'
//import { ENDPOINTS } from "./../../../store/constants"
import Appointment from './../../display/FolderGroupAppointment'

const FolderGroupAppointmentDialog = ({ params, show, onHide }) => {

  // FolderGroups Redux state
  const { isLoading, appointment, error, isFetching } = useSelector(
    (state) => ({
      isFetching: state.admin.folderGroup.isFetching, 
      isLoading: state.admin.folderGroup.isLoading,
      error: state.admin.folderGroup.error,
      appointment: state.admin.folderGroup.appointment
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    if (show && params) {
      dispatch(fetchFolderGroupAppointment(params))
    }

    // eslint-disable-next-line
  }, [show])

  //printURL={appointment && ENDPOINTS.DOWNLOAD_EVENT.replace(":param", appointment.id)}
  return (
    <ShowModal
      show={show}
      onHide={onHide}
      size="lg"
      isLoading={isLoading}
      title={<FormattedMessage id='FOLDER_GROUP.APPOINTMENT.DETAILS' />}
    >
      <Appointment isFetching={isFetching} appointment={appointment} error={error} />
    </ShowModal>
  )
}

export default FolderGroupAppointmentDialog
