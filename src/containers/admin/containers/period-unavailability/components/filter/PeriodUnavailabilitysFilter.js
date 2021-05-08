import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { usePeriodUnavailabilitysUIContext } from "../../context/PeriodUnavailabilitysUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const PeriodUnavailabilitysFilter = () => {
  // PeriodUnavailabilitys UI Context
  const periodUnavailabilitysUIContext = usePeriodUnavailabilitysUIContext()
  const periodUnavailabilitysUIProps = useMemo(() => {
    return {
      ...periodUnavailabilitysUIContext
    }
  }, [periodUnavailabilitysUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...periodUnavailabilitysUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, periodUnavailabilitysUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      periodUnavailabilitysUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default PeriodUnavailabilitysFilter
