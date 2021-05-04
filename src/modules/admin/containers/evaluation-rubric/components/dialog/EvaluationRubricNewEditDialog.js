/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { FormModal } from "../../../../../../components/partials/controls"
import { createEvaluationRubric, clearStore, fetchEvaluationRubrics, editEvaluationRubric, fetchEvaluationRubric } from "../../store/actions"
import EvaluationRubricForm from "../form/EvaluationRubricForm"
import {useEvaluationRubricsUIContext} from "../../context/EvaluationRubricsUIContext"

const EvaluationRubricDisplayDialog = ({ params, show, onHide, intl }) => {
  // EvaluationRubrics UI Context
  const evaluationRubricsUIProps = useEvaluationRubricsUIContext()

  const dispatch = useDispatch()
  const { isLoading, evaluationRubricForEdit, success } = useSelector(
    (state) => ({
      isLoading: state.admin.evaluationRubric.isLoading,
      success: state.admin.evaluationRubric.success,
      evaluationRubricForEdit: state.admin.evaluationRubric.evaluationRubric,
      error: state.admin.evaluationRubric.error
    }),
    shallowEqual
  )

  const saveEvaluationRubric = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createEvaluationRubric(values))
    } else {
      dispatch(editEvaluationRubric(params, values))
    }
  }

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchEvaluationRubric(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  const onSuccess = () => {
    dispatch(fetchEvaluationRubrics(evaluationRubricsUIProps.queryParams))
    evaluationRubricsUIProps.setIds([])
  }

  return (
    <FormModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "EVALUATION_RUBRIC.EDIT.TITLE" })
        : intl.formatMessage({ id: "EVALUATION_RUBRIC.NEW.TITLE" })}
      show={show}
      isLoading={isLoading}
      onHide={onHide}
      onSuccess={onSuccess}
      success={success.isCreated || success.isUpdated}
    >
      { ({ saveRef }) => (<EvaluationRubricForm
        isLoading={isLoading}
        success={success.isCreated}
        evaluationRubric={ !_.isEmpty(params) && evaluationRubricForEdit}
        onSubmit={saveEvaluationRubric}
        saveRef={saveRef}
      />)
      }
    </FormModal>
  )
}


export default injectIntl(EvaluationRubricDisplayDialog)
