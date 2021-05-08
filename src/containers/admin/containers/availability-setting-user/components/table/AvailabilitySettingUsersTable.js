import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import availabilitySettingUserColumn from "./fields/availabilitySettingUserFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchAvailabilitySettingUsers }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useAvailabilitySettingUsersUIContext } from "../../context/AvailabilitySettingUsersUIContext"

const AvailabilitySettingUserTable = ({ intl }) => {
  // AvailabilitySettingUsers UI Context
  const availabilitySettingUsersUIProps = useAvailabilitySettingUsersUIContext()
  
  const columns = availabilitySettingUserColumn({ intl, availabilitySettingUsersUIProps })

  // Getting curret state of availabilitySettingUsers list from store (Redux)
  const { totalSize, availabilitySettingUsers: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.availabilitySettingUser }),
    shallowEqual
  )
  // AvailabilitySettingUsers Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    availabilitySettingUsersUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchAvailabilitySettingUsers({ ...(availabilitySettingUsersUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availabilitySettingUsersUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={availabilitySettingUsersUIProps.queryParams}
        onQueryParamsChange={availabilitySettingUsersUIProps.setQueryParams}
        ids={availabilitySettingUsersUIProps.ids}
        setIds={availabilitySettingUsersUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(AvailabilitySettingUserTable)
