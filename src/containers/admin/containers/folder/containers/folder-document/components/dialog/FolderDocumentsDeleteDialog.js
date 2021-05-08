/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../../components/partials"
import { useFolderDocumentsUIContext } from "../../context/FolderDocumentsUIContext"
import {fetchFolderDocuments, deleteFolderDocuments} from "../../store/actions"


const FolderDocumentsDeleteDialog = ({ show, onHide }) => {
  // FolderDocuments UI Context
  const folderDocumentsUIProps = useFolderDocumentsUIContext()
  
  // FolderDocuments Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folderDocument.isLoading, success: state.admin.folderDocument.success }),
    shallowEqual
  )

  const onDeleteFolderDocuments = () => {
    // server request for deleting folderDocument by seleted ids
    dispatch(deleteFolderDocuments(folderDocumentsUIProps.ids))
  }

  const onRefresh = () => {
    folderDocumentsUIProps.setIds([])
    dispatch(fetchFolderDocuments(folderDocumentsUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteFolderDocuments}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="FOLDER_DOCUMENT.MULTIPLE_DELETE.TITLE" />}
      body={<FormattedMessage id="FOLDER_DOCUMENT.MULTIPLE_DELETE.MSG" />}
    />
  )
}


export default FolderDocumentsDeleteDialog
