/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../../components/partials/controls"
import { useFolderGroupsUIContext } from "../../../context/FolderGroupsUIContext"
import {disableFolderGroup, fetchFolderGroups} from "../../../store/actions"

const FolderGroupDisableDialog = ({ params, show, onHide }) => {
  // FolderGroups UI Context
  const folderGroupUIProps = useFolderGroupsUIContext()

  // FolderGroups Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folderGroup.isLoading, success: state.admin.folderGroup.success }),
    shallowEqual
  )

  const onDisableFolderGroup = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableFolderGroup(params))
  }

  const onRefresh = () => {
    dispatch(fetchFolderGroups(folderGroupUIProps.queryParams))
    folderGroupUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisableFolderGroup}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="FOLDER_GROUP.DISABLE.TITLE" />}
      body={<FormattedMessage id="FOLDER_GROUP.DISABLE.MSG" />}
    />
  )
}


export default FolderGroupDisableDialog
