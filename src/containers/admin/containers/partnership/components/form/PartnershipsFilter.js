import React, { useMemo } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { isEqual } from "lodash"
import { usePartnershipsUIContext } from "../../context/PartnershipsUIContext"

import {  partnershipFieldsAr, partnershipFieldsFr, partnershipFields } from "./fields/filterFields"

import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"

const PartnershipsFilter = ({ searchRef, clearSearchRef, intl }) => {

  const fieldsFr = partnershipFieldsFr({ intl })
  const fieldsAr = partnershipFieldsAr({ intl })
  const fields = partnershipFields({ intl })

  // Partnerships UI Context
  const partnershipsUIContext = usePartnershipsUIContext()
  const partnershipsUIProps = useMemo(() => {
    return {
      ...partnershipsUIContext
    }
  }, [partnershipsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ..._.pickBy({ ...partnershipsUIProps.queryParams, ...values}, _.identity) }
    if (!isEqual(newQueryParams, partnershipsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      partnershipsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <LanguageTab>
      { ({ isFr, isAr })  =>
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
      }
    </LanguageTab>
  )
}


export default injectIntl(PartnershipsFilter)
