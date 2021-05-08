/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import SchoolDropout from "./components/display/SchoolDropout"
import { useSubheader } from "../../../../components/layout"
import { fetchSchoolDropout, clearStore } from "./store/actions"
import routes from "../../routes"

const SchoolDropoutShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "SCHOOL_DROPOUT.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, schoolDropoutForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.schoolDropout.isFetching,
      schoolDropoutForShow: state.admin.schoolDropout.schoolDropout,
      error: state.admin.schoolDropout.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchSchoolDropout(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToSchoolDropoutsList = () => {
    history.push(routes.schoolDropoutList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToSchoolDropoutsList}
      onClose={clearStore}
      error={error}
    >
      <SchoolDropout error={error} isFetching={isFetching} schoolDropout={schoolDropoutForShow} />
    </ShowView>
  )
}

export default injectIntl(SchoolDropoutShow)
