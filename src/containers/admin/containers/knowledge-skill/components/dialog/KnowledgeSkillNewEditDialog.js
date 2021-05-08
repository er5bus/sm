/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { FormModal } from "../../../../../../components/partials/controls"
import { createKnowledgeSkill, clearStore, fetchKnowledgeSkills, editKnowledgeSkill, fetchKnowledgeSkill } from "../../store/actions"
import KnowledgeSkillForm from "../form/KnowledgeSkillForm"
import {useKnowledgeSkillsUIContext} from "../../context/KnowledgeSkillsUIContext"

const KnowledgeSkillDisplayDialog = ({ params, show, onHide, intl }) => {
  // KnowledgeSkills UI Context
  const knowledgeSkillsUIProps = useKnowledgeSkillsUIContext()

  const dispatch = useDispatch()
  const { isLoading, knowledgeSkillForEdit, success } = useSelector(
    (state) => ({
      isLoading: state.admin.knowledgeSkill.isLoading,
      success: state.admin.knowledgeSkill.success,
      knowledgeSkillForEdit: state.admin.knowledgeSkill.knowledgeSkill,
      error: state.admin.knowledgeSkill.error
    }),
    shallowEqual
  )

  const saveKnowledgeSkill = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createKnowledgeSkill(values))
    } else {
      dispatch(editKnowledgeSkill(params, values))
    }
  }

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchKnowledgeSkill(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  const onSuccess = () => {
    dispatch(fetchKnowledgeSkills(knowledgeSkillsUIProps.queryParams))
    knowledgeSkillsUIProps.setIds([])
  }

  return (
    <FormModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "KNOWLEDGE_SKILL.EDIT.TITLE" })
        : intl.formatMessage({ id: "KNOWLEDGE_SKILL.NEW.TITLE" })}
      show={show}
      isLoading={isLoading}
      onHide={onHide}
      onSuccess={onSuccess}
      success={success.isCreated || success.isUpdated}
    >
      { ({ saveRef }) => (<KnowledgeSkillForm
        isLoading={isLoading}
        success={success.isCreated}
        knowledgeSkill={ !_.isEmpty(params) && knowledgeSkillForEdit}
        onSubmit={saveKnowledgeSkill}
        saveRef={saveRef}
      />)
      }
    </FormModal>
  )
}


export default injectIntl(KnowledgeSkillDisplayDialog)
