import React from 'react'
import { injectIntl } from 'react-intl'
import { DynamicForm, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import { userFieldsAr, userFields, userFieldsFr } from './fields/userFields'

const UserForm = (props) => {
  const { onSubmit, user, success, saveRef, intl } = props

  const fields = userFields({ intl })
  const fieldsAr = userFieldsAr({ intl })
  const fieldsFr = userFieldsFr({ intl })

  return (
    <LanguageTab>
      {({ isFr, isAr }) => (
        <DynamicForm
          className='mt-5'
          clearValuesAfterSubmit={success}
          initialValues={user}
          onSubmit={onSubmit}
        >
          <RenderFields fields={fieldsFr} show={isFr} />
          <RenderFields fields={fieldsAr} show={isAr} />
          <RenderFields fields={fields} />
          <button ref={saveRef} className='d-none' type='submit' />
        </DynamicForm>
      )}
    </LanguageTab>
  )
}

export default injectIntl(UserForm)
