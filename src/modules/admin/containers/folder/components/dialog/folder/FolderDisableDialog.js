/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../components/partials"
import { useFoldersUIContext } from "../../../context/FoldersUIContext"
import {disableFolder, fetchFolders} from "../../../store/actions"

const FolderDisableDialog = ({ params, show, onHide }) => {
  // Folders UI Context
  const foldersUIProps = useFoldersUIContext()

  // Folders Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folder.isLoading, success: state.admin.folder.success }),
    shallowEqual
  )

  const onDisableFolder = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableFolder(params))
  }

  const onRefresh = () => {
    dispatch(fetchFolders(foldersUIProps.queryParams))
    foldersUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableFolder}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="FOLDER.DISABLE.TITLE" />}
      body={<FormattedMessage id="FOLDER.DISABLE.MSG" />}
    />
  )
}

export default FolderDisableDialog
