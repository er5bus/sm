/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { activateAssessmentLevel, fetchAssessmentLevels } from "../../store/actions"
import { useAssessmentLevelsUIContext } from "../../context/AssessmentLevelsUIContext"

const AssessmentLevelActivateDialog = ({ params, show, onHide }) => {
  // AssessmentLevels UI Context
  const assessmentLevelsUIProps = useAssessmentLevelsUIContext()
  
  // AssessmentLevels Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.assessmentLevel.isLoading, success: state.admin.assessmentLevel.success }),
    shallowEqual
  )

  const onActivateAssessmentLevel = () => {
    // server request for deleting assessmentLevel by id
    dispatch(activateAssessmentLevel(params))
  }

  const onRefresh = () => {
    dispatch(fetchAssessmentLevels(assessmentLevelsUIProps.queryParams))
    assessmentLevelsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onActivateAssessmentLevel}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="ASSESSMENT_LEVEL.DELETE.TITLE" />}
      body={<FormattedMessage id="ASSESSMENT_LEVEL.DELETE.MSG" />}
    />
  )
}


export default AssessmentLevelActivateDialog
