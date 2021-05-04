import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import schoolDropoutColumn from "./fields/schoolDropoutFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchSchoolDropouts }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"

const SchoolDropoutTable = ({ intl }) => {
  // SchoolDropouts UI Context
  const schoolDropoutsUIProps = useSchoolDropoutsUIContext()
  
  const columns = schoolDropoutColumn({ intl, schoolDropoutsUIProps })

  // Getting curret state of schoolDropouts list from store (Redux)
  const { totalSize, schoolDropouts: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.schoolDropout }),
    shallowEqual
  )
  // SchoolDropouts Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    schoolDropoutsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchSchoolDropouts({ ...(schoolDropoutsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schoolDropoutsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={schoolDropoutsUIProps.queryParams}
        onQueryParamsChange={schoolDropoutsUIProps.setQueryParams}
        ids={schoolDropoutsUIProps.ids}
        setIds={schoolDropoutsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(SchoolDropoutTable)
