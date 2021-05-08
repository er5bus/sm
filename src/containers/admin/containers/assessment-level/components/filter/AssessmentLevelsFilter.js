import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useAssessmentLevelsUIContext } from "../../context/AssessmentLevelsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const AssessmentLevelsFilter = () => {
  // AssessmentLevels UI Context
  const assessmentLevelsUIContext = useAssessmentLevelsUIContext()
  const assessmentLevelsUIProps = useMemo(() => {
    return {
      ...assessmentLevelsUIContext
    }
  }, [assessmentLevelsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...assessmentLevelsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, assessmentLevelsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      assessmentLevelsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default AssessmentLevelsFilter
