/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"
import * as qs from 'query-string'
import PostCourseFollowUpForm from "./components/form/PostCourseFollowUpForm"
import { createPostCourseFollowUp, clearStore, editPostCourseFollowUp, fetchPostCourseFollowUp } from "./store/actions"
import { useSubheader } from "../../../../../../components/layout"
import {FormView} from "../../../../../../components/partials"
import { getBasePath } from "./routes"


const PostCourseFollowUp = ({ history, location, params = null, intl }) => {

  const basePath = getBasePath()

  // Subheader
  const suhbeader = useSubheader()

  const title = !_.isEmpty(params.postCourseFollowUpParam) ? intl.formatMessage({ id: "POST_COURSE_FOLLOWUP.EDIT.TITLE" }) : intl.formatMessage({ id: "POST_COURSE_FOLLOWUP.NEW.TITLE" })

  useEffect(() => {
    suhbeader.setTitle(title)
  })
  
  const [prefilledPostCourseFollowUpForAdd, setPrefilledPostCourseFollowUpForAdd] = useState({})
  const dispatch = useDispatch()

  const { isLoading, postCourseFollowUpForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.postCourseFollowUp.isLoading,
      postCourseFollowUpForEdit: state.admin.postCourseFollowUp.postCourseFollowUp,
      success: state.admin.postCourseFollowUp.success,
      error: state.admin.postCourseFollowUp.error
    }),
    shallowEqual
  )

  const savePostCourseFollowUp = (values) => {
    if (_.isEmpty(params.postCourseFollowUpParam)) {
      dispatch(createPostCourseFollowUp(params, values))
    } else {
      dispatch(editPostCourseFollowUp(params, values))
    }
  }

  useEffect(() => {
    if (location.search){
      const query = qs.parse(location.search, { interpretNumericEntities: true })
      Object.keys(query).forEach((key) => {
        query[key] = isNaN(query[key]) ? query[key] : parseInt(query[key])
      })
      setPrefilledPostCourseFollowUpForAdd(query)
    }

    // eslint-disable-next-line
  }, [])

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  useEffect(() => {
    if ((success.isCreated || success.isUpdated) && !_.isEmpty(params)  ) {
      //history.goBack()
    }

    // eslint-disable-next-line
  }, [success, params])

  useEffect(() => {
    if (!_.isEmpty(params.postCourseFollowUpParam)){
      dispatch(fetchPostCourseFollowUp(params))
    }

    // eslint-disable-next-line
  }, [])

  return (
    <FormView
      goBackTo={goBackTo}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "POST_COURSE_FOLLOWUP.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "POST_COURSE_FOLLOWUP.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<PostCourseFollowUpForm
        isLoading={isLoading}
        postCourseFollowUp={ !_.isEmpty(params.postCourseFollowUpParam) ? postCourseFollowUpForEdit : prefilledPostCourseFollowUpForAdd}
        success={success.isCreated}
        onSubmit={savePostCourseFollowUp}
        saveRef={saveRef}
      />
      )
      }
    </FormView>
  )
}


export default withRouter(injectIntl(PostCourseFollowUp))
