import React from "react"
import { injectIntl } from "react-intl"
import { evaluationRubricFieldsFr, evaluationRubricFieldsAr } from "./fields/evaluationRubricFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"

const EvaluationRubricForm = (props) => {

  const { onSubmit, evaluationRubric, success, saveRef, intl } = props

  const fieldsFr = evaluationRubricFieldsFr({ intl })
  const fieldsAr = evaluationRubricFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        clearValuesAfterSubmit={success}
        initialValues={evaluationRubric}
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

export default injectIntl(EvaluationRubricForm)
