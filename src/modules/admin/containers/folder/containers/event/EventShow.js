/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import Event from "./components/display/Event"

import { useSubheader } from "../../../../../../components/layout"
import { fetchEvent, clearStore } from "./store/actions"
import { getBasePath } from "./routes"
import {ShowView} from "../../../../../../components/partials"


const EventShow = ({ history, params = null, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "EVENT.SHOW.TITLE" })

  const basePath = getBasePath()

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, eventForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.event.isFetching,
      eventForShow: state.admin.event.event,
      error: state.admin.event.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchEvent(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  return (
    <ShowView
      title={_title}
      goBackTo={goBackTo}
      onClose={clearStore}
      error={error}
    >
      <Event error={error} isFetching={isFetching} event={eventForShow} />
    </ShowView>
  )
}


export default injectIntl(EventShow)
