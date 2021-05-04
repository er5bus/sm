/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ShowModal } from "../../../../../../components/partials/controls"
import { clearStore, fetchPeriodUnavailability } from "../../store/actions"
import PeriodUnavailability from "../display/PeriodUnavailability"

const PeriodUnavailabilityShowDialog = ({ params, show, onHide, intl }) => {

  const dispatch = useDispatch()
  const { isFetching, error, periodUnavailabilityForShow } = useSelector(
    (state) => ({
      isFetching: state.admin.periodUnavailability.isFetching,
      periodUnavailabilityForShow: state.admin.periodUnavailability.periodUnavailability,
      error: state.admin.periodUnavailability.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchPeriodUnavailability(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  return (
    <ShowModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.EDIT.TITLE" })
        : intl.formatMessage({ id: "PERIOD_UNAVAILABILITY.NEW.TITLE" })}
      show={show}
      isFetching={isFetching}
      onHide={onHide}
    >
      <PeriodUnavailability error={error} isFetching={isFetching} periodUnavailability={periodUnavailabilityForShow} />
    </ShowModal>
  )
}


export default injectIntl(PeriodUnavailabilityShowDialog)
