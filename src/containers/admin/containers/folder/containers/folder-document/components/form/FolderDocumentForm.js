import React from "react"
import { injectIntl } from "react-intl"
import { folderDocumentFieldsAr, folderDocumentFieldsFr, folderDocumentFields } from "./fields/folderDocumentFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"


const FolderDocumentForm = (props) => {

  const { onSubmit, folderDocument, success, saveRef, intl } = props

  const fieldsFr = folderDocumentFieldsFr({ intl })
  const fieldsAr = folderDocumentFieldsAr({ intl })
  const fields = folderDocumentFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        initialValues={folderDocument}
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

export default injectIntl(FolderDocumentForm)
