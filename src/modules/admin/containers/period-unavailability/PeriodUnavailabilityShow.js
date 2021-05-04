/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import PeriodUnavailability from "./components/display/PeriodUnavailability"
import { useSubheader } from "../../../../components/layout"
import { fetchPeriodUnavailability, clearStore } from "./store/actions"
import routes from "./../../routes"

const PeriodUnavailabilityShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, periodUnavailabilityForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.periodUnavailability.isFetching,
      periodUnavailabilityForShow: state.admin.periodUnavailability.periodUnavailability,
      error: state.admin.periodUnavailability.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchPeriodUnavailability(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToPeriodUnavailabilitysList = () => {
    history.push(routes.periodUnavailabilityList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToPeriodUnavailabilitysList}
      onClose={clearStore}
      error={error}
    >
      <PeriodUnavailability error={error} isFetching={isFetching} periodUnavailability={periodUnavailabilityForShow} />
    </ShowView>
  )
}

export default injectIntl(PeriodUnavailabilityShow)
