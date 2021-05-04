import React from "react"
import { injectIntl } from "react-intl"

import { schoolDropoutFieldsFr, schoolDropoutFieldsAr, schoolDropoutFields } from "./fields/schoolDropoutUpdateStatusFields"
import { DynamicForm, LanguageTab, RenderFields } from "../../../../../../components/partials/controls"

const SchoolDropoutUpdatedStatusForm = (props) => {

  const { onSubmit, schoolDropout, success, saveRef, intl } = props

  const fields = schoolDropoutFields({ intl })
  const fieldsFr = schoolDropoutFieldsFr({ intl })
  const fieldsAr = schoolDropoutFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DynamicForm
          className="mt-5"
          clearValuesAfterSubmit={success}
          initialValues={schoolDropout}
          onSubmit={onSubmit}
        >
          <RenderFields fields={fieldsFr} show={isFr} />
          <RenderFields fields={fieldsAr} show={isAr} />
          <RenderFields fields={fields} />
          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>)}
    </LanguageTab>
  )
}

export default injectIntl(SchoolDropoutUpdatedStatusForm)
