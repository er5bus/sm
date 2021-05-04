/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteAvailabilitySettingStructure, fetchAvailabilitySettingStructures } from "../../store/actions"
import { useAvailabilitySettingStructuresUIContext } from "../../context/AvailabilitySettingStructuresUIContext"
import {ActionModal} from "../../../../../../components/partials"

const AvailabilitySettingStructureDeleteDialog = ({ params, show, onHide }) => {
  // AvailabilitySettingStructures UI Context
  const availabilitySettingStructuresUIProps = useAvailabilitySettingStructuresUIContext()

  // AvailabilitySettingStructures Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.availabilitySettingStructure.isLoading, success: state.admin.availabilitySettingStructure.success }),
    shallowEqual
  )

  // if !id we should close modal
  const onRefresh = () => {
    onHide()
    dispatch(fetchAvailabilitySettingStructures(availabilitySettingStructuresUIProps.queryParams))
    availabilitySettingStructuresUIProps.setIds([])
  }

  const onDeleteAvailabilitySettingStructure = () => {
    // server request for deleting availabilitySettingStructure by id
    dispatch(deleteAvailabilitySettingStructure(params))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteAvailabilitySettingStructure}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="AVAILABILITY_SETTING_STRUCTURE.DELETE.TITLE" />}
      body={<FormattedMessage id="AVAILABILITY_SETTING_STRUCTURE.DELETE.MSG" />}
    />
  )
}


export default AvailabilitySettingStructureDeleteDialog
