/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../../components/partials"
import { useSkillsEvaluationsUIContext } from "../../context/SkillsEvaluationsUIContext"
import {fetchSkillsEvaluations, deactivateSkillsEvaluation} from "../../store/actions"


const SkillsEvaluationDeactivateDialog = ({ params, show, onHide }) => {
  // SkillsEvaluations UI Context
  const skillsEvaluationFoldersUIProps = useSkillsEvaluationsUIContext()
  
  // SkillsEvaluations Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.skillsEvaluationFolder.isLoading, success: state.admin.skillsEvaluationFolder.success }),
    shallowEqual
  )

  const onDeactivateSkillsEvaluations = () => {
    // server request for deleting skillsEvaluationFolder by seleted ids
    dispatch(deactivateSkillsEvaluation(params))
  }

  const onRefresh = () => {
    skillsEvaluationFoldersUIProps.setIds([])
    dispatch(fetchSkillsEvaluations(params))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeactivateSkillsEvaluations}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="SKILLS_EVALUATION.DISABLE.TITLE" />}
      body={<FormattedMessage id="SKILLS_EVALUATION.DISABLE.MSG" />}
    />
  )
}


export default SkillsEvaluationDeactivateDialog
