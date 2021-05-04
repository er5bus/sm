/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ShowModal } from "../../../../../../components/partials/controls"
import { clearStore, fetchAssessmentLevel } from "../../store/actions"
import AssessmentLevel from "../display/AssessmentLevel"

const AssessmentLevelShowDialog = ({ params, show, onHide, intl }) => {

  const dispatch = useDispatch()
  const { isFetching, error, assessmentLevelForShow } = useSelector(
    (state) => ({
      isFetching: state.admin.assessmentLevel.isFetching,
      assessmentLevelForShow: state.admin.assessmentLevel.assessmentLevel,
      error: state.admin.assessmentLevel.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAssessmentLevel(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  return (
    <ShowModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "ASSESSMENT_LEVEL.EDIT.TITLE" })
        : intl.formatMessage({ id: "ASSESSMENT_LEVEL.NEW.TITLE" })}
      show={show}
      isFetching={isFetching}
      onHide={onHide}
    >
      <AssessmentLevel error={error} isFetching={isFetching} assessmentLevel={assessmentLevelForShow} />
    </ShowModal>
  )
}


export default injectIntl(AssessmentLevelShowDialog)
