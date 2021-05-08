import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useFolderGroupsUIContext } from "../../context/FolderGroupsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const FolderGroupsFilter = () => {
  // FolderGroups UI Context
  const folderGroupsUIContext = useFolderGroupsUIContext()
  const folderGroupsUIProps = useMemo(() => {
    return {
      ...folderGroupsUIContext
    }
  }, [folderGroupsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...folderGroupsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, folderGroupsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      folderGroupsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default FolderGroupsFilter
