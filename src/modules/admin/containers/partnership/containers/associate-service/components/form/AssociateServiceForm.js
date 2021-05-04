import React from "react"
import { injectIntl } from "react-intl"

import { associateServiceFieldsAr, associateServiceFieldsFr, associateServiceFields } from "./fields/associateServiceFields"

import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"

const AssociateServiceForm = (props) => {

  const { onSubmit, success, associateService, saveRef, intl } = props

  const fieldsFr = associateServiceFieldsFr({ intl })
  const fieldsAr = associateServiceFieldsAr({ intl })
  const fields = associateServiceFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DynamicForm
          className="mt-5"
          clearValuesAfterSubmit={success}
          initialValues={associateService}
          onSubmit={onSubmit}
        >
          <RenderFields fields={fields} show={true} />
          <RenderFields fields={fieldsFr} show={isFr} />
          <RenderFields fields={fieldsAr} show={isAr} />
          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(AssociateServiceForm)
