import React from "react"
import { FormattedMessage } from "react-intl"
import { ErrorMessage } from "formik"
import {getAttr} from "../../../../../helpers"
import {useControlUISelector} from "../.."


export const FieldError = ({ fieldName }) => {

  const formUiProps = useControlUISelector()

  if (formUiProps && formUiProps.getFieldError(fieldName)){
    return <div className="invalid-feedback"><FormattedMessage id={formUiProps.getFieldError(fieldName)} /></div>
  }

  return <ErrorMessage name={fieldName}>
    {(msg) =>
    <div className="invalid-feedback"><FormattedMessage { ...JSON.parse(msg) } /></div>
    }
  </ErrorMessage>
}

export const useFieldCSSClasses = (touched, errors, fieldName) => {
  const fieldError = getAttr(errors, fieldName, false)
  const fieldTouched = getAttr(touched, fieldName, false)

  const formUiProps = useControlUISelector()
  const classes = [""]

  if ((fieldTouched && fieldError) || (formUiProps && formUiProps.getFieldError(fieldName))) {
    classes.push("is-invalid is-invalid-select")
  }

  if (fieldTouched && !fieldError && (formUiProps && !formUiProps.getFieldError(fieldName))) {
    classes.push("is-valid is-valid-select")
  }

  return classes.join(" ")
}

