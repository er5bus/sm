/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../../components/partials"
import { useOrientationsUIContext } from "../../context/OrientationsUIContext"
import {fetchOrientations, deleteOrientations} from "../../store/actions"


const OrientationsDeleteDialog = ({ show, onHide }) => {
  // Orientations UI Context
  const orientationsUIProps = useOrientationsUIContext()
  
  // Orientations Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.orientation.isLoading, success: state.admin.orientation.success }),
    shallowEqual
  )

  const onDeleteOrientations = () => {
    // server request for deleting orientation by seleted ids
    dispatch(deleteOrientations(orientationsUIProps.ids))
  }

  const onRefresh = () => {
    orientationsUIProps.setIds([])
    dispatch(fetchOrientations(orientationsUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteOrientations}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="ORIENTATION.MULTIPLE_DELETE.TITLE" />}
      body={<FormattedMessage id="ORIENTATION.MULTIPLE_DELETE.MSG" />}
    />
  )
}


export default OrientationsDeleteDialog
