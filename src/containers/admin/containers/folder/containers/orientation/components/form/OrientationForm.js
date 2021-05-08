import React from "react"
import { injectIntl } from "react-intl"
import { orientationFieldsAr, orientationFieldsFr, orientationFields } from "./fields/OrientationFields"
import { DynamicForm, LanguageTab, RenderFields } from "../../../../../../../../components/partials/controls"


const OrientationForm = (props) => {

  const { onSubmit, success, orientation, saveRef, intl } = props

  const fieldsFr = orientationFieldsFr({ intl })
  const fieldsAr = orientationFieldsAr({ intl })
  const fields = orientationFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        clearValuesAfterSubmit={success}
        initialValues={orientation}
        onSubmit={onSubmit}
      >
        <RenderFields fields={fields} show={true} />
        <RenderFields fields={fieldsFr} show={isFr} />
        <RenderFields fields={fieldsAr} show={isAr} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
      )}
    </LanguageTab>
  )
}

export default injectIntl(OrientationForm)
