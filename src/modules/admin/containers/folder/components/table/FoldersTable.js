import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {DataTable} from "../../../../../../components/partials"
import { useFoldersUIContext } from "../../context/FoldersUIContext"
import { fetchFolders } from "../../store/actions"
import folderColumn from "./fields/folderFields"


const FolderTable = ({ intl }) => {
  // Folders UI Context
  const foldersUIProps = useFoldersUIContext()

  const columns = folderColumn({ intl, foldersUIProps })

  // Getting curret state of folders list from store (Redux)
  const { totalSize, folders: entities = [], isFetching } = useSelector(
    (state) => ({
      folders: state.admin.folder.folders,
      isFetching: state.admin.folder.isFetching,
      totalSize: state.admin.folder.totalSize,
    }),
    shallowEqual
  )
  // Folders Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    foldersUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchFolders(foldersUIProps.queryParams))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foldersUIProps.queryParams, dispatch])


  return (
    <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={foldersUIProps.queryParams}
        onQueryParamsChange={foldersUIProps.setQueryParams}
        ids={foldersUIProps.ids}
        setIds={foldersUIProps.setIds}
      />
  )
}

export default injectIntl(FolderTable)
