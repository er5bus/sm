import React from "react"
import { injectIntl } from "react-intl"
import { DisplayItems, LanguageTab, RenderItems } from "../../../../../../components/partials/controls"
import { schoolDropoutFields, schoolDropoutFieldsFr, schoolDropoutFieldsAr } from "./fields/SchoolDropoutFields"

const SchoolDropoutTemplate = ({ schoolDropout = {}, error, isFetching, intl }) => {

  const fields = schoolDropoutFields({ intl })
  const fieldsFr = schoolDropoutFieldsFr({ intl })
  const fieldsAr = schoolDropoutFieldsAr({ intl })

  return (
    <LanguageTab>
      {({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={schoolDropout}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
        </DisplayItems>)}
    </LanguageTab>
  )
}

export default injectIntl(SchoolDropoutTemplate)
