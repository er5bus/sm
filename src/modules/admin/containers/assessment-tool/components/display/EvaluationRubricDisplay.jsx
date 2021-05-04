import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"

import {
} from "./../../../../../../components/partials/controls"

import {
  DisplayItems,
  RenderItems,
  ShowView
} from "./../../../../../../components/partials/controls"

import { evaluationRubricFields } from "./fields/evaluationRubricFields"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchEvaluationRubricExtraData } from "../../store/actions";

import formRoutes from "./../../routes/forms"


const EvaluationRubricTemplate = ({ goBackToList, history, params, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, evaluationRubric, error } = useSelector(
    (state) => ({
      error: state.admin.assessmentTool.error,
      isFetching: state.admin.assessmentTool.isFetching,
      evaluationRubric: state.admin.assessmentTool.evaluationRubrics
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(evaluationRubric) || evaluationRubric.id !== params.param) {
      dispatch(fetchEvaluationRubricExtraData(params))
    }

    // eslint-disable-next-line
  }, [])

  const goToEdit = () => {
    history.push(formRoutes.associateEvaluationRubricForm.path.replace(":param", params.param))
  }

  const fields = evaluationRubricFields({ intl })

  return (
    <ShowView
      title={ intl.formatMessage({ id: "MENU.SKILL" }) }
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <DisplayItems
        error={error}
        isFetching={isFetching}
        object={evaluationRubric}
      >
        <RenderItems fields={fields} />
      </DisplayItems>
    </ShowView>
  )
}

export default injectIntl(EvaluationRubricTemplate)
