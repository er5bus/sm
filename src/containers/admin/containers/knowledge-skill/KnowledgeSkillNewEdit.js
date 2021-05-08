/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import KnowledgeSkillForm from "./components/form/KnowledgeSkillForm"

import { createKnowledgeSkill, clearStore, editKnowledgeSkill, fetchKnowledgeSkill } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const KnowledgeSkill = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, knowledgeSkillForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.knowledgeSkill.isLoading,
      knowledgeSkillForEdit: state.admin.knowledgeSkill.knowledgeSkill,
      success: state.admin.knowledgeSkill.success,
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

  const goBackToKnowledgeSkillsList = useCallback(() => {
    history.push(routes.knowledgeSkillList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchKnowledgeSkill(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "KNOWLEDGE_SKILL.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "KNOWLEDGE_SKILL.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [knowledgeSkillForEdit, params])

  return (
    <FormView
      goBackTo={goBackToKnowledgeSkillsList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "KNOWLEDGE_SKILL.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "KNOWLEDGE_SKILL.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<KnowledgeSkillForm
        isLoading={isLoading}
        success={success.isCreated}
        knowledgeSkill={ !_.isEmpty(params) && knowledgeSkillForEdit}
        onSubmit={saveKnowledgeSkill}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(KnowledgeSkill)
