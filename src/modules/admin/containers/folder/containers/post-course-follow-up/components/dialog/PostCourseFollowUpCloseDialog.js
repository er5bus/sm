/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { closePostCourseFollowUp, fetchPostCourseFollowUps } from "../../store/actions"
import { usePostCourseFollowUpsUIContext } from "../../context/PostCourseFollowUpsUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const PostCourseFollowUpCloseDialog = ({ params, show, onHide }) => {
  // PostCourseFollowUps UI Context
  const postCourseFollowUpsUIProps = usePostCourseFollowUpsUIContext()
  
  // PostCourseFollowUps Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.postCourseFollowUp.isLoading, success: state.admin.postCourseFollowUp.success }),
    shallowEqual
  )

  const onClosePostCourseFollowUp = () => {
    // server request for deleting postCourseFollowUp by id
    dispatch(closePostCourseFollowUp(params))
  }

  const onRefresh = () => {
    dispatch(fetchPostCourseFollowUps(params))
      postCourseFollowUpsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onClosePostCourseFollowUp}
      isLoading={isLoading}
      success={success.isClosed}
      title={<FormattedMessage id="POST_COURSE_FOLLOWUP.CLOSE.TITLE" />}
      body={<FormattedMessage id="POST_COURSE_FOLLOWUP.CLOSE.MSG" />}
    />
  )
}


export default PostCourseFollowUpCloseDialog
