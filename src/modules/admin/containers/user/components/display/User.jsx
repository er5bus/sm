import React from 'react'
import { injectIntl } from 'react-intl'
import {
  DisplayItems,
  LanguageTab,
  RenderItems
} from './../../../../../../components/partials/controls'

import { userFields, userFieldsFr, userFieldsAr } from './fields/userFields'

const User = ({ profile = {}, error, isFetching, intl }) => {
  const fields = userFields({ intl })
  const fieldsFr = userFieldsFr({ intl })
  const fieldsAr = userFieldsAr({ intl })

  return (
    <LanguageTab>
      {({ isAr, isFr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={profile}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
        </DisplayItems>)}
    </LanguageTab>
  )
}

export default injectIntl(User)
