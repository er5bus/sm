import React, {useEffect, useRef, useState} from "react"
import _ from "lodash"
import * as Yup from "yup"
import { Formik, Form, FastField, useFormikContext } from "formik"
import { Row, Col } from "react-bootstrap"

import { FORM_COMPONENT, DEFAULT_TYPE } from "./../inputs-types"
import { createYupSchema, getStorage, setStorage } from "../../../helpers"

import useFormSelector from "../hooks/useFormSelector"


const DynamicFormError = () => {

  const { errors, submitCount } = useFormikContext()
  const formUiProps = useFormSelector()

  React.useEffect(() => {
    if (!_.isEmpty(errors)){
      formUiProps.setFormError(errors)
      formUiProps.updateSubmitCount(submitCount)
    }
    // eslint-disable-next-line
  }, [submitCount, errors]);
  return null;
};

const FormProvider = (props) => {

  const {
    children,
    fields = [],
    className,
    saveForm=false,
    clearValuesAfterSubmit,
    saveFormName="",
    validationSchema,
    reset = false,
    onChange,
    saveRef,
    onSubmit,
    initialValues = {}
  } = props

  const formUiProps = useFormSelector()

  const [savedValues, setSavedValues] = useState({})
  const resetRef = useRef()

  useEffect(() => {
    if (!_.isEmpty(fields) && formUiProps){
      formUiProps.setFormFields(fields)
    }
    // eslint-disable-next-line
  }, [fields])

  useEffect(() => {
    if (saveForm){
      setSavedValues(getStorage(saveFormName))
    }

    // eslint-disable-next-line
  }, [])

  const fieldsValidation = React.useMemo(() =>  {
    return createYupSchema(formUiProps.shownFormFields)
  }, [formUiProps.shownFormFields])

  const renderField = _.memoize(({ name, component, ...props }) => (
    <FastField
      name={name}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE }
      { ...props }
    />
  ))

  const renderFields = React.useMemo(()=> !_.isEmpty(fields) && (<Row>
    {fields.map((input, i) => {
      const { size = "12", validation, ...field } = input
      return (
        <Col key={i} lg={size}>
          { renderField(field) }
        </Col>
      )
    })}
  </Row>), [fields, renderField])

  const initialSnapshot = React.useMemo(() => {
    const snapshot = {}
    formUiProps.formFields.forEach(field => {
      if (!field.name.includes("[]")) {
        _.set(snapshot, field.name, _.get(initialValues, field.name, _.get(field, "initialValue", "")) )
      }
    })
    return snapshot

    // eslint-disable-next-line
  }, [formUiProps.formFields, initialValues])

  const handleSubmit = (values) => {
    /*const submitedValues = {}
    Object.keys(values).forEach((key) => {
      if (initialSnapshot.hasOwnProperty(key)){
        submitedValues[key] = values[key]
      }
    })*/
    onSubmit(values)
    formUiProps.setIsSubmitted(true)
  }

  const handleReset = () => {
    if (reset){
      handleSubmit({})
    }
  }

  useEffect(() => {
    if (clearValuesAfterSubmit && !reset){
      if (saveForm){
        setStorage(saveFormName, {})
      }
      resetRef && resetRef.current.click()
    }
    // eslint-disable-next-line
  }, [clearValuesAfterSubmit, reset])

  return (
    <>
    {/*<Provider store={formStore} context={FormContext}>*/}
      <Formik
        enableReinitialize={true}
        onSubmit={handleSubmit}
        onChange={onChange}
        onReset={handleReset}
        validationSchema={Yup.isSchema(validationSchema) ? validationSchema : fieldsValidation }
        initialValues={ Object.assign(initialSnapshot, _.isEmpty(initialValues) ? savedValues : initialValues) }
        validateOnChange={true}
      >
        {(form) => {
          if (saveForm && _.isEmpty(initialValues) && form.dirty) {
            setStorage(saveFormName, form.values)
          }
          return (
            <Form className={className} onSubmit={form.handleSubmit}>
              { renderFields }
              { children }
              { saveRef && <button ref={saveRef} className="d-none" type="submit"></button> }
              <button ref={resetRef} className="d-none" type="reset"></button>
              <DynamicFormError />
            </Form>
          )
        }}
      </Formik>
    {/*</Provider>*/}
      </>
  )
}

export default React.memo(FormProvider)
