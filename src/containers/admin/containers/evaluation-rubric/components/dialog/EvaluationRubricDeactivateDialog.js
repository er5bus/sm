/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { deactivateEvaluationRubric, fetchEvaluationRubrics } from "../../store/actions"
import { useEvaluationRubricsUIContext } from "../../context/EvaluationRubricsUIContext"


const EvaluationRubricDedeactivateDialog = ({ params, show, onHide }) => {
  // EvaluationRubrics UI Context
  const evaluationRubricsUIProps = useEvaluationRubricsUIContext()
  
  // EvaluationRubrics Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.evaluationRubric.isLoading, success: state.admin.evaluationRubric.success }),
    shallowEqual
  )

  const onDedeactivateEvaluationRubric = () => {
    // server request for deleting evaluationRubric by id
    dispatch(deactivateEvaluationRubric(params))
  }

  const onRefresh = () => {
    dispatch(fetchEvaluationRubrics(evaluationRubricsUIProps.queryParams))
    evaluationRubricsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDedeactivateEvaluationRubric}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="EVALUATION_RUBRIC.DELETE.TITLE" />}
      body={<FormattedMessage id="EVALUATION_RUBRIC.DELETE.MSG" />}
    />
  )
}


export default EvaluationRubricDedeactivateDialog
