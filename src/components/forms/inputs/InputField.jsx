import React, {useEffect, useState} from "react"
import _ from "lodash"
import { useFormikContext } from "formik"
import { FieldError, useFieldCSSClasses } from "./FieldError"

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  type = "text",
  required = false,
  maxLength=256,
  hide = false,
  hideOn,
  showOn,
  form,
  condition = true,
  ...props
}) => {

  const formik = useFormikContext()
  const [show, setShow] = useState(hide)
  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  useEffect(() => {
    if (hide){
      const field = _.get(formik.values, hideOn, false)
      setShow(hide && _.isArray(condition) ? !condition.includes(field) : field !== condition)
    }
    if (!hide && showOn){
      const field = _.get(formik.values, showOn, false)
      setShow(field === condition)
    }

    // eslint-disable-next-line
  }, [formik])

  useEffect(() => {
    if (!show && formik.dirty) {
      form.setFieldValue(field.name, "")
    }

    // eslint-disable-next-line
  }, [show])

  return (
    <div className={inputGroupClassName + (show ? ' d-none' : ' ')}>
      {label && <label> { label} { (required && " *") }</label>}
      <input
        type={type}
        className={`${inputClassName} ${fieldCSSClasses}` }
        maxLength={maxLength}
        autoComplete="off"
        {...field}
        {...props}
        value={field.value || ""}
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Input
