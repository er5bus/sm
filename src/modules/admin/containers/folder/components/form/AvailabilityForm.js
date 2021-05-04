import React from "react"
import { injectIntl } from "react-intl"

import { userAvailabilityFields } from "./fields/userAvailabilityFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const UserAvailabilityForm = (props) => {

  const { intl, saveRef, changeAvailability, initialValues } = props

  const fields = userAvailabilityFields({ intl })

  return (
    <>
      <DynamicForm
        className="mt-5"
        fields={fields}
        initialValues={initialValues}
        onSubmit={changeAvailability}
      >
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
    </>
  )
}

export default injectIntl(UserAvailabilityForm)
