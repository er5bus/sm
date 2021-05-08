import React from "react"
import { injectIntl } from "react-intl"
import { knowledgeSkillFieldsFr, knowledgeSkillFieldsAr } from "./fields/knowledgeSkillFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"

const KnowledgeSkillForm = (props) => {

  const { onSubmit, knowledgeSkill, success, saveRef, intl } = props

  const fieldsFr = knowledgeSkillFieldsFr({ intl })
  const fieldsAr = knowledgeSkillFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        clearValuesAfterSubmit={success}
        initialValues={knowledgeSkill}
        onSubmit={onSubmit}
      >
        <RenderFields fields={fieldsFr} show={isFr} />
        <RenderFields fields={fieldsAr} show={isAr} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
      )}
    </LanguageTab>
  )
}

export default injectIntl(KnowledgeSkillForm)
