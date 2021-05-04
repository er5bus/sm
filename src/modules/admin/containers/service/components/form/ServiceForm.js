import React from 'react'
import { injectIntl } from 'react-intl'
import { serviceFieldsFr, serviceFieldsAr, serviceFields } from './fields/serviceFields'
import { DynamicForm, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'

const ServiceForm = (props) => {
  const { onSubmit, service, success, saveRef, intl } = props

  const fieldsFr = serviceFieldsFr({ intl })
  const fieldsAr = serviceFieldsAr({ intl })
  const fields = serviceFields({ intl })

  return (
    <LanguageTab>
      {
        ({ isAr, isFr }) => (
          <DynamicForm
            className='mt-5'
            clearValuesAfterSubmit={success}
            initialValues={service}
            onSubmit={onSubmit}
          >
            <RenderFields fields={fields} />
            <RenderFields fields={fieldsFr} show={isFr} />
            <RenderFields fields={fieldsAr} show={isAr} />
            <button ref={saveRef} className='d-none' type='submit' />
          </DynamicForm>
        )
      }
    </LanguageTab>
  )
}

export default injectIntl(ServiceForm)
