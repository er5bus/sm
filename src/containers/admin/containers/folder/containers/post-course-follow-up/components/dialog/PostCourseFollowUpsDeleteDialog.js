/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../../components/partials"
import { usePostCourseFollowUpsUIContext } from "../../context/PostCourseFollowUpsUIContext"
import {fetchPostCourseFollowUps, deletePostCourseFollowUps} from "../../store/actions"


const PostCourseFollowUpsDeleteDialog = ({ show, onHide }) => {
  // PostCourseFollowUps UI Context
  const postCourseFollowUpsUIProps = usePostCourseFollowUpsUIContext()
  
  // PostCourseFollowUps Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.postCourseFollowUp.isLoading, success: state.admin.postCourseFollowUp.success }),
    shallowEqual
  )

  const onDeletePostCourseFollowUps = () => {
    // server request for deleting postCourseFollowUp by seleted ids
    dispatch(deletePostCourseFollowUps(postCourseFollowUpsUIProps.ids))
  }

  const onRefresh = () => {
    postCourseFollowUpsUIProps.setIds([])
    dispatch(fetchPostCourseFollowUps(postCourseFollowUpsUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeletePostCourseFollowUps}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="POST_COURSE_FOLLOWUP.MULTIPLE_DELETE.TITLE" />}
      body={<FormattedMessage id="POST_COURSE_FOLLOWUP.MULTIPLE_DELETE.MSG" />}
    />
  )
}


export default PostCourseFollowUpsDeleteDialog
