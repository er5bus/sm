/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import Orientation from "./components/display/Orientation"

import { useSubheader } from "../../../../../../components/layout"
import { fetchOrientation, clearStore } from "./store/actions"
import { ENDPOINTS } from "./store/constants"
import { getBasePath } from "./routes"
import { ShowView } from "../../../../../../components/partials"


const OrientationShow = ({ history, params = null, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "ORIENTATION.SHOW.TITLE" })

  const basePath = getBasePath()

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, orientationForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.orientation.isFetching,
      orientationForShow: state.admin.orientation.orientation,
      error: state.admin.orientation.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchOrientation(params))
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
      printURL={ENDPOINTS.GENERATE_ORIENTATION.replace(":param", params.param)}

    >
      <Orientation error={error} isFetching={isFetching} orientation={orientationForShow} />
    </ShowView>
  )
}


export default injectIntl(OrientationShow)
