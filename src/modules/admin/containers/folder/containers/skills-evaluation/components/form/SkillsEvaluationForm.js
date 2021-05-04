import React from "react"
import { injectIntl } from "react-intl"
import { skillsEvaluationFolderFieldsAr, skillsEvaluationFolderFieldsFr, skillsEvaluationFolderFields } from "./fields/skillsEvaluationFolderFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"

const SkillsEvaluationForm = (props) => {

  const { onSubmit, skillsEvaluationFolder, success, saveRef, intl } = props

  const fieldsFr = skillsEvaluationFolderFieldsFr({ intl })
  const fieldsAr = skillsEvaluationFolderFieldsAr({ intl })
  const fields = skillsEvaluationFolderFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DynamicForm
          className="mt-5"
          initialValues={skillsEvaluationFolder}
          clearValuesAfterSubmit={success}
          onSubmit={onSubmit}
        >
          <RenderFields fields={fieldsFr} show={isFr} />
          <RenderFields fields={fieldsAr} show={isAr} />
          <RenderFields fields={fields} show={true} />
          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(SkillsEvaluationForm)
