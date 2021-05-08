/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { activateSkillsEvaluation, fetchSkillsEvaluations } from "../../store/actions"
import { useSkillsEvaluationsUIContext } from "../../context/SkillsEvaluationsUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const SkillsEvaluationActivateDialog = ({ params, show, onHide }) => {
  // SkillsEvaluations UI Context
  const skillsEvaluationsUIProps = useSkillsEvaluationsUIContext()
  
  // SkillsEvaluations Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.skillsEvaluationGroup.isLoading, success: state.admin.skillsEvaluationGroup.success }),
    shallowEqual
  )

  const onActivateSkillsEvaluation = () => {
    // server request for deleting skillsEvaluation by id
    dispatch(activateSkillsEvaluation(params))
  }

  const onRefresh = () => {
    dispatch(fetchSkillsEvaluations(params))
    skillsEvaluationsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onActivateSkillsEvaluation}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="SKILLS_EVALUATION.ENABLE.TITLE" />}
      body={<FormattedMessage id="SKILLS_EVALUATION.ENABLE.MSG" />}
    />
  )
}


export default SkillsEvaluationActivateDialog
