/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { deletePeriodUnavailability, fetchPeriodUnavailabilitys } from "../../store/actions"
import { usePeriodUnavailabilitysUIContext } from "../../context/PeriodUnavailabilitysUIContext"


const PeriodUnavailabilityDeleteDialog = ({ params, show, onHide }) => {
  // PeriodUnavailabilitys UI Context
  const periodUnavailabilitysUIProps = usePeriodUnavailabilitysUIContext()
  
  // PeriodUnavailabilitys Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.periodUnavailability.isLoading, success: state.admin.periodUnavailability.success }),
    shallowEqual
  )

  const onDeletePeriodUnavailability = () => {
    // server request for deleting periodUnavailability by id
    dispatch(deletePeriodUnavailability(params))
  }

  const onRefresh = () => {
    dispatch(fetchPeriodUnavailabilitys(periodUnavailabilitysUIProps.queryParams))
    periodUnavailabilitysUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeletePeriodUnavailability}
      isLoading={isLoading}
      success={success.isDelete}
      title={<FormattedMessage id="PERIOD_UNAVAILABILITY.DELETE.TITLE" />}
      body={<FormattedMessage id="PERIOD_UNAVAILABILITY.DELETE.MSG" />}
    />
  )
}


export default PeriodUnavailabilityDeleteDialog
