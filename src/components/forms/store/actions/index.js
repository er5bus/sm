import * as ACTIONS from './../constants'

export const clearStore = () => ({ type: ACTIONS.CLEAR_CONTRTOLS })

export const updateFields = (payload) => ({ type: ACTIONS.SET_FIELDS, payload })

export const updateObject = (payload) => ({ type: ACTIONS.SET_OBJECT, payload })

export const updateSuccess = (payload) => ({ type: ACTIONS.SET_SUCCESS, payload })

export const updateIsFetching = (payload) => ({ type: ACTIONS.SET_FETCHING, payload })

export const updateError = (payload) => ({ type: ACTIONS.SET_ERROR, payload })

export const updateIsSubmitted = (payload) => ({ type: ACTIONS.SET_SUBMITTED, payload })

export const updateDisplayContent = (payload) => ({ type: ACTIONS.SET_DISPLAY_CONTENT, payload })

export const updateSubmitCount = (payload) => ({ type: ACTIONS.ADD_SUBMIT_COUNT, payload })

export const updateFormError = (payload) => ({ type: ACTIONS.SET_ERROR_FORM, payload })
