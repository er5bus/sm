/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteFolderDocument, fetchFolderDocuments } from "../../store/actions"
import { useFolderDocumentsUIContext } from "../../context/FolderDocumentsUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const FolderDocumentDeleteDialog = ({ params, show, onHide }) => {
  // FolderDocuments UI Context
  const folderDocumentsUIProps = useFolderDocumentsUIContext()
  
  // FolderDocuments Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.folderDocument.isLoading, success: state.admin.folderDocument.success }),
    shallowEqual
  )

  const onDeleteFolderDocument = () => {
    // server request for deleting folderDocument by id
    dispatch(deleteFolderDocument(params))
  }

  const onRefresh = () => {
    dispatch(fetchFolderDocuments(params))
    folderDocumentsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteFolderDocument}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="FOLDER_DOCUMENT.DELETE.TITLE" />}
      body={<FormattedMessage id="FOLDER_DOCUMENT.DELETE.MSG" />}
    />
  )
}


export default FolderDocumentDeleteDialog
