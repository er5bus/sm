import React from "react"
import _ from "lodash"

import rootReducer from "./../store/reducer"
import {createDispatchHook, createSelectorHook, Provider} from "react-redux"
import {createStore} from "redux"

const FormContext = React.createContext()

export const useSelector = createSelectorHook(FormContext)
export const useDispatch = createDispatchHook(FormContext)

const formStore = createStore(rootReducer)

const FormProvider = ({ children }) => {

  return (
    <Provider store={formStore} context={FormContext}>
      { children }
    </Provider>
  )
}

export default React.memo(FormProvider)
