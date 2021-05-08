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

import AvailabilitySettingStructuresTable from "./../table/AvailabilitySettingStructuresTable"
import AvailabilitySettingStructureing from "./../grouping/AvailabilitySettingStructureing"
import { useAvailabilitySettingStructuresUIContext } from "./../../context/AvailabilitySettingStructuresUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const AvailabilitySettingStructureCard = () => {

  const availabilitySettingStructuresUIProps = useAvailabilitySettingStructuresUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.availabilitySettingStructure.success,
      error: state.admin.availabilitySettingStructure.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="AVAILABILITY_SETTING_STRUCTURE.MSG.DELETE" /> },
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="AVAILABILITY_SETTING_STRUCTURE.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={availabilitySettingStructuresUIProps.newAvailabilitySettingStructureRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={availabilitySettingStructuresUIProps.newAvailabilitySettingStructureButtonClick}
              >
                <FormattedMessage id="AVAILABILITY_SETTING_STRUCTURE.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {availabilitySettingStructuresUIProps.ids.length > 0 && <AvailabilitySettingStructureing />}
          <AvailabilitySettingStructuresTable />
        </CardBody>
      </Card>
    </>
  )
}


export default AvailabilitySettingStructureCard
