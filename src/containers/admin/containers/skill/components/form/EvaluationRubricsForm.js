import React, {useEffect} from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"

import { evaluationRubricsFields } from "./fields/evaluationRubricsFields"
import { DynamicForm, FormView, RenderFields } from "./../../../../../../components/partials/controls"
import routes from "./../../routes/details"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { clearStore, editEvaluationRubrics, fetchEvaluationRubricsExtraData } from "../../store/actions"



const EvaluationRubricsForm = ({ intl, history, params = undefined, goBackToList }) => {

  const fields = evaluationRubricsFields({ intl })

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, evaluationRubrics, success, error } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      success: state.admin.skill.success,
      isLoading: state.admin.skill.isLoading,
      evaluationRubrics: state.admin.skill.evaluationRubrics
    }),
    shallowEqual
  )

  const saveEvaluationRubrics = (values) => {
    dispatch(editEvaluationRubrics(params, values))
  }

  const goToShow = () => {
    history.push(routes.evaluationRubricsDisplay.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchEvaluationRubricsExtraData(params))
  }, [params, dispatch])

  return (
    <FormView
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "SKILL.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "SKILL.EDIT.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
      goBackTo={goBackToList}
      goToDisplay={ goToShow }
      title={
        _.isEmpty(params) ? intl.formatMessage({ id: "SKILL.NEW.TITLE" }) : intl.formatMessage({ id: "SKILL.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (<DynamicForm
        className="mt-5"
        initialValues={evaluationRubrics}
        onSubmit={saveEvaluationRubrics}
      >
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
      ) }
    </FormView>
  )
}

export default injectIntl(EvaluationRubricsForm)
