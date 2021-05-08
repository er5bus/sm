import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import folderGroupColumn from "./fields/folderGroupFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchFolderGroups }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useFolderGroupsUIContext } from "../../context/FolderGroupsUIContext"

const FolderGroupTable = ({ intl }) => {
  // FolderGroups UI Context
  const folderGroupsUIProps = useFolderGroupsUIContext()
  
  const columns = folderGroupColumn({ intl, folderGroupsUIProps })

  // Getting curret state of folderGroups list from store (Redux)
  const { totalSize, folderGroups: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.folderGroup }),
    shallowEqual
  )
  // FolderGroups Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    folderGroupsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchFolderGroups({ ...(folderGroupsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderGroupsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={folderGroupsUIProps.queryParams}
        onQueryParamsChange={folderGroupsUIProps.setQueryParams}
        ids={folderGroupsUIProps.ids}
        setIds={folderGroupsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(FolderGroupTable)
