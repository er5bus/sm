/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import SchoolDropoutForm from "./components/form/SchoolDropoutForm"

import { createSchoolDropout, clearStore, editSchoolDropout, fetchSchoolDropout } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "../../routes"


const SchoolDropout = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, schoolDropoutForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.schoolDropout.isLoading,
      schoolDropoutForEdit: state.admin.schoolDropout.schoolDropout,
      success: state.admin.schoolDropout.success,
      error: state.admin.schoolDropout.error
    }),
    shallowEqual
  )

  const saveSchoolDropout = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createSchoolDropout(values))
    } else {
      dispatch(editSchoolDropout(params, values))
    }
  }

  const goBackToSchoolDropoutsList = useCallback(() => {
    history.push(routes.schoolDropoutList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchSchoolDropout(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "SCHOOL_DROPOUT.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "SCHOOL_DROPOUT.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schoolDropoutForEdit, params])

  return (
    <FormView
      goBackTo={goBackToSchoolDropoutsList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "SCHOOL_DROPOUT.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "SCHOOL_DROPOUT.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<SchoolDropoutForm
        isLoading={isLoading}
        success={success.isCreated}
        schoolDropout={ !_.isEmpty(params) && schoolDropoutForEdit}
        onSubmit={saveSchoolDropout}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(SchoolDropout)
