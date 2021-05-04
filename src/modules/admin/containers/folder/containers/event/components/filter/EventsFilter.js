import React from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { useEventsUIContext } from "../../context/EventsUIContext"

import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"

import { eventFieldsAr, eventFieldsFr, eventFields } from "./fields/eventFields"


const EventsFilter = ({ intl, searchRef, clearSearchRef }) => {
  // Events UI Context
  const eventsUIProps = useEventsUIContext()

  const fieldsFr = eventFieldsFr({ intl })
  const fieldsAr = eventFieldsAr({ intl })
  const fields = eventFields({ intl })

  const applyFilter = (values) => {
    const newQueryParams = { ..._.pickBy({ ...eventsUIProps.queryParams, ...values}, _.identity) }
    if (!_.isEqual(newQueryParams, eventsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      eventsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        onSubmit={applyFilter}
      >
        <RenderFields fields={fieldsFr} show={isFr} />
        <RenderFields fields={fieldsAr} show={isAr} />
        <RenderFields fields={fields} show={true} />
        <button ref={searchRef} className="d-none" type="submit"></button>
        <button ref={clearSearchRef} className="d-none" type="reset"></button>
      </DynamicForm> 
      )}
    </LanguageTab>
  )
}


export default injectIntl(EventsFilter)
