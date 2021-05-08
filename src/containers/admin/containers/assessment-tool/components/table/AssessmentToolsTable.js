import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import assessmentToolColumn from "./fields/assessmentToolFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchAssessmentTools }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useAssessmentToolsUIContext } from "../../context/AssessmentToolsUIContext"

const AssessmentToolTable = ({ intl }) => {
  // AssessmentTools UI Context
  const assessmentToolsUIProps = useAssessmentToolsUIContext()
  
  const columns = assessmentToolColumn({ intl, assessmentToolsUIProps })

  // Getting curret state of assessmentTools list from store (Redux)
  const { totalSize, assessmentTools: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.assessmentTool }),
    shallowEqual
  )
  // AssessmentTools Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    assessmentToolsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchAssessmentTools({ ...(assessmentToolsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessmentToolsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={assessmentToolsUIProps.queryParams}
        onQueryParamsChange={assessmentToolsUIProps.setQueryParams}
        ids={assessmentToolsUIProps.ids}
        setIds={assessmentToolsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(AssessmentToolTable)
