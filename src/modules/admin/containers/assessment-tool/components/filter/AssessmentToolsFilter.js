import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useAssessmentToolsUIContext } from "../../context/AssessmentToolsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const AssessmentToolsFilter = () => {
  // AssessmentTools UI Context
  const assessmentToolsUIContext = useAssessmentToolsUIContext()
  const assessmentToolsUIProps = useMemo(() => {
    return {
      ...assessmentToolsUIContext
    }
  }, [assessmentToolsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...assessmentToolsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, assessmentToolsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      assessmentToolsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default AssessmentToolsFilter
