/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { activateKnowledgeSkill, fetchKnowledgeSkills } from "../../store/actions"
import { useKnowledgeSkillsUIContext } from "../../context/KnowledgeSkillsUIContext"

const KnowledgeSkillActivateDialog = ({ params, show, onHide }) => {
  // KnowledgeSkills UI Context
  const knowledgeSkillsUIProps = useKnowledgeSkillsUIContext()
  
  // KnowledgeSkills Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.knowledgeSkill.isLoading, success: state.admin.knowledgeSkill.success }),
    shallowEqual
  )

  const onActivateKnowledgeSkill = () => {
    // server request for deleting knowledgeSkill by id
    dispatch(activateKnowledgeSkill(params))
  }

  const onRefresh = () => {
    dispatch(fetchKnowledgeSkills(knowledgeSkillsUIProps.queryParams))
    knowledgeSkillsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onActivateKnowledgeSkill}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="KNOWLEDGE_SKILL.DELETE.TITLE" />}
      body={<FormattedMessage id="KNOWLEDGE_SKILL.DELETE.MSG" />}
    />
  )
}


export default KnowledgeSkillActivateDialog
