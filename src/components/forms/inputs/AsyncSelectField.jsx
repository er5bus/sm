import React, {useEffect, useMemo, useState} from "react"
import {FormattedMessage} from "react-intl"
import _ from "lodash"
import { useFormikContext } from "formik"
import ReactSelect from "react-select/async"
import { FieldError, useFieldCSSClasses } from "./FieldError"

const Select = ({
  label,
  placeholder,
  onInputChange,
  loadOptions=f=>f,
  field,
  inputGroupClassName = "form-group",
  multiple=false,
  required = false,
  form, 
  hide=false,
  hideOn,
  condition=false,
}) => {

  const [selectedOptions, setSelectedOptions] = useState([])
  const [defaultOptions, setDefaultOptions] = useState([])
  const fieldCSSClasses = useFieldCSSClasses(form.touched, form.errors, field.name)

  const formik = useFormikContext()
  const [show, setShow] = useState(hide)

  const onSelectChange =(option) => {
    if (_.has(option, 'value')){
      form.setFieldValue(field.name, option.value)
      setSelectedOptions(_.uniqWith([...selectedOptions, option], _.isEqual))
    }
  }

  useEffect(() => {
    if (field.value && !selectedOptions.some((option) => option.value === field.value)){
      loadOptions(setSelectedOptions, field.value)
    }
  }, [field.value, loadOptions, setSelectedOptions, selectedOptions])

  useEffect(() => {
    if (_.isFunction(loadOptions) && _.isEmpty(defaultOptions)){
      loadOptions(setDefaultOptions)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

   useEffect(() => {
    if (_.isString(hideOn) && hide){
      const field = _.get(formik.values, hideOn, false)
      setShow(hide && _.isArray(condition) ? !condition.includes(field) : field !== condition)
    }

    if (condition && hide){
      setShow(true)
    }

    //  eslint-disable-next-line
  }, [formik, show])

  useEffect(() => {
    if (_.isString(hideOn) && hide){
      const field = _.get(formik.values, hideOn, false)
      if (hide && _.isArray(condition) ? !condition.includes(field) : field !== condition){
        //form.setFieldValue(field.name, initialValue)
      }
    }
    //  eslint-disable-next-line
  }, [show])

  const selectedValues = useMemo(() => {
    if (!_.isArray(field.value) && _.isArray(selectedOptions)){
      return selectedOptions.find(option => option.value === field.value)
    }
    if (_.isArray(field.value) && _.isArray(selectedOptions)){
      return selectedOptions.filter(option => field.value.includes(option.value))
    }

    return field.value || (multiple ? [] : "")
  }, [field.value, selectedOptions, multiple])

  return (
    <div className={inputGroupClassName + (show ? " d-none" : " ") }>
      { label && <label>{label} { (required && " *") }</label> }
      <ReactSelect
        className={fieldCSSClasses}
        placeholder={placeholder}
        options={selectedOptions}
        name={field.name}
        value={selectedValues || ''}
        onChange={onSelectChange}
        onBlur={field.onBlur}
        loadOptions={loadOptions}
        onInputChange={onInputChange}
        noOptionsMessage={() => <FormattedMessage id="GENERAL.SELECT.NO_OPTIONS" />}
        defaultOptions={defaultOptions}
        isSearchable
        cacheOptions
      />
      <FieldError fieldName={field.name} />
    </div>
  )
}


export default Select
