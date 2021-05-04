import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
} from "../../../../../../components/partials/controls"

import PeriodUnavailabilitysTable from "./../table/PeriodUnavailabilitysTable"
import PeriodUnavailabilityGrouping from "./../grouping/PeriodUnavailabilityGrouping"
import { usePeriodUnavailabilitysUIContext } from "./../../context/PeriodUnavailabilitysUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const PeriodUnavailabilityCard = () => {

  const periodUnavailabilitysUIProps = usePeriodUnavailabilitysUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.periodUnavailability.success,
      error: state.admin.periodUnavailability.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="PERIOD_UNAVAILABILITY.MSG.ACTIVATED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="PERIOD_UNAVAILABILITY.NEW.MSG" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="PERIOD_UNAVAILABILITY.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="PERIOD_UNAVAILABILITY.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={periodUnavailabilitysUIProps.newPeriodUnavailabilityRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={periodUnavailabilitysUIProps.newPeriodUnavailabilityButtonClick}
              >
                <FormattedMessage id="PERIOD_UNAVAILABILITY.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            {/*<ProtectedLink rule={periodUnavailabilitysUIProps.newPeriodUnavailabilityRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={periodUnavailabilitysUIProps.openPeriodUnavailabilityImportDialog}
              >
                <FormattedMessage id="PERIOD_UNAVAILABILITY.NEW.IMPORT" />
              </Button>
            </ProtectedLink> */}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {periodUnavailabilitysUIProps.ids.length > 0 && <PeriodUnavailabilityGrouping />}
          <PeriodUnavailabilitysTable />
        </CardBody>
      </Card>
    </>
  )
}


export default PeriodUnavailabilityCard
