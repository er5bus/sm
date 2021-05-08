import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import evaluationRubricColumn from "./fields/evaluationRubricFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchEvaluationRubrics }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useEvaluationRubricsUIContext } from "../../context/EvaluationRubricsUIContext"

const EvaluationRubricTable = ({ intl }) => {
  // EvaluationRubrics UI Context
  const evaluationRubricsUIProps = useEvaluationRubricsUIContext()
  
  const columns = evaluationRubricColumn({ intl, evaluationRubricsUIProps })

  // Getting curret state of evaluationRubrics list from store (Redux)
  const { totalSize, evaluationRubrics: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.evaluationRubric }),
    shallowEqual
  )
  // EvaluationRubrics Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    evaluationRubricsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchEvaluationRubrics({ ...(evaluationRubricsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evaluationRubricsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={evaluationRubricsUIProps.queryParams}
        onQueryParamsChange={evaluationRubricsUIProps.setQueryParams}
        ids={evaluationRubricsUIProps.ids}
        setIds={evaluationRubricsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(EvaluationRubricTable)
