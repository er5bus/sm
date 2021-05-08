/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { closeOrientation, fetchOrientations } from "../../store/actions"
import { useOrientationsUIContext } from "../../context/OrientationsUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const OrientationCloseDialog = ({ params, show, onHide }) => {
  // Orientations UI Context
  const orientationsUIProps = useOrientationsUIContext()
  
  // Orientations Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.orientation.isLoading, success: state.admin.orientation.success }),
    shallowEqual
  )

  const onCloseOrientation = () => {
    // server request for deleting orientation by id
    dispatch(closeOrientation(params))
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
      onClick={onCloseOrientation}
      isLoading={isLoading}
      success={success.isClosed}
      title={<FormattedMessage id="ORIENTATION.CLOSE.TITLE" />}
      body={<FormattedMessage id="ORIENTATION.CLOSE.MSG" />}
    />
  )
}


export default OrientationCloseDialog
