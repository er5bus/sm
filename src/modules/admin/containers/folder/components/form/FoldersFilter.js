import React from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { isEqual } from "lodash"
import { useFoldersUIContext } from "../../context/FoldersUIContext"

import { personalDataFieldsAr, personalDataFieldsFr, personalDataFields } from "./fields/filterFields"

import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"

const FoldersFilter = ({ searchRef, clearSearchRef, intl }) => {

  const fieldsFr = personalDataFieldsFr({ intl })
  const fieldsAr = personalDataFieldsAr({ intl })
  const fields = personalDataFields({ intl })

  // Folders UI Context
  const foldersUIProps = useFoldersUIContext()
  
  const applyFilter = (values) => {
    const newQueryParams = { ..._.pickBy({ ...foldersUIProps.queryParams, ...values}, _.identity) }
    if (!isEqual(newQueryParams, foldersUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      foldersUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DynamicForm
        className="mt-5"
        onSubmit={applyFilter}
        reset={true}
      >
        <RenderFields fields={fieldsFr} show={isFr} />
        <RenderFields fields={fieldsAr} show={isAr} />
        <RenderFields fields={fields} show={true} />
        <button ref={searchRef} className="d-none" type="submit"></button>
        <button ref={clearSearchRef} className="d-none" type="reset"></button>
      </DynamicForm>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(FoldersFilter)
