/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import PostCourseFollowUp from "./components/display/PostCourseFollowUp"

import { useSubheader } from "../../../../../../components/layout"
import { fetchPostCourseFollowUp, clearStore } from "./store/actions"
import { getBasePath } from "./routes"
import {ShowView} from "../../../../../../components/partials"


const PostCourseFollowUpShow = ({ history, params = null, intl }) => {

  const basePath = getBasePath()

  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "POST_COURSE_FOLLOWUP.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, postCourseFollowUpForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.postCourseFollowUp.isFetching,
      postCourseFollowUpForShow: state.admin.postCourseFollowUp.postCourseFollowUp,
      error: state.admin.postCourseFollowUp.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchPostCourseFollowUp(params))
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
      <PostCourseFollowUp error={error} isFetching={isFetching} postCourseFollowUp={postCourseFollowUpForShow} />
    </ShowView>
  )
}


export default injectIntl(PostCourseFollowUpShow)
