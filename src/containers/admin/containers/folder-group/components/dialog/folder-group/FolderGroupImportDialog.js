/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../../components/partials/controls"
import { useFolderGroupsUIContext } from "../../../context/FolderGroupsUIContext"
import { fetchFolderGroups} from "../../../store/actions"
import { ENDPOINTS } from "../../../store/constants"


const FolderGroupDisableDialog = ({ show, onHide }) => {
  // FolderGroups UI Context
  const folderGroupUIProps = useFolderGroupsUIContext()
  
  // FolderGroups Redux state
  const dispatch = useDispatch()

  const onImportFolderGroupFinish = () => {
    dispatch(fetchFolderGroups(folderGroupUIProps.queryParams))
    folderGroupUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="FOLDER_GROUP.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportFolderGroupFinish} 
      url={ENDPOINTS.IMPORT_GROUP_FOLDERS}
    />
  )
}


export default FolderGroupDisableDialog
