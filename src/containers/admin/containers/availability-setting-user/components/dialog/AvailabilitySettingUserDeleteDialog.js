/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteAvailabilitySettingUser, fetchAvailabilitySettingUsers } from "../../store/actions"
import { useAvailabilitySettingUsersUIContext } from "../../context/AvailabilitySettingUsersUIContext"
import {ActionModal} from "../../../../../../components/partials"

const AvailabilitySettingUserDeleteDialog = ({ params, show, onHide }) => {
  // AvailabilitySettingUsers UI Context
  const availabilitySettingUsersUIProps = useAvailabilitySettingUsersUIContext()

  // AvailabilitySettingUsers Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.availabilitySettingUser.isLoading, success: state.admin.availabilitySettingUser.success }),
    shallowEqual
  )

  // if !id we should close modal
  const onRefresh = () => {
    onHide()
    dispatch(fetchAvailabilitySettingUsers(availabilitySettingUsersUIProps.queryParams))
    availabilitySettingUsersUIProps.setIds([])
  }

  const onDeleteAvailabilitySettingUser = () => {
    // server request for deleting availabilitySettingUser by id
    dispatch(deleteAvailabilitySettingUser(params))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteAvailabilitySettingUser}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="AVAILABILITY_SETTING_USER.DELETE.TITLE" />}
      body={<FormattedMessage id="AVAILABILITY_SETTING_USER.DELETE.MSG" />}
    />
  )
}


export default AvailabilitySettingUserDeleteDialog
