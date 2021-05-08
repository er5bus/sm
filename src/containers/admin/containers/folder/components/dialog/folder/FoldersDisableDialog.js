/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../components/partials"
import { useFoldersUIContext } from "../../../context/FoldersUIContext"
import {disableFolders, fetchFolders} from "../../../store/actions"

const FoldersDisableDialog = ({ show, onHide }) => {
  // Folders UI Context
  const foldersUIProps = useFoldersUIContext()
  
  // Folders Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folder.isLoading, success: state.admin.folder.success }),
    shallowEqual
  )

  const onDisableFolders = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(disableFolders(foldersUIProps.ids))
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
      onClick={onDisableFolders}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="FOLDER.MULTIPLE_DISABLE.TITLE" />}
      body={<FormattedMessage id="FOLDER.MULTIPLE_DISABLE.MSG" />}
    />
  )
}


export default FoldersDisableDialog
