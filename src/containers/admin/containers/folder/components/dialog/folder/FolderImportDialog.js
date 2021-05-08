/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../../components/partials/controls"
import {useFoldersUIContext} from "../../../context/FoldersUIContext"
import { fetchFolders} from "../../../store/actions"
import { ENDPOINTS } from "../../../store/constants"


const FolderImportDialog = ({ show, onHide }) => {
  // Folders UI Context
  const folderUIProps = useFoldersUIContext()
  
  // Folders Redux state
  const dispatch = useDispatch()

  const onImportFolderFinish = () => {
    dispatch(fetchFolders(folderUIProps.queryParams))
    folderUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="FOLDER.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportFolderFinish} 
      url={ENDPOINTS.IMPORT_FOLDERS}
    />
  )
}


export default FolderImportDialog
