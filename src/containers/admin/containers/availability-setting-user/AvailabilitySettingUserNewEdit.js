/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import AvailabilitySettingUserForm from "./components/form/AvailabilitySettingUserForm"

import { createAvailabilitySettingUser, clearStore, editAvailabilitySettingUser, fetchAvailabilitySettingUser } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const AvailabilitySettingUser = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, availabilitySettingUserForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.availabilitySettingUser.isLoading,
      availabilitySettingUserForEdit: state.admin.availabilitySettingUser.availabilitySettingUser,
      success: state.admin.availabilitySettingUser.success,
      error: state.admin.availabilitySettingUser.error
    }),
    shallowEqual
  )

  const saveAvailabilitySettingUser = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createAvailabilitySettingUser(values))
    } else {
      dispatch(editAvailabilitySettingUser(params, values))
    }
  }

  const goBackToAvailabilitySettingUsersList = useCallback(() => {
    history.push(routes.availabilitySettingUserList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAvailabilitySettingUser(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "AVAILABILITY_SETTING_USER.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "AVAILABILITY_SETTING_USER.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availabilitySettingUserForEdit, params])

  return (
    <FormView
      goBackTo={goBackToAvailabilitySettingUsersList}
      title={title}
      onClose={clearStore}
      error={error}
      success={success.isCreated}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "AVAILABILITY_SETTING_USER.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "AVAILABILITY_SETTING_USER.NEW.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<AvailabilitySettingUserForm
        isLoading={isLoading}
        availabilitySettingUser={ !_.isEmpty(params) && availabilitySettingUserForEdit}
        onSubmit={saveAvailabilitySettingUser}
        success={success.isCreated}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(AvailabilitySettingUser)
