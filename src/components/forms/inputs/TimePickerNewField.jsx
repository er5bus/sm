import React, { useEffect, useState } from "react"
import _ from "lodash"
import { FieldError, useFieldCSSClasses } from "./FieldError"
import { hoursUIHelper, minuteUIHelper } from "../../../../../modules/admin/UIHelpers"
import InputMaskBase from 'react-input-mask'
import MaterialInput from '@material-ui/core/Input';
import {getAttr} from "../../../../../helpers"

const DatePickerField = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  inputGroupClassName = "form-group",
  inputClassName = "form-control",
  format = "HH:mm",
  mask = "23:60",
  required = false
}) => {
  const { touched, errors } = form

  const [state, setState] = useState({ hour: "", minute: "" })

  const fieldCSSClasses = useFieldCSSClasses(touched, errors, field.name)

  const hours = hoursUIHelper()
  const minutes = minuteUIHelper()

  useEffect(() => {
    if (_.isString(field.value) && field.value.split(":").every((val) => !_.isEmpty(val))) {
      const res = field.value.split(":")
      setState({ minute: res[1], hour: res[0] })
      if (document.getElementById("hour" + res[0] + field.name)) {
        document.getElementById("hour" + res[0] + field.name).selected += "selected"
      }
      if (document.getElementById("minute" + res[1] + field.name)) {
        document.getElementById("minute" + res[1] + field.name).className += " selected"
      }
    } else {
      //document.getElementById("hour" + field.name).selected += " selected"
      //document.getElementById("minute" + field.name).selected += " selected"
    }

    // eslint-disable-next-line
  }, [field.value, field.name])

  const onChangeHour = (hour) => {
    setState({ ...state, hour })
    if (state.minute && hour) {
      form.setFieldValue(field.name, format.replace("HH", hour).replace("mm", state.minute))
    }
  }

  const onChangeMinute = (e) => {
    setState({ ...state, minute: e.currentTarget.value })
    if (state.hour && e.currentTarget.value) {
      form.setFieldValue(field.name, format.replace("mm", e.currentTarget.value).replace("HH", state.hour))
    }
  }

  // defaultValue={(currentDate && currentDate.isValid()) ? currentDate.toDate() : undefined}
  return (
    <div className={inputGroupClassName}>
      {label && <label> {label} {(required && " *")}</label>}
      {/* value={moment(value, format)} */}
      <div className="d-flex">
        <InputMaskBase formatChars={{
          'HH': '[0-23]',
          'mm': ['0-60'],
          }} mask={format} { ...field } value={field.value || "__:__"}>
        {(inputProps) => <MaterialInput
          {...inputProps}
          className={`${inputClassName} ${fieldCSSClasses}` }
          autoComplete="off"
          disableUnderline
        />
        }
      </InputMaskBase>
        {/*<select onChange={onChangeHour} className={`${inputClassName} ${fieldCSSClasses}`}>
          <option id={"hour" + field.name} value=""> -- </option>
          {
            hours.map((hour, i) => (
              <option key={i} id={"hour" + hour.value + field.name} value={hour.value}>{hour.label}</option>
            ))
          }
        </select>
        <select onChange={onChangeMinute} className={`${inputClassName} ${fieldCSSClasses}`}>
          <option id={"minute" + field.name} value=""> -- </option>
          {
            minutes.map((minute, i) => (
              <option key={i} id={"minute" + minute.value + field.name} value={minute.value}>{minute.label}</option>
            ))
          }
        </select>*/}
      </div>
      
      { getAttr(touched, field.name, false) && <div className="picker-dropdown picker-dropdown-placement-bottomLeft ">
        <div className="picker-panel-container">
          <div tabIndex="-1" className="picker-panel">
            <div className="picker-time-panel">
              <div className="picker-content">
                <ul className="picker-time-panel-column">
                  <li className="picker-time-panel-cell picker-time-panel-cell-selected">
                    { hours.map((hour, i) => <div id={"hour" + hour.value + field.name} key={i} className="picker-time-panel-cell-inner">{ hour.label }</div>) }
                  </li>
                </ul>
                <ul className="picker-time-panel-column">
                  <li className="picker-time-panel-cell picker-time-panel-cell-selected">
                    { minutes.map((minute, i) => <div id={"minute" + minute.value + field.name} key={i} className="picker-time-panel-cell-inner">{ minute.label }</div>) }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>}

      <FieldError fieldName={field.name} />
    </div>
  )
}

export default DatePickerField
