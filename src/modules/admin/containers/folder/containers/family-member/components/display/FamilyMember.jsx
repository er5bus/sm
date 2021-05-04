import React from "react"
import { injectIntl } from "react-intl"
import {DisplayItems, LanguageTab, RenderItems} from "../../../../../../../../components/partials"
import { familyMemberFields, familyMemberFieldsAr, familyMemberFieldsFr } from "./fields/familyMemberFields"


const FamilyMemberTemplate = ({ familyMember = {}, isFetching, error, intl }) => {

  const fields = familyMemberFields({ intl })
  const fieldsAr = familyMemberFieldsAr({ intl })
  const fieldsFr = familyMemberFieldsFr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={familyMember}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
        </DisplayItems>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(FamilyMemberTemplate)
