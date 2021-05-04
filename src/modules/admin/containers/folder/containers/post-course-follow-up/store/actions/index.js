import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_POST_COURSE_FOLLOWUP
  })


export const fetchPostCourseFollowUps = (postCourseFollowUpParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_POST_COURSE_FOLLOWUPS_INIT,
        success: ACTIONS.FETCH_POST_COURSE_FOLLOWUPS_SUCCEDED,
        fail: ACTIONS.FETCH_POST_COURSE_FOLLOWUPS_FAILED
      },
      endpoint: ENDPOINTS.POST_COURSE_FOLLOWUPS.replace(":param", postCourseFollowUpParams.param),
      method: HTTP_METHODS.GET,
      params: postCourseFollowUpParams,
      auth: true
    }
  })


export const createPostCourseFollowUp = (postCourseFollowUpParams, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_POST_COURSE_FOLLOWUP_INIT,
        success: ACTIONS.CREATE_POST_COURSE_FOLLOWUP_SUCCEDED,
        fail: ACTIONS.CREATE_POST_COURSE_FOLLOWUP_FAILED
      },
      endpoint: ENDPOINTS.POST_COURSE_FOLLOWUPS.replace(":param", postCourseFollowUpParams.param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editPostCourseFollowUp = ({ postCourseFollowUpParam }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_POST_COURSE_FOLLOWUP_INIT,
        success: ACTIONS.EDIT_POST_COURSE_FOLLOWUP_SUCCEDED,
        fail: ACTIONS.EDIT_POST_COURSE_FOLLOWUP_FAILED
      },
      endpoint: ENDPOINTS.POST_COURSE_FOLLOWUP.replace(":postCourseFollowUpParam", postCourseFollowUpParam),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const deletePostCourseFollowUp = ({ postCourseFollowUpParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_POST_COURSE_FOLLOWUP_INIT,
        success: ACTIONS.DELETE_POST_COURSE_FOLLOWUP_SUCCEDED,
        fail: ACTIONS.DELETE_POST_COURSE_FOLLOWUP_FAILED
      },
      endpoint: ENDPOINTS.POST_COURSE_FOLLOWUP.replace(":postCourseFollowUpParam", postCourseFollowUpParam),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

  export const closePostCourseFollowUp = ({ postCourseFollowUpParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.CLOSE_POST_COURSE_FOLLOWUP_INIT,
        success: ACTIONS.CLOSE_POST_COURSE_FOLLOWUP_SUCCEDED,
        fail: ACTIONS.CLOSE_POST_COURSE_FOLLOWUP_FAILED
      },
      endpoint: ENDPOINTS.CLOSE_POST_COURSE_FOLLOWUP.replace(":postCourseFollowUpParam", postCourseFollowUpParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })

export const deletePostCourseFollowUps = (postCourseFollowUpParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_POST_COURSE_FOLLOWUP_INIT,
        success: ACTIONS.DELETE_POST_COURSE_FOLLOWUP_SUCCEDED,
        fail: ACTIONS.DELETE_POST_COURSE_FOLLOWUP_FAILED
      },
      endpoint: ENDPOINTS.POST_COURSE_FOLLOWUPS,
      method: HTTP_METHODS.DELETE,
      postCourseFollowUpParams,
      auth: true
    }
  })


export const fetchPostCourseFollowUp = ({ postCourseFollowUpParam }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_POST_COURSE_FOLLOWUP_INIT,
        success: ACTIONS.FETCH_POST_COURSE_FOLLOWUP_SUCCEDED,
        fail: ACTIONS.FETCH_POST_COURSE_FOLLOWUP_FAILED
      },
      endpoint: ENDPOINTS.POST_COURSE_FOLLOWUP.replace(":postCourseFollowUpParam", postCourseFollowUpParam),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
