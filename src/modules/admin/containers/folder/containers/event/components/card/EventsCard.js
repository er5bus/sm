import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FilterFormView,
  FlashMessages,
} from "../../../../../../../../components/partials/controls"
import { isRLTLang } from "./../../../../../../../../i18n"

import EventsFilter from "./../filter/EventsFilter"
import EventsTable from "./../table/EventsTable"
import EventsGrouping from "./../grouping/EventsGrouping"
import { useEventsUIContext } from "./../../context/EventsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const EventCard = ({ folderParam, goBackToFolder }) => {

  const eventsUIProps = useEventsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.event.success,
      error: state.admin.event.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="EVENT.MSG.DELETE" /> },
          { condition: success.isClosed, label: <FormattedMessage id="EVENT.MSG.COLSED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="EVENT.NEW.MSG" /> },
          { condition: success.isUpdated, label: <FormattedMessage id="EVENT.EDIT.MSG" /> }
        ]}
      />
      <FilterFormView
        title={ <FormattedMessage id="EVENT.FILTER.TITLE" /> }
      >
        {
          ({ searchRef, resetRef }) => (
            <EventsFilter clearSearchRef={resetRef} searchRef={searchRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="EVENT.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <Button
              type="button"
              onClick={goBackToFolder}
              className="btn btn-sm btn-light mx-2"
            >
              { isRLTLang() ?
                <>
                  <FormattedMessage id="GENERAL.BACK" />
                  <i className="fa fa-arrow-left" />
                </>
                : <>
                  <i className="fa fa-arrow-left" />
                  <FormattedMessage id="GENERAL.BACK" />
                </>
              }
            </Button>
            <ProtectedLink rule={eventsUIProps.newEventRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={eventsUIProps.newEventButtonClick}
              >
                <FormattedMessage id="EVENT.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {eventsUIProps.ids.length > 0 && <EventsGrouping />}
          <EventsTable folderParam={folderParam} />
        </CardBody>
      </Card>
    </>
  )
}


export default EventCard
