import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"

import {
  DisplayItems,
  RenderItems,
  ShowView,
} from "./../../../../../../components/partials/controls"

import { knowledgeSkillFields } from "./fields/KnowledgeSkillFields"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchKnowledgeSkillExtraData } from "../../store/actions";

import formRoutes from "./../../routes/forms"


const KnowledgeSkillTemplate = ({ goBackToList, history, params, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, knowledgeSkill, error } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      isFetching: state.admin.skill.isFetching,
      knowledgeSkill: state.admin.skill.knowledgeSkill
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(knowledgeSkill) || knowledgeSkill.id !== params.param) {
      dispatch(fetchKnowledgeSkillExtraData(params))
    }

    // eslint-disable-next-line
  }, [])

  const goToEdit = () => {
    history.push(formRoutes.knowledgeSkillForm.path.replace(":param", params.param))
  }

  const fields = knowledgeSkillFields({ intl })

  return (
    <ShowView
      title={ intl.formatMessage({ id: "MENU.KNOWLEDGE_SKILL" }) }
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <DisplayItems
        error={error}
        isFetching={isFetching}
        object={knowledgeSkill}
      >
        <RenderItems fields={fields} />
      </DisplayItems>
    </ShowView>
  )
}

export default injectIntl(KnowledgeSkillTemplate)
