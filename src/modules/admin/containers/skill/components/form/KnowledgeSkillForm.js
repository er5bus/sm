import React, {useEffect} from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"

import { knowledgeSkillFields } from "./fields/knowledgeSkillFields"
import { DynamicForm, FormView, RenderFields } from "./../../../../../../components/partials/controls"
import routes from "./../../routes/details"

import { shallowEqual, useDispatch, useSelector} from "react-redux"
import { clearStore, editKnowledgeSkill, fetchKnowledgeSkillExtraData} from "../../store/actions"


const KnowledgeSkillForm = ({ intl, history, params = undefined, goBackToList }) => {

  const fields = knowledgeSkillFields({ intl })

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, knowledgeSkill, success, error } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      success: state.admin.skill.success,
      isLoading: state.admin.skill.isLoading,
      knowledgeSkill: state.admin.skill.knowledgeSkill
    }),
    shallowEqual
  )

  const saveKnowledgeSkill = (values) => {
    dispatch(editKnowledgeSkill(params, values))
  }

  const goToShow = () => {
    history.push(routes.knowledgeSkillDisplay.path.replace(":param", params.param))
  }

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchKnowledgeSkillExtraData(params))
    }
  }, [params, dispatch])

  return (
    <FormView
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "SKILL.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "SKILL.EDIT.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
      goBackTo={goBackToList}
      goToDisplay={ goToShow }
      title={
        _.isEmpty(params) ? intl.formatMessage({ id: "SKILL.NEW.TITLE" }) : intl.formatMessage({ id: "SKILL.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (<DynamicForm
        className="mt-5"
        initialValues={knowledgeSkill}
        onSubmit={saveKnowledgeSkill}
      >
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>

      ) }
    </FormView>
  )
}

export default injectIntl(KnowledgeSkillForm)
