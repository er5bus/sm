import React from "react"
import { injectIntl } from "react-intl"

import {
  DisplayItems,
  LanguageTab,
  RenderItems
} from "./../../../../../../components/partials/controls"

import { appointmentFields, appointmentFieldsFr, appointmentFieldsAr } from "./fields/appointmentFields"

const FolderGroupTemplate = ({ appointment = {}, error, isFetching, intl }) => {

  const fields = appointmentFields({ intl })
  const fieldsFr = appointmentFieldsFr({ intl })
  const fieldsAr = appointmentFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
      <DisplayItems
        error={error}
        isFetching={isFetching}
        object={appointment}
      >
        <RenderItems fields={fieldsAr} show={isAr} />
        <RenderItems fields={fieldsFr} show={isFr} />
        <RenderItems fields={fields} />
      </DisplayItems>) }
    </LanguageTab>
  )
}

export default injectIntl(FolderGroupTemplate)
