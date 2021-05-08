/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import AssessmentLevel from "./components/display/AssessmentLevel"
import { useSubheader } from "../../../../components/layout"
import { fetchAssessmentLevel, clearStore } from "./store/actions"
import routes from "./../../routes"

const AssessmentLevelShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "ASSESSMENT_LEVEL.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, assessmentLevelForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.assessmentLevel.isFetching,
      assessmentLevelForShow: state.admin.assessmentLevel.assessmentLevel,
      error: state.admin.assessmentLevel.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchAssessmentLevel(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToAssessmentLevelsList = () => {
    history.push(routes.assessmentLevelList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToAssessmentLevelsList}
      onClose={clearStore}
      error={error}
    >
      <AssessmentLevel error={error} isFetching={isFetching} assessmentLevel={assessmentLevelForShow} />
    </ShowView>
  )
}

export default injectIntl(AssessmentLevelShow)
