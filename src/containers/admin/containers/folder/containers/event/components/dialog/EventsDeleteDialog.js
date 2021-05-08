/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../../components/partials"
import { useEventsUIContext } from "../../context/EventsUIContext"
import {fetchEvents, deleteEvents} from "../../store/actions"


const EventsDeleteDialog = ({ show, onHide }) => {
  // Events UI Context
  const eventsUIProps = useEventsUIContext()
  
  // Events Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.event.isLoading, success: state.admin.event.success }),
    shallowEqual
  )

  const onDeleteEvents = () => {
    // server request for deleting event by seleted ids
    dispatch(deleteEvents(eventsUIProps.ids))
  }

  const onRefresh = () => {
    eventsUIProps.setIds([])
    dispatch(fetchEvents(eventsUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteEvents}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="EVENT.MULTIPLE_DELETE.TITLE" />}
      body={<FormattedMessage id="EVENT.MULTIPLE_DELETE.MSG" />}
    />
  )
}


export default EventsDeleteDialog
