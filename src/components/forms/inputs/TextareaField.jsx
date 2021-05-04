import React, {useEffect, useState} from "react"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import {useFormikContext} from "formik";
import _ from 'lodash'

const Textarea = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  withFeedbackLabel = true,
  customFeedbackLabel,
  required = false,
  hide = false, hideOn, condition = true,
  ...props
}) => {
    const formik = useFormikContext()
    const [show, setShow] = useState(hide)
  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)
    useEffect(() => {
    if (_.isString(hideOn) && hide){
        const field = _.get(formik.values, hideOn, false)
        setShow(hide && _.isArray(condition) ? !condition.includes(field) : field !== condition)
    }

    // eslint-disable-next-line
    }, [formik])

  return (
    <div className={inputGroupClassName + (show ? " d-none" : " ") }>
      {label && <label>{label} { (required && " *") }</label>}
      <textarea
        className={`${inputClassName} ${fieldCSSClasses}` }
        {...field}
        {...props}
        value={field.value || ""}
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Textarea
