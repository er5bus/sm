import React from "react"
import { injectIntl } from "react-intl"
import {DisplayItems, LanguageTab, RenderItems} from "../../../../../../../../components/partials"
import { eventFields, eventFieldsAr, eventFieldsFr } from "./fields/eventFields"


const EventTemplate = ({ event = {}, isFetching, error, intl }) => {

  const fields = eventFields({ intl })
  const fieldsAr = eventFieldsAr({ intl })
  const fieldsFr = eventFieldsFr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={event}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
        </DisplayItems>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(EventTemplate)
