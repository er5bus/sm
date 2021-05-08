/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { FormModal } from "../../../../../../components/partials/controls"
import { createPeriodUnavailability, clearStore, fetchPeriodUnavailabilitys, editPeriodUnavailability, fetchPeriodUnavailability } from "../../store/actions"
import PeriodUnavailabilityForm from "../form/PeriodUnavailabilityForm"
import {usePeriodUnavailabilitysUIContext} from "../../context/PeriodUnavailabilitysUIContext"

const PeriodUnavailabilityDisplayDialog = ({ params, show, onHide, intl }) => {
  // PeriodUnavailabilitys UI Context
  const periodUnavailabilitysUIProps = usePeriodUnavailabilitysUIContext()

  const dispatch = useDispatch()
  const { isLoading, periodUnavailabilityForEdit, success } = useSelector(
    (state) => ({
      isLoading: state.admin.periodUnavailability.isLoading,
      success: state.admin.periodUnavailability.success,
      periodUnavailabilityForEdit: state.admin.periodUnavailability.periodUnavailability,
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

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchPeriodUnavailability(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  const onSuccess = () => {
    dispatch(fetchPeriodUnavailabilitys(periodUnavailabilitysUIProps.queryParams))
    periodUnavailabilitysUIProps.setIds([])
  }

  return (
    <FormModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.EDIT.TITLE" })
        : intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.NEW.TITLE" })}
      show={show}
      isLoading={isLoading}
      onHide={onHide}
      onSuccess={onSuccess}
      success={success.isCreated || success.isUpdated}
    >
      { ({ saveRef }) => (<PeriodUnavailabilityForm
        isLoading={isLoading}
        success={success.isCreated}
        periodUnavailability={ !_.isEmpty(params) && periodUnavailabilityForEdit}
        onSubmit={savePeriodUnavailability}
        saveRef={saveRef}
      />)
      }
    </FormModal>
  )
}


export default injectIntl(PeriodUnavailabilityDisplayDialog)
