/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useAvailabilitySettingUsersUIContext } from "../../context/AvailabilitySettingUsersUIContext"
import { fetchAvailabilitySettingUsers, deleteAvailabilitySettingUsers } from "../../store/actions"

const AvailabilitySettingUsersDeleteDialog = ({ show, onHide }) => {
  // AvailabilitySettingUsers UI Context
  const availabilitySettingUsersUIProps = useAvailabilitySettingUsersUIContext()

  // AvailabilitySettingUsers Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.availabilitySettingUser.isLoading, success: state.admin.availabilitySettingUser.success }),
    shallowEqual
  )

  // if there weren"t selected availabilitySettingUsers we should close modal
  const onRefresh = () => {
    onHide()
    availabilitySettingUsersUIProps.setIds([])
    dispatch(fetchAvailabilitySettingUsers(availabilitySettingUsersUIProps.queryParams))
  }

  const onDeleteAvailabilitySettingUsers = () => {
    // server request for deleting availabilitySettingUser by seleted ids
    dispatch(deleteAvailabilitySettingUsers(availabilitySettingUsersUIProps.ids))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteAvailabilitySettingUsers}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="AVAILABILITY_SETTING_USER.MULTIPLE_DELETE.TITLE" />}
      body={<FormattedMessage id="AVAILABILITY_SETTING_USER.MULTIPLE_DELETE.MSG" />}
    />
  )
}

export default AvailabilitySettingUsersDeleteDialog
