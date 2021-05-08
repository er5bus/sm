import React from "react"
import { injectIntl } from "react-intl"

import availabilitySettingStructureFields from "./fields/availabilitySettingStructureFields"
import { DynamicForm } from "./../../../../../../components/partials/controls"

const AvailabilitySettingStructureForm = (props) => {

  const { onSubmit, availabilitySettingStructure, success, saveRef, intl } = props

  const fields = availabilitySettingStructureFields({ intl })

  return (
    <>
      <DynamicForm
        initialValues={availabilitySettingStructure}
        onSubmit={onSubmit}
        clearValuesAfterSubmit={success}
        fields={fields}
      >
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
    </>
  )
}

export default injectIntl(AvailabilitySettingStructureForm)
