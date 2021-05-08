import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import assessmentLevelColumn from "./fields/assessmentLevelFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchAssessmentLevels }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useAssessmentLevelsUIContext } from "../../context/AssessmentLevelsUIContext"

const AssessmentLevelTable = ({ intl }) => {
  // AssessmentLevels UI Context
  const assessmentLevelsUIProps = useAssessmentLevelsUIContext()
  
  const columns = assessmentLevelColumn({ intl, assessmentLevelsUIProps })

  // Getting curret state of assessmentLevels list from store (Redux)
  const { totalSize, assessmentLevels: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.assessmentLevel }),
    shallowEqual
  )
  // AssessmentLevels Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    assessmentLevelsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchAssessmentLevels({ ...(assessmentLevelsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessmentLevelsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={assessmentLevelsUIProps.queryParams}
        onQueryParamsChange={assessmentLevelsUIProps.setQueryParams}
        ids={assessmentLevelsUIProps.ids}
        setIds={assessmentLevelsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(AssessmentLevelTable)
