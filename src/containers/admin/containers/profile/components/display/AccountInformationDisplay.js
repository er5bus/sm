import React from 'react'
import { injectIntl } from 'react-intl'
import {
  DisplayItems,
  RenderItems
} from './../../../../../../components/partials/controls'

import { accountInformationFields, accountInformationFieldsFr, accountInformationFieldsAr } from './fields/accountInformationFields'

const AccountInformationDisplay = ({ account, error, isFetching, intl }) => {
  const fields = accountInformationFields({ intl })
  const fieldsFr = accountInformationFieldsFr({ intl })
  const fieldsAr = accountInformationFieldsAr({ intl })

  return (
    <DisplayItems
      error={error}
      isFetching={isFetching}
      object={account}
    >
      <RenderItems fields={fieldsFr} />
      <RenderItems fields={fieldsAr}  />
      <RenderItems fields={fields} />
    </DisplayItems>
  )
}

export default injectIntl(AccountInformationDisplay)
