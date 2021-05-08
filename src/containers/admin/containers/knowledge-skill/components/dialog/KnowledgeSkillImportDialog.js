/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../components/partials/controls"
import { useKnowledgeSkillsUIContext } from "../../context/KnowledgeSkillsUIContext"
import { fetchKnowledgeSkills} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"


const KnowledgeSkillImportDialog = ({ show, onHide }) => {
  // KnowledgeSkills UI Context
  const knowledgeSkillUIProps = useKnowledgeSkillsUIContext()
  
  // KnowledgeSkills Redux state
  const dispatch = useDispatch()

  const onImportKnowledgeSkillFinish = () => {
    dispatch(fetchKnowledgeSkills(knowledgeSkillUIProps.queryParams))
    knowledgeSkillUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="KNOWLEDGE_SKILL.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportKnowledgeSkillFinish}
      url={ENDPOINTS.IMPORT_KNOWLEDGE_SKILL}
    />
  )
}


export default KnowledgeSkillImportDialog
