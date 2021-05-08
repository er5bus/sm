/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../components/partials"
import { backToBeingProcessed } from "../../../store/actions"

const FolderBackToBeingProcessedDialog = ({ history, params, goBackToList, show = true }) => {
  // Folders Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folder.isLoading, success: state.admin.folder.success }),
    shallowEqual
  )

  const onHide = () => {
    history.goBack()
  }

  const onBackToBeingProcessed = () => {
    // server request for deleting smsSkeleton by id
    dispatch(backToBeingProcessed(params.param))
    onHide()
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={goBackToList}
      onClick={onBackToBeingProcessed}
      isLoading={isLoading}
      success={success.isUpdated}
      title={<FormattedMessage id="FOLDER.BACK_TO_BEING_PROCESSED.TITLE" />}
      body={<FormattedMessage id="FOLDER.BACK_TO_BEING_PROCESSED.MSG" />}
    />
  )
}


export default FolderBackToBeingProcessedDialog
