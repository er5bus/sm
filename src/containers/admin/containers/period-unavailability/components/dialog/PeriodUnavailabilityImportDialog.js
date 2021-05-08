/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../components/partials/controls"
import { usePeriodUnavailabilitysUIContext } from "../../context/PeriodUnavailabilitysUIContext"
import { fetchPeriodUnavailabilitys} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"


const PeriodUnavailabilityImportDialog = ({ show, onHide }) => {
  // PeriodUnavailabilitys UI Context
  const periodUnavailabilityUIProps = usePeriodUnavailabilitysUIContext()
  
  // PeriodUnavailabilitys Redux state
  const dispatch = useDispatch()

  const onImportPeriodUnavailabilityFinish = () => {
    dispatch(fetchPeriodUnavailabilitys(periodUnavailabilityUIProps.queryParams))
    periodUnavailabilityUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="PERIOD_UNAVAILABILITY.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportPeriodUnavailabilityFinish}
      url={ENDPOINTS.IMPORT_PERIOD_UNAVAILABILITY}
    />
  )
}


export default PeriodUnavailabilityImportDialog
