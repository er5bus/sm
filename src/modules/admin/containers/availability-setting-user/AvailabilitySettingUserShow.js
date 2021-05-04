/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import AvailabilitySettingUser from "./components/display/AvailabilitySettingUser"
import { useSubheader } from "../../../../components/layout"
import { fetchAvailabilitySettingUser, clearStore } from "./store/actions"
import routes from "./../../routes"

const AvailabilitySettingUserShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "AVAILABILITY_SETTING_USER.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, availabilitySettingUserForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.availabilitySettingUser.isFetching,
      availabilitySettingUserForShow: state.admin.availabilitySettingUser.availabilitySettingUser,
      error: state.admin.availabilitySettingUser.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchAvailabilitySettingUser(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToAvailabilitySettingUsersList = () => {
    history.push(routes.availabilitySettingUserList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToAvailabilitySettingUsersList}
      onClose={clearStore}
      error={error}
    >
      <AvailabilitySettingUser error={error} isFetching={isFetching} availabilitySettingUser={availabilitySettingUserForShow} />
    </ShowView>
  )
}

export default injectIntl(AvailabilitySettingUserShow)
