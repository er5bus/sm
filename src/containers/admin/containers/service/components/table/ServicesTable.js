import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import serviceColumn from "./fields/serviceFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchServices }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useServicesUIContext } from "../../context/ServicesUIContext"

const ServiceTable = ({ intl }) => {
  // Services UI Context
  const servicesUIProps = useServicesUIContext()
  
  const columns = serviceColumn({ intl, servicesUIProps })

  // Getting curret state of services list from store (Redux)
  const { totalSize, services: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.service }),
    shallowEqual
  )
  // Services Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    servicesUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchServices({ ...(servicesUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={servicesUIProps.queryParams}
        onQueryParamsChange={servicesUIProps.setQueryParams}
        ids={servicesUIProps.ids}
        setIds={servicesUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(ServiceTable)
