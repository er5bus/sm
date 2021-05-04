import * as ACTIONS from "./../constants"

const initialState = {
  isOffline: false, 
  checkConnectivity: false
}

const connectivityReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case ACTIONS.CHECK_CONNECTIVITY: {
      return { ...state, checkConnectivity: true }
    }
    case ACTIONS.OFFLINE: {
      return { ...state, isOffline: true, checkConnectivity: false }
    }
    case ACTIONS.ONLINE: {
      return { ...state, isOffline: false, checkConnectivity: false }
    }
    default: {
      return state
    }
  }
}

export default connectivityReducer
