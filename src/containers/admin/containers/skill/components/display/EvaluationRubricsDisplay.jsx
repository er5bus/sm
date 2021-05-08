import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"

import {
  DisplayItems,
  RenderItems,
  ShowView,
} from "./../../../../../../components/partials/controls"

import { evaluationRubricsFields } from "./fields/evaluationRubricsFields"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchEvaluationRubricsExtraData } from "../../store/actions";

import formRoutes from "./../../routes/forms"


const EvaluationRubricsTemplate = ({ goBackToList, history, params, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, evaluationRubrics, error } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      isFetching: state.admin.skill.isFetching,
      evaluationRubrics: state.admin.skill.evaluationRubrics
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(evaluationRubrics) || evaluationRubrics.id !== params.param) {
      dispatch(fetchEvaluationRubricsExtraData(params))
    }

    // eslint-disable-next-line
  }, [])

  const goToEdit = () => {
    history.push(formRoutes.evaluationRubricsForm.path.replace(":param", params.param))
  }

  const fields = evaluationRubricsFields({ intl })

  return (
    <ShowView
      title={ intl.formatMessage({ id: "MENU.EVALUATION_RUBRIC" }) }
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <DisplayItems
        error={error}
        isFetching={isFetching}
        object={evaluationRubrics}
      >
        <RenderItems fields={fields} />
      </DisplayItems>
    </ShowView>
  )
}

export default injectIntl(EvaluationRubricsTemplate)
