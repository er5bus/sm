import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import periodUnavailabilityColumn from "./fields/periodUnavailabilityFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchPeriodUnavailabilitys }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { usePeriodUnavailabilitysUIContext } from "../../context/PeriodUnavailabilitysUIContext"

const PeriodUnavailabilityTable = ({ intl }) => {
  // PeriodUnavailabilitys UI Context
  const periodUnavailabilitysUIProps = usePeriodUnavailabilitysUIContext()
  
  const { isSuperAdmin } = useSelector((state) => ({ isSuperAdmin: state.common.auth.isSuperuser }), shallowEqual)

  const columns = periodUnavailabilityColumn({ intl, periodUnavailabilitysUIProps, isSuperAdmin })

  // Getting curret state of periodUnavailabilitys list from store (Redux)
  const { totalSize, periodUnavailabilitys: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.periodUnavailability }),
    shallowEqual
  )
  // PeriodUnavailabilitys Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    periodUnavailabilitysUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchPeriodUnavailabilitys({ ...(periodUnavailabilitysUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [periodUnavailabilitysUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={periodUnavailabilitysUIProps.queryParams}
        onQueryParamsChange={periodUnavailabilitysUIProps.setQueryParams}
      />
    </>
  )
}


export default injectIntl(PeriodUnavailabilityTable)
