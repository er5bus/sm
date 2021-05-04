import React from 'react'
import { injectIntl } from 'react-intl'
import {shallowEqual, useSelector} from 'react-redux'

import {
  DisplayItems,
  RenderItems
} from './../../../../../../components/partials/controls'

import { periodUnavailabilityFields } from './fields/periodUnavailabilityFields'

const PeriodUnavailabilityTemplate = ({ periodUnavailability = {}, error, isFetching, intl }) => {

  const { isSuperAdmin } = useSelector((state) => ({ isSuperAdmin: state.common.auth.isSuperuser }), shallowEqual)
  const fields = periodUnavailabilityFields({ intl, isSuperAdmin })

  return (
    <DisplayItems
      error={error}
      isFetching={isFetching}
      object={periodUnavailability}
    >
      <RenderItems fields={fields} />
    </DisplayItems>
  )
}

export default injectIntl(PeriodUnavailabilityTemplate)
