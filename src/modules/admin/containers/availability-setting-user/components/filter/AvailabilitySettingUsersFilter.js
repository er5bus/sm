import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useAvailabilitySettingUsersUIContext } from "../../context/AvailabilitySettingUsersUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const AvailabilitySettingUsersFilter = () => {
  // AvailabilitySettingUsers UI Context
  const availabilitySettingUsersUIContext = useAvailabilitySettingUsersUIContext()
  const availabilitySettingUsersUIProps = useMemo(() => {
    return {
      ...availabilitySettingUsersUIContext
    }
  }, [availabilitySettingUsersUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...availabilitySettingUsersUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, availabilitySettingUsersUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      availabilitySettingUsersUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default AvailabilitySettingUsersFilter
