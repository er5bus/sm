import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const SchoolDropoutsFilter = () => {
  // SchoolDropouts UI Context
  const schoolDropoutsUIContext = useSchoolDropoutsUIContext()
  const schoolDropoutsUIProps = useMemo(() => {
    return {
      ...schoolDropoutsUIContext
    }
  }, [schoolDropoutsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...schoolDropoutsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, schoolDropoutsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      schoolDropoutsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default SchoolDropoutsFilter
