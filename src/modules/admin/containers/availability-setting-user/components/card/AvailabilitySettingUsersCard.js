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

import AvailabilitySettingUsersTable from "./../table/AvailabilitySettingUsersTable"
import AvailabilitySettingUsering from "./../grouping/AvailabilitySettingUsering"
import { useAvailabilitySettingUsersUIContext } from "./../../context/AvailabilitySettingUsersUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const AvailabilitySettingUserCard = () => {

  const availabilitySettingUsersUIProps = useAvailabilitySettingUsersUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.availabilitySettingUser.success,
      error: state.admin.availabilitySettingUser.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="AVAILABILITY_SETTING_USER.MSG.DELETE" /> },
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="AVAILABILITY_SETTING_USER.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={availabilitySettingUsersUIProps.newAvailabilitySettingUserRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={availabilitySettingUsersUIProps.newAvailabilitySettingUserButtonClick}
              >
                <FormattedMessage id="AVAILABILITY_SETTING_USER.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {availabilitySettingUsersUIProps.ids.length > 0 && <AvailabilitySettingUsering />}
          <AvailabilitySettingUsersTable />
        </CardBody>
      </Card>
    </>
  )
}


export default AvailabilitySettingUserCard
