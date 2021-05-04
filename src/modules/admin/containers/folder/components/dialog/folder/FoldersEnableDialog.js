/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../components/partials"
import { useFoldersUIContext } from "../../../context/FoldersUIContext"
import {enableFolders, fetchFolders} from "../../../store/actions"


const FoldersDisableDialog = ({ show, onHide }) => {
  // Folders UI Context
  const foldersUIProps = useFoldersUIContext()

  // Folders Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folder.isLoading, success: state.admin.folder.success }),
    shallowEqual
  )

  const onEnableFolders = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(enableFolders(foldersUIProps.ids))
  }

  const onRefresh = () => {
    foldersUIProps.setIds([])
      dispatch(fetchFolders(foldersUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onEnableFolders}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="FOLDER.MULTIPLE_ENABLE.TITLE" />}
      body={<FormattedMessage id="FOLDER.MULTIPLE_ENABLE.MSG" />}
    />
  )
}


export default FoldersDisableDialog
