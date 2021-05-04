import React, {useEffect, useState} from "react"
import _ from "lodash"
import { useFormikContext } from "formik"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import {hoursUIHelper, minuteUIHelper} from "../../../../../modules/admin/UIHelpers"

const DatePickerField = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "custom-select d-block w-100",
  format="HH:mm",
  required = false,
  hide=false,
  hideOn,
  condition
}) => {

  const { touched, errors } = form

  const [state, setState] = useState({ hour: "", minute: "" })

  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  const hours = hoursUIHelper()
  const minutes = minuteUIHelper()

  const formik = useFormikContext()
  const [show, setShow] = useState(hide)

  useEffect(() => {
    if (_.isString(hideOn) && hide){
      const field = _.get(formik.values, hideOn, false)
      setShow(hide && _.isArray(condition) ? !condition.includes(field) : field !== condition)
    }

    //  eslint-disable-next-line
  }, [formik, show])

  useEffect(() => {
    if (_.isString(field.value) && field.value.split(":").every((val) => !_.isEmpty(val))){
      const res = field.value.split(":")
      setState({ minute: res[1], hour: res[0] })
      if (document.getElementById( "hour" + res[0] + field.name)) {
        document.getElementById( "hour" + res[0] + field.name).selected = true
      }
      if (document.getElementById( "minute" + res[1] + field.name)) {
        document.getElementById( "minute" + res[1] + field.name).selected = true
      }
    }else {
      document.getElementById( "hour" + field.name).selected = true
      document.getElementById( "minute" + field.name).selected = true
    }

    // eslint-disable-next-line
  }, [field.value, field.name])

  const onChangeHour = (e) => {
    setState({ ...state, hour: e.currentTarget.value })
    if (state.minute && e.currentTarget.value){
      form.setFieldValue(field.name, format.replace("HH", e.currentTarget.value).replace("mm", state.minute))
    }
  }

  const onChangeMinute = (e) => {
    setState({ ...state, minute: e.currentTarget.value })
    if (state.hour && e.currentTarget.value){
      form.setFieldValue(field.name, format.replace("mm", e.currentTarget.value).replace("HH", state.hour))
    }
  }

  //defaultValue={(currentDate && currentDate.isValid()) ? currentDate.toDate() : undefined}
  return (
    <div className={inputGroupClassName + (show ? " d-none" : " ") }>
      {label && <label> { label} { (required && " *") }</label>}
      {/*value={moment(value, format)}*/}
      <div className="d-flex">
        <select onChange={onChangeHour} className={`${inputClassName} ${fieldCSSClasses}` }>
          <option id={ "hour" + field.name } value=""> -- </option>
          {
            hours.map((hour, i) => (
              <option key={i} id={ "hour" + hour.value + field.name } value={hour.value}>{ hour.label }</option>
            ))
          }
        </select>
        <select onChange={onChangeMinute} className={`${inputClassName} ${fieldCSSClasses}` }>
          <option id={ "minute" + field.name } value=""> -- </option>
          {
            minutes.map((minute, i) => (
              <option key={i} id={ "minute" + minute.value + field.name } value={minute.value}>{ minute.label }</option>
            ))
          }
        </select>
      </div>

      <FieldError fieldName={field.name} />
    </div>
  )
}

export default DatePickerField
