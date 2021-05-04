/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ShowModal } from "../../../../../../components/partials/controls"
import { clearStore, fetchEvaluationRubric } from "../../store/actions"
import EvaluationRubric from "../display/EvaluationRubric"

const EvaluationRubricShowDialog = ({ params, show, onHide, intl }) => {

  const dispatch = useDispatch()
  const { isFetching, error, evaluationRubricForShow } = useSelector(
    (state) => ({
      isFetching: state.admin.evaluationRubric.isFetching,
      evaluationRubricForShow: state.admin.evaluationRubric.evaluationRubric,
      error: state.admin.evaluationRubric.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchEvaluationRubric(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  return (
    <ShowModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "EVALUATION_RUBRIC.EDIT.TITLE" })
        : intl.formatMessage({ id: "EVALUATION_RUBRIC.NEW.TITLE" })}
      show={show}
      isFetching={isFetching}
      onHide={onHide}
    >
      <EvaluationRubric error={error} isFetching={isFetching} evaluationRubric={evaluationRubricForShow} />
    </ShowModal>
  )
}


export default injectIntl(EvaluationRubricShowDialog)
