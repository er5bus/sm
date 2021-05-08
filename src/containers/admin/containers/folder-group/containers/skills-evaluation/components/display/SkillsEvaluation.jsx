import React from "react"
import { injectIntl } from "react-intl"
import {DisplayItems, RenderNestedItems, LanguageTab, RenderItems} from "../../../../../../../../components/partials"
import { skillsEvaluationPerFolderFields, skillsEvaluationFields, skillsEvaluationFieldsAr, skillsEvaluationFieldsFr } from "./fields/skillsEvaluationFields"


const SkillsEvaluationTemplate = ({ skillsEvaluation = {}, isFetching, error, intl }) => {

  const fields = skillsEvaluationFields({ intl })
  const fieldsAr = skillsEvaluationFieldsAr({ intl })
  const fieldsFr = skillsEvaluationFieldsFr({ intl })

  const folderFields = skillsEvaluationPerFolderFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={skillsEvaluation}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
          <RenderNestedItems fieldArrayName={"skillsAssessmentsBatchSet"} fields={folderFields} />
        </DisplayItems>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(SkillsEvaluationTemplate)
