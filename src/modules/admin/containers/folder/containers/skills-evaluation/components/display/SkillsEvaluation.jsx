import React from "react"
import { injectIntl } from "react-intl"
import {DisplayItems, LanguageTab, RenderItems} from "../../../../../../../../components/partials"
import { skillsEvaluationFolderFields, skillsEvaluationFolderFieldsAr, skillsEvaluationFolderFieldsFr } from "./fields/skillsEvaluationFolderFields"


const SkillsEvaluationTemplate = ({ skillsEvaluationFolder = {}, isFetching, error, intl }) => {

  const fields = skillsEvaluationFolderFields({ intl })
  const fieldsAr = skillsEvaluationFolderFieldsAr({ intl })
  const fieldsFr = skillsEvaluationFolderFieldsFr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={skillsEvaluationFolder}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
        </DisplayItems>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(SkillsEvaluationTemplate)
