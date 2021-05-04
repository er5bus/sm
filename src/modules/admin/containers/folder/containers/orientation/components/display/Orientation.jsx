import React from "react"
import { injectIntl } from "react-intl"
import {DisplayItems, LanguageTab, RenderItems} from "../../../../../../../../components/partials"
import { 
  orientationFields, 
  orientationFieldsAr, 
  orientationFieldsFr,
} from "./fields/orientationFields"


const OrientationTemplate = ({ orientation = {}, isFetching, error, intl }) => {

  const fields = orientationFields({ intl })
  const fieldsAr = orientationFieldsAr({ intl })
  const fieldsFr = orientationFieldsFr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={orientation}
        >
          <RenderItems fields={fields} />
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
        </DisplayItems>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(OrientationTemplate)
