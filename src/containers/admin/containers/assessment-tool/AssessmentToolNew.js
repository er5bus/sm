/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useCallback, useEffect } from "react"
import { injectIntl } from "react-intl"

import AssessmentToolForm from "./components/form/AssessmentToolForm"
import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const AssessmentTool = ({ history, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "ASSESSMENT_TOOL.NEW.TITLE" }))
  })

  const goBackToAssessmentToolsList = useCallback(() => {
    history.push(routes.assessmentToolList.path)
  }, [history])

  return (
    <AssessmentToolForm
      goBackToList={goBackToAssessmentToolsList}
    />
  )
}


export default injectIntl(AssessmentTool)
