import React from 'react'
import { injectIntl } from 'react-intl'

import {
  DisplayItems
} from './../../../../../../components/partials/controls'
import availabilitySettingStructureFields from './fields/availabilitySettingStructureFields'

const AvailabilitySettingStructureTemplate = ({ availabilitySettingStructure = {}, isFetching, intl }) => {

  const fields = availabilitySettingStructureFields({ intl })

  return (
    <DisplayItems 
      isFetching={isFetching} 
      object={ availabilitySettingStructure } 
      fields={fields} 
    />
  )
}

export default injectIntl(AvailabilitySettingStructureTemplate)
