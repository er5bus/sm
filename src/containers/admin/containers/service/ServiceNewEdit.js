/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import ServiceForm from "./components/form/ServiceForm"

import { createService, clearStore, editService, fetchService } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const Service = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, serviceForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.service.isLoading,
      serviceForEdit: state.admin.service.service,
      success: state.admin.service.success,
      error: state.admin.service.error
    }),
    shallowEqual
  )

  const saveService = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createService(values))
    } else {
      dispatch(editService(params, values))
    }
  }

  const goBackToServicesList = useCallback(() => {
    history.push(routes.serviceList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchService(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "SERVICE.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "SERVICE.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceForEdit, params])

  return (
    <FormView
      goBackTo={goBackToServicesList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "SERVICE.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "SERVICE.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<ServiceForm
        isLoading={isLoading}
        success={success.isCreated}
        service={ !_.isEmpty(params) && serviceForEdit}
        onSubmit={saveService}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(Service)
