/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../components/partials"
import { useFolderGroupsUIContext } from "../../../context/FolderGroupsUIContext"
import {enableFolderGroup, fetchFolderGroups} from "../../../store/actions"

const FolderGroupEnableDialog = ({ params, show, onHide }) => {
  // FolderGroups UI Context
  const folderGroupsUIProps = useFolderGroupsUIContext()

  // FolderGroups Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folderGroup.isLoading, success: state.admin.folderGroup.success }),
    shallowEqual
  )

  const onEnablefolderGroup = () => {
    // server request for deleting FolderGroups by id
    dispatch(enableFolderGroup(params))
  }

  const onRefresh = () => {
    dispatch(fetchFolderGroups(folderGroupsUIProps.queryParams))
    folderGroupsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onEnablefolderGroup}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="FOLDER_GROUP.ENABLE.TITLE" />}
      body={<FormattedMessage id="FOLDER_GROUP.ENABLE.MSG" />}
    />
  )
}


export default FolderGroupEnableDialog
