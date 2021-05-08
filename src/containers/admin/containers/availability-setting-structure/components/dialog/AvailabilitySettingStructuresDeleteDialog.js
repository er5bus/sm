/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials"
import { useAvailabilitySettingStructuresUIContext } from "../../context/AvailabilitySettingStructuresUIContext"
import { fetchAvailabilitySettingStructures, deleteAvailabilitySettingStructures } from "../../store/actions"

const AvailabilitySettingStructuresDeleteDialog = ({ show, onHide }) => {
  // AvailabilitySettingStructures UI Context
  const availabilitySettingStructuresUIProps = useAvailabilitySettingStructuresUIContext()

  // AvailabilitySettingStructures Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.availabilitySettingStructure.isLoading, success: state.admin.availabilitySettingStructure.success }),
    shallowEqual
  )

  // if there weren"t selected availabilitySettingStructures we should close modal
  const onRefresh = () => {
    onHide()
    availabilitySettingStructuresUIProps.setIds([])
    dispatch(fetchAvailabilitySettingStructures(availabilitySettingStructuresUIProps.queryParams))
  }

  const onDeleteAvailabilitySettingStructures = () => {
    // server request for deleting availabilitySettingStructure by seleted ids
    dispatch(deleteAvailabilitySettingStructures(availabilitySettingStructuresUIProps.ids))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteAvailabilitySettingStructures}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="AVAILABILITY_SETTING_STRUCTURE.MULTIPLE_DELETE.TITLE" />}
      body={<FormattedMessage id="AVAILABILITY_SETTING_STRUCTURE.MULTIPLE_DELETE.MSG" />}
    />
  )
}

export default AvailabilitySettingStructuresDeleteDialog
