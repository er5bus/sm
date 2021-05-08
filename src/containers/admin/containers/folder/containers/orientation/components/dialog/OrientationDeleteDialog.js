/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteOrientation, fetchOrientations } from "../../store/actions"
import { useOrientationsUIContext } from "../../context/OrientationsUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const OrientationDeleteDialog = ({ params, show, onHide }) => {
  // Orientations UI Context
  const orientationsUIProps = useOrientationsUIContext()
  
  // Orientations Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.orientation.isLoading, success: state.admin.orientation.success }),
    shallowEqual
  )

  const onDeleteOrientation = () => {
    // server request for deleting orientation by id
    dispatch(deleteOrientation(params))
  }

  const onRefresh = () => {
    dispatch(fetchOrientations(params))
    orientationsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteOrientation}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="ORIENTATION.DELETE.TITLE" />}
      body={<FormattedMessage id="ORIENTATION.DELETE.MSG" />}
    />
  )
}


export default OrientationDeleteDialog
