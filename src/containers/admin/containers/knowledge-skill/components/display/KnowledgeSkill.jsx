import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
  LanguageTab,
  RenderItems
} from "./../../../../../../components/partials/controls"

import { knowledgeSkillFields, knowledgeSkillFieldsFr, knowledgeSkillFieldsAr } from "./fields/knowledgeSkillFields"


const KnowledgeSkillTemplate = ({ knowledgeSkill = {}, error, isFetching, intl }) => {

  const fields = knowledgeSkillFields({ intl })
  const fieldsFr = knowledgeSkillFieldsFr({ intl })
  const fieldsAr = knowledgeSkillFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DisplayItems
        error={error}
        isFetching={isFetching}
        object={knowledgeSkill}
      >
        <RenderItems fields={fields} />
        <RenderItems fields={fieldsAr} show={isAr} />
        <RenderItems fields={fieldsFr} show={isFr} />
      </DisplayItems>
      )}
    </LanguageTab>
  )
}

export default injectIntl(KnowledgeSkillTemplate)
