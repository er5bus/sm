/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import EvaluationRubric from "./components/display/EvaluationRubric"
import { useSubheader } from "../../../../components/layout"
import { fetchEvaluationRubric, clearStore } from "./store/actions"
import routes from "./../../routes"

const EvaluationRubricShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "EVALUATION_RUBRIC.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, evaluationRubricForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.evaluationRubric.isFetching,
      evaluationRubricForShow: state.admin.evaluationRubric.evaluationRubric,
      error: state.admin.evaluationRubric.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchEvaluationRubric(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToEvaluationRubricsList = () => {
    history.push(routes.evaluationRubricList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToEvaluationRubricsList}
      onClose={clearStore}
      error={error}
    >
      <EvaluationRubric error={error} isFetching={isFetching} evaluationRubric={evaluationRubricForShow} />
    </ShowView>
  )
}

export default injectIntl(EvaluationRubricShow)
