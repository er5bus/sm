/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ShowModal } from "../../../../../../components/partials/controls"
import { clearStore, fetchKnowledgeSkill } from "../../store/actions"
import KnowledgeSkill from "../display/KnowledgeSkill"

const KnowledgeSkillShowDialog = ({ params, show, onHide, intl }) => {

  const dispatch = useDispatch()
  const { isFetching, error, knowledgeSkillForShow } = useSelector(
    (state) => ({
      isFetching: state.admin.knowledgeSkill.isFetching,
      knowledgeSkillForShow: state.admin.knowledgeSkill.knowledgeSkill,
      error: state.admin.knowledgeSkill.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchKnowledgeSkill(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  return (
    <ShowModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "KNOWLEDGE_SKILL.EDIT.TITLE" })
        : intl.formatMessage({ id: "KNOWLEDGE_SKILL.NEW.TITLE" })}
      show={show}
      isFetching={isFetching}
      onHide={onHide}
    >
      <KnowledgeSkill error={error} isFetching={isFetching} knowledgeSkill={knowledgeSkillForShow} />
    </ShowModal>
  )
}


export default injectIntl(KnowledgeSkillShowDialog)
