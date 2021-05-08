import React from "react"
import { injectIntl } from "react-intl"
import { useDispatch } from "react-redux"
import { appointmentFields, appointmentFieldsFr, appointmentFieldsAr } from "./fields/userAssistedAppointmentFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"
import { createUserAppointment } from "./../../store/actions"

const AppointmentForm = (props) => {

  const { saveRef, intl, initialValues={}, params, params: { param: folder } } = props
  const dispatch = useDispatch()

  const saveAppointment = (fieldValues) => {
    const values = {
      ...initialValues,
      ...fieldValues,
      folder
    }
    dispatch(createUserAppointment(params, values))
  }

  const fields = appointmentFields({ intl })
  const fieldsFr = appointmentFieldsFr({ intl })
  const fieldsAr = appointmentFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DynamicForm
          className="mt-5"
          onSubmit={saveAppointment}
        >
          <RenderFields fields={fields} show={true} />
          <RenderFields fields={fieldsFr} show={isFr} />
          <RenderFields fields={fieldsAr} show={isAr} />
          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(AppointmentForm)
