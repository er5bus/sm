import React from "react"
import { injectIntl } from "react-intl"
import { eventFieldsAr, eventFieldsFr, eventFields } from "./fields/eventFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"


const EventForm = (props) => {

  const { onSubmit, success, event, saveRef, intl } = props

  const fieldsFr = eventFieldsFr({ intl })
  const fieldsAr = eventFieldsAr({ intl })
  const fields = eventFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        clearValuesAfterSubmit={success}
        initialValues={event}
        onSubmit={onSubmit}
      >
        <RenderFields fields={fieldsFr} show={isFr} />
        <RenderFields fields={fieldsAr} show={isAr} />
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
      )}
    </LanguageTab>
  )
}

export default injectIntl(EventForm)
