import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useAvailabilitySettingStructuresUIContext } from "../../context/AvailabilitySettingStructuresUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const AvailabilitySettingStructuresFilter = () => {
  // AvailabilitySettingStructures UI Context
  const availabilitySettingStructuresUIContext = useAvailabilitySettingStructuresUIContext()
  const availabilitySettingStructuresUIProps = useMemo(() => {
    return {
      ...availabilitySettingStructuresUIContext
    }
  }, [availabilitySettingStructuresUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...availabilitySettingStructuresUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, availabilitySettingStructuresUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      availabilitySettingStructuresUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default AvailabilitySettingStructuresFilter
