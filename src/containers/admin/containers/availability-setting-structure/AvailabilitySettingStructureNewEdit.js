/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import AvailabilitySettingStructureForm from "./components/form/AvailabilitySettingStructureForm"

import { createAvailabilitySettingStructure, clearStore, editAvailabilitySettingStructure, fetchAvailabilitySettingStructure } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const AvailabilitySettingStructure = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, availabilitySettingStructureForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.availabilitySettingStructure.isLoading,
      availabilitySettingStructureForEdit: state.admin.availabilitySettingStructure.availabilitySettingStructure,
      success: state.admin.availabilitySettingStructure.success,
      error: state.admin.availabilitySettingStructure.error
    }),
    shallowEqual
  )

  const saveAvailabilitySettingStructure = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createAvailabilitySettingStructure(values))
    } else {
      dispatch(editAvailabilitySettingStructure(params, values))
    }
  }

  const goBackToAvailabilitySettingStructuresList = useCallback(() => {
    history.push(routes.availabilitySettingStructureList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAvailabilitySettingStructure(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "AVAILABILITY_SETTING_STRUCTURE.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "AVAILABILITY_SETTING_STRUCTURE.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availabilitySettingStructureForEdit, params])

  return (
    <FormView
      goBackTo={goBackToAvailabilitySettingStructuresList}
      title={title}
      onClose={clearStore}
      error={error}
      success={success.isCreated}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "AVAILABILITY_SETTING_STRUCTURE.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "AVAILABILITY_SETTING_STRUCTURE.NEW.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<AvailabilitySettingStructureForm
        isLoading={isLoading}
        availabilitySettingStructure={ !_.isEmpty(params) && availabilitySettingStructureForEdit}
        onSubmit={saveAvailabilitySettingStructure}
        success={success.isCreated}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(AvailabilitySettingStructure)
