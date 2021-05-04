import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import availabilitySettingStructureColumn from "./fields/availabilitySettingStructureFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchAvailabilitySettingStructures }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useAvailabilitySettingStructuresUIContext } from "../../context/AvailabilitySettingStructuresUIContext"

const AvailabilitySettingStructureTable = ({ intl }) => {
  // AvailabilitySettingStructures UI Context
  const availabilitySettingStructuresUIProps = useAvailabilitySettingStructuresUIContext()
  
  const columns = availabilitySettingStructureColumn({ intl, availabilitySettingStructuresUIProps })

  // Getting curret state of availabilitySettingStructures list from store (Redux)
  const { totalSize, availabilitySettingStructures: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.availabilitySettingStructure }),
    shallowEqual
  )
  // AvailabilitySettingStructures Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    availabilitySettingStructuresUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchAvailabilitySettingStructures({ ...(availabilitySettingStructuresUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availabilitySettingStructuresUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={availabilitySettingStructuresUIProps.queryParams}
        onQueryParamsChange={availabilitySettingStructuresUIProps.setQueryParams}
        ids={availabilitySettingStructuresUIProps.ids}
        setIds={availabilitySettingStructuresUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(AvailabilitySettingStructureTable)
