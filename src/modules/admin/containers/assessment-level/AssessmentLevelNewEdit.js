/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import AssessmentLevelForm from "./components/form/AssessmentLevelForm"

import { createAssessmentLevel, clearStore, editAssessmentLevel, fetchAssessmentLevel } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const AssessmentLevel = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, assessmentLevelForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.assessmentLevel.isLoading,
      assessmentLevelForEdit: state.admin.assessmentLevel.assessmentLevel,
      success: state.admin.assessmentLevel.success,
      error: state.admin.assessmentLevel.error
    }),
    shallowEqual
  )

  const saveAssessmentLevel = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createAssessmentLevel(values))
    } else {
      dispatch(editAssessmentLevel(params, values))
    }
  }

  const goBackToAssessmentLevelsList = useCallback(() => {
    history.push(routes.assessmentLevelList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAssessmentLevel(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "ASSESSMENT_LEVEL.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "ASSESSMENT_LEVEL.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessmentLevelForEdit, params])

  return (
    <FormView
      goBackTo={goBackToAssessmentLevelsList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "ASSESSMENT_LEVEL.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ASSESSMENT_LEVEL.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<AssessmentLevelForm
        isLoading={isLoading}
        success={success.isCreated}
        assessmentLevel={ !_.isEmpty(params) && assessmentLevelForEdit}
        onSubmit={saveAssessmentLevel}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(AssessmentLevel)
