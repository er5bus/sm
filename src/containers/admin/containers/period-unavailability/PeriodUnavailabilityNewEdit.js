/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import PeriodUnavailabilityForm from "./components/form/PeriodUnavailabilityForm"

import { createPeriodUnavailability, clearStore, editPeriodUnavailability, fetchPeriodUnavailability } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const PeriodUnavailability = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, periodUnavailabilityForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.periodUnavailability.isLoading,
      periodUnavailabilityForEdit: state.admin.periodUnavailability.periodUnavailability,
      success: state.admin.periodUnavailability.success,
      error: state.admin.periodUnavailability.error
    }),
    shallowEqual
  )

  const savePeriodUnavailability = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createPeriodUnavailability(values))
    } else {
      dispatch(editPeriodUnavailability(params, values))
    }
  }

  const goBackToPeriodUnavailabilitysList = useCallback(() => {
    history.push(routes.periodUnavailabilityList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchPeriodUnavailability(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [periodUnavailabilityForEdit, params])

  return (
    <FormView
      goBackTo={goBackToPeriodUnavailabilitysList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<PeriodUnavailabilityForm
        isLoading={isLoading}
        success={success.isCreated}
        periodUnavailability={ !_.isEmpty(params) && periodUnavailabilityForEdit}
        onSubmit={savePeriodUnavailability}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(PeriodUnavailability)
