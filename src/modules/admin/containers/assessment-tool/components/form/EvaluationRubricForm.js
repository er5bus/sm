import React, {useEffect} from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"

import { evaluationRubricFields } from "./fields/evaluationRubricFields"
import { DynamicForm, FormView, RenderFields } from "./../../../../../../components/partials/controls"
import routes from "./../../routes/details"

import { shallowEqual, useDispatch, useSelector} from "react-redux"
import { clearStore, editEvaluationRubric, fetchEvaluationRubricExtraData} from "../../store/actions"


const EvaluationRubricForm = ({ intl, history, params = undefined, goBackToList }) => {

  const fields = evaluationRubricFields({ intl })

  const dispatch = useDispatch()

  const { isLoading, evaluationRubric, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.assessmentTool.isLoading,
      evaluationRubric: state.admin.assessmentTool.evaluationRubrics,
      success: state.admin.assessmentTool.success,
      error: state.admin.assessmentTool.error
    }),
    shallowEqual
  )

  const saveEvaluationRubric = (values) => {
    dispatch(editEvaluationRubric(params, values))
  }

  const goToShow = () => {
    history.push(routes.associateEvaluationRubricDisplay.path.replace(":param", params.param))
  }

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchEvaluationRubricExtraData(params))
    }
  }, [params, dispatch])

  return (
    <FormView
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ASSESSMENT_TOOL.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "ASSESSMENT_TOOL.CREATE.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
      goBackTo={goBackToList}
      goToDisplay={ goToShow }
      title={
        _.isEmpty(params) ? intl.formatMessage({ id: "ASSESSMENT_TOOL.NEW.TITLE" }) : intl.formatMessage({ id: "ASSESSMENT_TOOL.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (<DynamicForm
        className="mt-5"
        initialValues={!_.isEmpty(params) && evaluationRubric}
        onSubmit={saveEvaluationRubric}
      >
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>)
      }
    </FormView>
  )
}

export default injectIntl(EvaluationRubricForm)
