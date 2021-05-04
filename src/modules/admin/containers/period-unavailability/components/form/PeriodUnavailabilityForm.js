import React from "react"
import { injectIntl } from "react-intl"
import { periodUnavailabilityFields } from "./fields/periodUnavailabilityFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"
import {shallowEqual, useSelector} from "react-redux"

const PeriodUnavailabilityForm = (props) => {

  const { onSubmit, periodUnavailability, success, saveRef, intl } = props

  const { isSuperAdmin } = useSelector((state) => ({ isSuperAdmin: state.common.auth.isSuperuser }), shallowEqual)

  const fields = periodUnavailabilityFields({ intl, isSuperAdmin })

  return (
    <DynamicForm
      className="mt-5"
      fields={fields}
      clearValuesAfterSubmit={success}
      initialValues={periodUnavailability}
      onSubmit={onSubmit}
    >
      <button ref={saveRef} className="d-none" type="submit"></button>
    </DynamicForm>
  )
}

export default injectIntl(PeriodUnavailabilityForm)
