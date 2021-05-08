/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { closeEvent, fetchEvents } from "../../store/actions"
import { useEventsUIContext } from "../../context/EventsUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const EventCloseDialog = ({ params, show, onHide }) => {
  // Events UI Context
  const eventsUIProps = useEventsUIContext()
  
  // Events Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.event.isLoading, success: state.admin.event.success }),
    shallowEqual
  )

  const onCloseEvent = () => {
    // server request for deleting event by id
    dispatch(closeEvent(params))
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
      onClick={onCloseEvent}
      isLoading={isLoading}
      success={success.isClosed}
      title={<FormattedMessage id="EVENT.CLOSE.TITLE" />}
      body={<FormattedMessage id="EVENT.CLOSE.MSG" />}
    />
  )
}


export default EventCloseDialog
