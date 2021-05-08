import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
  LanguageTab,
  RenderItems
} from "./../../../../../../components/partials/controls"

import { aptitudeSkillFields, aptitudeSkillFieldsFr, aptitudeSkillFieldsAr } from "./fields/aptitudeSkillFields"


const AptitudeSkillTemplate = ({ aptitudeSkill = {}, error, isFetching, intl }) => {

  const fields = aptitudeSkillFields({ intl })
  const fieldsFr = aptitudeSkillFieldsFr({ intl })
  const fieldsAr = aptitudeSkillFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DisplayItems
        error={error}
        isFetching={isFetching}
        object={aptitudeSkill}
      >
        <RenderItems fields={fields} />
        <RenderItems fields={fieldsAr} show={isAr} />
        <RenderItems fields={fieldsFr} show={isFr} />
      </DisplayItems>
      )}
    </LanguageTab>
  )
}

export default injectIntl(AptitudeSkillTemplate)
