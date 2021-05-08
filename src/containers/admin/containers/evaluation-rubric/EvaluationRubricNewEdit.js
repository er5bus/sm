/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import EvaluationRubricForm from "./components/form/EvaluationRubricForm"

import { createEvaluationRubric, clearStore, editEvaluationRubric, fetchEvaluationRubric } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const EvaluationRubric = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, evaluationRubricForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.evaluationRubric.isLoading,
      evaluationRubricForEdit: state.admin.evaluationRubric.evaluationRubric,
      success: state.admin.evaluationRubric.success,
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

  const goBackToEvaluationRubricsList = useCallback(() => {
    history.push(routes.evaluationRubricList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchEvaluationRubric(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "EVALUATION_RUBRIC.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "EVALUATION_RUBRIC.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evaluationRubricForEdit, params])

  return (
    <FormView
      goBackTo={goBackToEvaluationRubricsList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "EVALUATION_RUBRIC.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "EVALUATION_RUBRIC.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<EvaluationRubricForm
        isLoading={isLoading}
        success={success.isCreated}
        evaluationRubric={ !_.isEmpty(params) && evaluationRubricForEdit}
        onSubmit={saveEvaluationRubric}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(EvaluationRubric)
