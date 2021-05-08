import React from "react"
import { injectIntl } from "react-intl"
import { skillsEvaluationPerFolderFields, skillsEvaluationFieldsAr, skillsEvaluationFieldsFr, skillsEvaluationFields } from "./fields/skillsEvaluationFields"
import { DynamicForm, FormRepeater, FormRepeaterFields, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"

const SkillsEvaluationForm = (props) => {

  const { onSubmit, skillsEvaluation, success, saveRef, intl } = props

  const fieldsFr = skillsEvaluationFieldsFr({ intl })
  const fieldsAr = skillsEvaluationFieldsAr({ intl })
  const fields = skillsEvaluationFields({ intl })

  const folderFields = skillsEvaluationPerFolderFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DynamicForm
          className="mt-5"
          initialValues={skillsEvaluation}
          clearValuesAfterSubmit={success}
          onSubmit={onSubmit}
        >
          <RenderFields fields={fieldsFr} show={isFr} />
          <RenderFields fields={fieldsAr} show={isAr} />
          <RenderFields fields={fields} show={true} />
          <FormRepeater showDeleteButton={false} showAddButton={false}>
            <FormRepeaterFields fields={folderFields} show={true} />
          </FormRepeater>
          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(SkillsEvaluationForm)
