import { useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { isEqual, isEmpty, isString } from 'lodash'
//import { formatFormError, getAttr } from '../../helpers'
import * as actions from './../store/actions'
import { useSelector, useDispatch } from './../provider/FormProvider'
import {getAttr,formatFormError} from '../../../helpers'

const useFormSelector = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const state = useSelector((state) => state, isEqual)

  useEffect(() => {
    return history.listen(() => {
      dispatch(actions.clearStore())
    })

    // eslint-disable-next-line
  }, [history])

  const setObject = (payload) => {
    if (!isEqual(state.object, payload)) {
      dispatch(actions.updateObject(payload))
    }
  }

  const setSuccess = (payload) => {
    dispatch(actions.updateSuccess(payload))
    dispatch(actions.updateIsSubmitted(!payload))
  }

  const setFetching = (payload) => {
    if (payload !== state.isFetching) {
      dispatch(actions.updateIsFetching(payload))
    }
  }

  const setError = (payload) => {
    if (!isEqual(state.error, payload) && !isEmpty(payload)) {
      dispatch(actions.updateError(payload))
    }
  }

  const setIsSubmitted = (payload) => {
    dispatch(actions.updateSubmitCount(state.submitCount + 1))
    if (!isEqual(state.isSubmitted, payload)) {
      dispatch(actions.updateIsSubmitted(payload))
    }
  }

  const setDisplayContent = (payload) => {
    if (!isEqual(payload, state.displayContent)) {
      dispatch(actions.updateDisplayContent(payload))
    }
  }

  const setDisplayFields = (fields, show = true) => {
    setFields(fields, show, false)
  }

  const setFormFields = (fields, show = true) => {
    setFields(fields, show, true)
  }

  const setFields = (newFields, show = true, isFormField) => {
    if (!newFields
      .map((field) => isString(field.name) ? field.name : JSON.stringify(field.name))
      .every((field) => (!isFormField ? state.displayFields : state.formFields)
        .map((field) => isString(field.name) ? field.name : JSON.stringify(field.name))
        .includes(field)
      )
    ) {
      dispatch(actions.updateFields({ newFields, show, isFormField }))
    }
  }
  
  const formError = useMemo(() => {
    const { error, isSubmitted, success } = state
    if (!isEmpty(error) && isSubmitted && !success) {
      const { status, data = {} } = error
      const { code = undefined } = data

      if (status === 400 && !code) {
        //return formatFormError(state.formFields, data)
      }
    }
    return {}
    // eslint-disable-next-line
  }, [state.error, state.isSubmitted])

  const isNotAvailableResource = useMemo(() => {
    if (!isEmpty(state.error) && state.error.status === 404) {
      return true
    }
    return !state.isFetching && !isEmpty(state.error) && (isEmpty(state.object) || state.object === null)
  }, [state])

  const updateSubmitCount = (count) => {
    dispatch(actions.updateSubmitCount(count))
  }

  const setFormError = (fields) => {
    dispatch(actions.updateFormError(fields))
  }

  const langError = useMemo(() => {
    return null
    // eslint-disable-next-line
  }, [state.submitCount])

  const getFieldError = (fieldName) => getAttr(formError, fieldName, undefined)

  return {
    ...state,
    isNotAvailableResource,
    getFieldError,
    setSuccess,
    setFetching,
    setError,
    setObject,
    setIsSubmitted,
    setDisplayFields,
    setFormFields,
    updateSubmitCount,
    setFormError,
    langError,
    setDisplayContent
  }
}

export default useFormSelector
