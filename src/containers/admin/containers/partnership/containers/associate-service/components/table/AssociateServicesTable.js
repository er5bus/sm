import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import associateServiceColumns from "./fields/associateServiceFields"
import { fetchAssociateServices }  from "../../store/actions"
import { useAssociateServicesUIContext } from "../../context/AssociateServicesUIContext"
import {DataTable} from "../../../../../../../../components/partials"

const AssociateServiceTable = ({ intl, partnershipParam }) => {
  // AssociateServices UI Context
  const associateServicesUIProps = useAssociateServicesUIContext()

  // Getting curret state of associateServices list from store (Redux)
  const { totalSize, associateServices: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.associateService }),
    shallowEqual
  )
  // AssociateServices Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    associateServicesUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchAssociateServices({ ...(associateServicesUIProps.queryParams || {}), param: partnershipParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [associateServicesUIProps.queryParams, dispatch])

  // Table columns
  const columns = associateServiceColumns({ intl, associateServicesUIProps })

  return (
    <>
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={associateServicesUIProps.queryParams}
        onQueryParamsChange={associateServicesUIProps.setQueryParams}
        ids={associateServicesUIProps.ids}
        setIds={associateServicesUIProps.setIds}
      />
    </>
  )
}

export default injectIntl(AssociateServiceTable)
