/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import KnowledgeSkill from "./components/display/KnowledgeSkill"
import { useSubheader } from "../../../../components/layout"
import { fetchKnowledgeSkill, clearStore } from "./store/actions"
import routes from "./../../routes"

const KnowledgeSkillShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "KNOWLEDGE_SKILL.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, knowledgeSkillForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.knowledgeSkill.isFetching,
      knowledgeSkillForShow: state.admin.knowledgeSkill.knowledgeSkill,
      error: state.admin.knowledgeSkill.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchKnowledgeSkill(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToKnowledgeSkillsList = () => {
    history.push(routes.knowledgeSkillList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToKnowledgeSkillsList}
      onClose={clearStore}
      error={error}
    >
      <KnowledgeSkill error={error} isFetching={isFetching} knowledgeSkill={knowledgeSkillForShow} />
    </ShowView>
  )
}

export default injectIntl(KnowledgeSkillShow)
