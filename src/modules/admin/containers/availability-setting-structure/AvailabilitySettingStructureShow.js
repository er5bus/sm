/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import AvailabilitySettingStructure from "./components/display/AvailabilitySettingStructure"
import { useSubheader } from "../../../../components/layout"
import { fetchAvailabilitySettingStructure, clearStore } from "./store/actions"
import routes from "./../../routes"

const AvailabilitySettingStructureShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "AVAILABILITY_SETTING_STRUCTURE.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, availabilitySettingStructureForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.availabilitySettingStructure.isFetching,
      availabilitySettingStructureForShow: state.admin.availabilitySettingStructure.availabilitySettingStructure,
      error: state.admin.availabilitySettingStructure.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchAvailabilitySettingStructure(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToAvailabilitySettingStructuresList = () => {
    history.push(routes.availabilitySettingStructureList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToAvailabilitySettingStructuresList}
      onClose={clearStore}
      error={error}
    >
      <AvailabilitySettingStructure error={error} isFetching={isFetching} availabilitySettingStructure={availabilitySettingStructureForShow} />
    </ShowView>
  )
}

export default injectIntl(AvailabilitySettingStructureShow)
