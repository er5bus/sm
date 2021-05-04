/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../components/partials"
import { canBeJustified } from "../../../store/actions"

const FolderJustifiedDialog = ({ history, params, goBackToList, show = true }) => {
  // Folders Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folder.isLoading, success: state.admin.folder.success }),
    shallowEqual
  )

  const onHide = () => {
    history.goBack()
  }

  const onJustifiedFolder = () => {
    // server request for deleting smsSkeleton by id
    dispatch(canBeJustified(params.param))
    onHide()
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={goBackToList}
      onClick={onJustifiedFolder}
      isLoading={isLoading}
      success={success.isUpdated}
      title={<FormattedMessage id="FOLDER.JUSTIFIED.TITLE" />}
      body={<FormattedMessage id="FOLDER.JUSTIFIED.MSG" />}
    />
  )
}


export default FolderJustifiedDialog
