import React from "react"
import { injectIntl } from "react-intl"

import availabilitySettingUserFields from "./fields/availabilitySettingUserFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const AvailabilitySettingUserForm = (props) => {

  const { onSubmit, availabilitySettingUser, success, saveRef, intl } = props

  const fields = availabilitySettingUserFields({ intl })

  return (
    <>
      <DynamicForm
        initialValues={availabilitySettingUser}
        onSubmit={onSubmit}
        clearValuesAfterSubmit={success}
        fields={fields}
      >
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
    </>
  )
}

export default injectIntl(AvailabilitySettingUserForm)
