import React from 'react'
import { injectIntl } from 'react-intl'

import {
  DisplayItems
} from './../../../../../../components/partials/controls'
import availabilitySettingUserFields from './fields/availabilitySettingUserFields'

const AvailabilitySettingUserTemplate = ({ availabilitySettingUser = {}, isFetching, intl }) => {

  const fields = availabilitySettingUserFields({ intl })

  return (
    <DisplayItems 
      isFetching={isFetching} 
      object={ availabilitySettingUser } 
      fields={fields} 
    />
  )
}

export default injectIntl(AvailabilitySettingUserTemplate)
