import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useServicesUIContext } from "../../context/ServicesUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const ServicesFilter = () => {
  // Services UI Context
  const servicesUIContext = useServicesUIContext()
  const servicesUIProps = useMemo(() => {
    return {
      ...servicesUIContext
    }
  }, [servicesUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...servicesUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, servicesUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      servicesUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default ServicesFilter
