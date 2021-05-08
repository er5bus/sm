import React from 'react'
import { injectIntl } from 'react-intl'

import {
  DisplayItems,
  LanguageTab,
  RenderItems
} from './../../../../../../components/partials/controls'

import { serviceFields, serviceFieldsFr, serviceFieldsAr } from './fields/serviceFields'

const ServiceTemplate = ({ service = {}, error, isFetching, intl }) => {
  const fields = serviceFields({ intl })
  const fieldsFr = serviceFieldsFr({ intl })
  const fieldsAr = serviceFieldsAr({ intl })

  return (
    <LanguageTab>
      {
        ({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={service}
          >
            <RenderItems fields={fields} />
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
          </DisplayItems>
        )
      }
    </LanguageTab>
  )
}

export default injectIntl(ServiceTemplate)
