/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import SkillsEvaluation from "./components/display/SkillsEvaluation"
import { useSubheader } from "../../../../../../components/layout"
import { fetchSkillsEvaluation, clearStore } from "./store/actions"
import { getBasePath } from "./routes"
import {ShowView} from "../../../../../../components/partials"


const SkillsEvaluationShow = ({ history, params = null, intl }) => {

  const basePath = getBasePath()
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "SKILLS_EVALUATION.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, skillsEvaluationForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.skillsEvaluationGroup.isFetching,
      skillsEvaluationForShow: state.admin.skillsEvaluationGroup.skillsEvaluation,
      error: state.admin.skillsEvaluationGroup.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchSkillsEvaluation(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  return (
    <ShowView
      title={_title}
      goBackTo={goBackTo}
      onClose={clearStore}
      error={error}
    >
      <SkillsEvaluation error={error} isFetching={isFetching} skillsEvaluation={skillsEvaluationForShow} />
    </ShowView>
  )
}


export default injectIntl(SkillsEvaluationShow)
