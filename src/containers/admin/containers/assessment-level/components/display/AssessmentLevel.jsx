import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
  LanguageTab,
  RenderItems
} from "./../../../../../../components/partials/controls"

import { assessmentLevelFields, assessmentLevelFieldsFr, assessmentLevelFieldsAr } from "./fields/assessmentLevelFields"


const AssessmentLevelTemplate = ({ assessmentLevel = {}, error, isFetching, intl }) => {

  const fields = assessmentLevelFields({ intl })
  const fieldsFr = assessmentLevelFieldsFr({ intl })
  const fieldsAr = assessmentLevelFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DisplayItems
        error={error}
        isFetching={isFetching}
        object={assessmentLevel}
      >
        <RenderItems fields={fields} />
        <RenderItems fields={fieldsAr} show={isAr} />
        <RenderItems fields={fieldsFr} show={isFr} />
      </DisplayItems>
      )}
    </LanguageTab>
  )
}

export default injectIntl(AssessmentLevelTemplate)
