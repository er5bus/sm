import * as ACTIONS from "./../constants"

const initialState = {
  formFields: [],
  displayFields: [],
  shownFormFields: [],
  shownDisplayFields: [],
  isSubmitted: false,
  object: undefined,
  isFetching: false,
  error: undefined,
  formError: [],
  success: false,
  submitCount: 0,
  displayContent: true
}

const reducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_CONTRTOLS : {
      return initialState
    }
    case ACTIONS.SET_FIELDS: {
      return {
        ...state,
        formFields: payload.isFormField ? [...state.formFields, ...payload.newFields]: state.formFields,
        shownFormFields: payload.isFormField && payload.show ? [...state.shownFormFields, ...payload.newFields]: state.shownFormFields
      }
    }
    case ACTIONS.SET_ERROR_FORM: {
      return { ...state, formError: payload }
    }
    case ACTIONS.ADD_SUBMIT_COUNT: {
      return { ...state, submitCount: payload }
    }
    case ACTIONS.SET_SHOWN_FIELDS: {
      return { ...state, shownFields: payload }
    }
    case ACTIONS.SET_SUBMITTED: {
      return { ...state, isSubmitted: payload }
    }
    case ACTIONS.SET_OBJECT: {
      return { ...state, object: payload }
    }
    case ACTIONS.SET_FETCHING: {
      return { ...state, isFetching: payload }
    }
    case ACTIONS.SET_ERROR: {
      return { ...state, error: payload }
    }
    case ACTIONS.SET_SUCCESS: {
      return { ...state, success: payload }
    }
    case ACTIONS.SET_DISPLAY_CONTENT: {
      return { ...state, displayContent: payload }
    }
    default: {
      return state
    }
  }
}

export default reducer
