import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import orientationFields from "./fields/orientationFields"
import { fetchOrientations }  from "../../store/actions"
import { DataTable } from "../../../../../../../../components/partials/controls"
import { useOrientationsUIContext } from "../../context/OrientationsUIContext"


const OrientationTable = ({ intl, folderParam }) => {
  // Orientations UI Context
  const orientationsUIProps = useOrientationsUIContext()

  const columns = orientationFields({ intl, orientationsUIProps })

  // Getting curret state of orientations list from store (Redux)
  const { totalSize, orientations: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.orientation }),
    shallowEqual
  )
  // Orientations Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    orientationsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchOrientations({ ...(orientationsUIProps.queryParams || {}), param: folderParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientationsUIProps.queryParams, dispatch])

  return (
    <DataTable
      isFetching={isFetching}
      entities={entities}
      columns={columns}
      totalSize={totalSize}
      queryParams={orientationsUIProps.queryParams}
      onQueryParamsChange={orientationsUIProps.setQueryParams}
    />
  )
}


export default injectIntl(OrientationTable)
