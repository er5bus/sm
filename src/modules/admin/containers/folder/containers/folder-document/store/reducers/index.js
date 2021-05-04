import { ACTIONS } from "./../constants"


const initialState = { 
  folderDocuments: [], 
  folderDocument: {}, 
  totalSize: 0,
  isFetching: false, 
  isLoading: false,
  hasMore: true, 
  success: {
    isDeleted: false,
    isCreated: false,
    isUpdated: false,
    isClosed: false,
  },
  error: null
}


export default (state = initialState , action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.CLEAR_FOLDER_DOCUMENT : {
      return { ...state, success: initialState.success, error: null, isFetching: false, isLoading: false }
    }

    case ACTIONS.FETCH_FOLDER_DOCUMENTS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_FOLDER_DOCUMENTS_SUCCEDED : {
      const { count, results } = payload
      return { ...state, totalSize: count, folderDocuments: results, isFetching: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_DOCUMENTS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.CREATE_FOLDER_DOCUMENT_INIT : {
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.CREATE_FOLDER_DOCUMENT_SUCCEDED : {
      return { ...state, success: { ...state.success, isCreated: true }, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_FOLDER_DOCUMENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_FOLDER_DOCUMENT_INIT : {      
      return { ...state, isLoading: true, error: null, success: initialState.success }
    }
    case ACTIONS.EDIT_FOLDER_DOCUMENT_SUCCEDED : {
      return { ...state, success: { ...state.success, isUpdated: true }, isLoading: false, error: null }
    }
    case ACTIONS.EDIT_FOLDER_DOCUMENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }
 
    case ACTIONS.FETCH_FOLDER_DOCUMENT_INIT : {
      return { ...state, isLoading: true, folderDocument: null, error: null }
    }
    case ACTIONS.FETCH_FOLDER_DOCUMENT_SUCCEDED : {
      return { ...state, folderDocument: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_FOLDER_DOCUMENT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_FOLDER_DOCUMENT_INIT : {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.DELETE_FOLDER_DOCUMENT_SUCCEDED : {
      return { ...state, success: { ...state.success, isDeleted: true }, isLoading: false, error: null }
    }
    case ACTIONS.DELETE_FOLDER_DOCUMENT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.CLOSE_FOLDER_DOCUMENT_INIT: {
      return { ...state, isLoading: true, success: initialState.success, error: null }
    }
    case ACTIONS.CLOSE_FOLDER_DOCUMENT_SUCCEDED: {
      return { ...state, success: { ...state.success, isClosed: true }, isLoading: false, error: null }
    }
    case ACTIONS.CLOSE_FOLDER_DOCUMENT_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    default: {
      return state
    }
  }
}
