import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
  LanguageTab,
  RenderItems
} from "./../../../../../../components/partials/controls"

import { evaluationRubricFields, evaluationRubricFieldsFr, evaluationRubricFieldsAr } from "./fields/evaluationRubricFields"


const EvaluationRubricTemplate = ({ evaluationRubric = {}, error, isFetching, intl }) => {

  const fields = evaluationRubricFields({ intl })
  const fieldsFr = evaluationRubricFieldsFr({ intl })
  const fieldsAr = evaluationRubricFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DisplayItems
        error={error}
        isFetching={isFetching}
        object={evaluationRubric}
      >
        <RenderItems fields={fields} />
        <RenderItems fields={fieldsAr} show={isAr} />
        <RenderItems fields={fieldsFr} show={isFr} />
      </DisplayItems>
      )}
    </LanguageTab>
  )
}

export default injectIntl(EvaluationRubricTemplate)
