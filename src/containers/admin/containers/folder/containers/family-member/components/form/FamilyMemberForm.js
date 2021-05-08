import React from "react"
import { injectIntl } from "react-intl"
import { familyMemberFieldsAr, familyMemberFieldsFr, familyMemberFields } from "./fields/familyMemberFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"


const FamilyMemberForm = (props) => {

  const { onSubmit, familyMember, success, saveRef, intl } = props

  const fieldsFr = familyMemberFieldsFr({ intl })
  const fieldsAr = familyMemberFieldsAr({ intl })
  const fields = familyMemberFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        initialValues={familyMember}
        clearValuesAfterSubmit={success}
        onSubmit={onSubmit}
      >
        <RenderFields fields={fieldsFr} show={isFr} />
        <RenderFields fields={fieldsAr} show={isAr} />
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
      )}
    </LanguageTab>
  )
}

export default injectIntl(FamilyMemberForm)
