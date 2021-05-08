/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { FormModal } from "../../../../../../components/partials/controls"
import { createAssessmentLevel, clearStore, fetchAssessmentLevels, editAssessmentLevel, fetchAssessmentLevel } from "../../store/actions"
import AssessmentLevelForm from "../form/AssessmentLevelForm"
import {useAssessmentLevelsUIContext} from "../../context/AssessmentLevelsUIContext"

const AssessmentLevelDisplayDialog = ({ params, show, onHide, intl }) => {
  // AssessmentLevels UI Context
  const assessmentLevelsUIProps = useAssessmentLevelsUIContext()

  const dispatch = useDispatch()
  const { isLoading, assessmentLevelForEdit, success } = useSelector(
    (state) => ({
      isLoading: state.admin.assessmentLevel.isLoading,
      success: state.admin.assessmentLevel.success,
      assessmentLevelForEdit: state.admin.assessmentLevel.assessmentLevel,
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

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAssessmentLevel(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  const onSuccess = () => {
    dispatch(fetchAssessmentLevels(assessmentLevelsUIProps.queryParams))
    assessmentLevelsUIProps.setIds([])
  }

  return (
    <FormModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "ASSESSMENT_LEVEL.EDIT.TITLE" })
        : intl.formatMessage({ id: "ASSESSMENT_LEVEL.NEW.TITLE" })}
      show={show}
      isLoading={isLoading}
      onHide={onHide}
      onSuccess={onSuccess}
      success={success.isCreated || success.isUpdated}
    >
      { ({ saveRef }) => (<AssessmentLevelForm
        isLoading={isLoading}
        success={success.isCreated}
        assessmentLevel={ !_.isEmpty(params) && assessmentLevelForEdit}
        onSubmit={saveAssessmentLevel}
        saveRef={saveRef}
      />)
      }
    </FormModal>
  )
}


export default injectIntl(AssessmentLevelDisplayDialog)
