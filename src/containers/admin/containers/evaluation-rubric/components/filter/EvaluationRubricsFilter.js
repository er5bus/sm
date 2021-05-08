import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useEvaluationRubricsUIContext } from "../../context/EvaluationRubricsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const EvaluationRubricsFilter = () => {
  // EvaluationRubrics UI Context
  const evaluationRubricsUIContext = useEvaluationRubricsUIContext()
  const evaluationRubricsUIProps = useMemo(() => {
    return {
      ...evaluationRubricsUIContext
    }
  }, [evaluationRubricsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...evaluationRubricsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, evaluationRubricsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      evaluationRubricsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default EvaluationRubricsFilter
