import React from "react"
import { injectIntl } from "react-intl"
import { aptitudeSkillFieldsFr, aptitudeSkillFieldsAr } from "./fields/aptitudeSkillFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"

const AptitudeSkillForm = (props) => {

  const { onSubmit, aptitudeSkill, success, saveRef, intl } = props

  const fieldsFr = aptitudeSkillFieldsFr({ intl })
  const fieldsAr = aptitudeSkillFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        clearValuesAfterSubmit={success}
        initialValues={aptitudeSkill}
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

export default injectIntl(AptitudeSkillForm)
