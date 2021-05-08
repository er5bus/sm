/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteEvent, fetchEvents } from "../../store/actions"
import { useEventsUIContext } from "../../context/EventsUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const EventDeleteDialog = ({ params, show, onHide }) => {
  // Events UI Context
  const eventsUIProps = useEventsUIContext()
  
  // Events Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.event.isLoading, success: state.admin.event.success }),
    shallowEqual
  )

  const onDeleteEvent = () => {
    // server request for deleting event by id
    dispatch(deleteEvent(params))
  }

  const onRefresh = () => {
    dispatch(fetchEvents(params))
    eventsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteEvent}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="EVENT.DELETE.TITLE" />}
      body={<FormattedMessage id="EVENT.DELETE.MSG" />}
    />
  )
}


export default EventDeleteDialog
