/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import Service from "./components/display/Service"
import { useSubheader } from "../../../../components/layout"
import { fetchService, clearStore } from "./store/actions"
import routes from "./../../routes"

const ServiceShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "SERVICE.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, serviceForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.service.isFetching,
      serviceForShow: state.admin.service.service,
      error: state.admin.service.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchService(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToServicesList = () => {
    history.push(routes.serviceList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToServicesList}
      onClose={clearStore}
      error={error}
    >
      <Service error={error} isFetching={isFetching} service={serviceForShow} />
    </ShowView>
  )
}

export default injectIntl(ServiceShow)
