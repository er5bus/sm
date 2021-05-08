import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import folderDocumentFields from "./fields/folderDocumentFields"
import { fetchFolderDocuments }  from "../../store/actions"
import { DataTable } from "../../../../../../../../components/partials/controls"
import { useFolderDocumentsUIContext } from "../../context/FolderDocumentsUIContext"


const FolderDocumentTable = ({ intl, folderParam }) => {
  // FolderDocuments UI Context
  const folderDocumentsUIProps = useFolderDocumentsUIContext()

  const columns = folderDocumentFields({ intl, folderDocumentsUIProps })

  // Getting curret state of folderDocuments list from store (Redux)
  const { totalSize, folderDocuments: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.folderDocument }),
    shallowEqual
  )
  // FolderDocuments Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    folderDocumentsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchFolderDocuments({ ...(folderDocumentsUIProps.queryParams || {}), param: folderParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderDocumentsUIProps.queryParams, dispatch])

  return (
    <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={folderDocumentsUIProps.queryParams}
        onQueryParamsChange={folderDocumentsUIProps.setQueryParams}
      />
  )
}

//ids={folderDocumentsUIProps.ids}
//setIds={folderDocumentsUIProps.setIds}

export default injectIntl(FolderDocumentTable)
