import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import eventFields from "./fields/eventFields"
import { fetchEvents }  from "../../store/actions"
import { DataTable } from "../../../../../../../../components/partials/controls"
import { useEventsUIContext } from "../../context/EventsUIContext"


const EventTable = ({ intl, folderParam }) => {
  // Events UI Context
  const eventsUIProps = useEventsUIContext()

  const columns = eventFields({ intl, eventsUIProps })

  // Getting curret state of events list from store (Redux)
  const { totalSize, events: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.event }),
    shallowEqual
  )
  // Events Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    eventsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchEvents({ ...(eventsUIProps.queryParams || {}), param: folderParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventsUIProps.queryParams, dispatch])

  return (
    <DataTable
      isFetching={isFetching}
      entities={entities}
      columns={columns}
      totalSize={totalSize}
      queryParams={eventsUIProps.queryParams}
      onQueryParamsChange={eventsUIProps.setQueryParams}
      ids={eventsUIProps.ids}
      setIds={eventsUIProps.setIds}
    />
  )
}


export default injectIntl(EventTable)
