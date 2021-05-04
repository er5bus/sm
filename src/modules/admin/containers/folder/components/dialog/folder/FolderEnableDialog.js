/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../components/partials"
import { useFoldersUIContext } from "../../../context/FoldersUIContext"
import {enableFolder, fetchFolders} from "../../../store/actions"

const FolderEnableDialog = ({ params, show, onHide }) => {
  // Folders UI Context
  const foldersUIProps = useFoldersUIContext()
  
  // Folders Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folder.isLoading, success: state.admin.folder.success }),
    shallowEqual
  )

  const onEnablefolder = () => {
    // server request for deleting Folders by id
    dispatch(enableFolder(params))
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
      onClick={onEnablefolder}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="FOLDER.ENABLE.TITLE" />}
      body={<FormattedMessage id="FOLDER.ENABLE.MSG" />}
    />
  )
}


export default FolderEnableDialog
