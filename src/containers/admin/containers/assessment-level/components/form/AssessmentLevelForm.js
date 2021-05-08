import React from "react"
import { injectIntl } from "react-intl"
import { assessmentLevelFieldsFr, assessmentLevelFieldsAr } from "./fields/assessmentLevelFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"

const AssessmentLevelForm = (props) => {

  const { onSubmit, assessmentLevel, success, saveRef, intl } = props

  const fieldsFr = assessmentLevelFieldsFr({ intl })
  const fieldsAr = assessmentLevelFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        clearValuesAfterSubmit={success}
        initialValues={assessmentLevel}
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

export default injectIntl(AssessmentLevelForm)
