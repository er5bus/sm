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

import SchoolDropoutsTable from "../table/SchoolDropoutsTable"
import SchoolDropoutGrouping from "../grouping/SchoolDropoutGrouping"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const SchoolDropoutCard = () => {

  const schoolDropoutsUIProps = useSchoolDropoutsUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.schoolDropout.success,
      error: state.admin.schoolDropout.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="SCHOOL_DROPOUT.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="SCHOOL_DROPOUT.MSG.DEACTIVATED" /> },
          { condition: success.isUpdated, label: <FormattedMessage id="SCHOOL_DROPOUT.EDIT.MSG" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="SCHOOL_DROPOUT.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={schoolDropoutsUIProps.newSchoolDropoutRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={schoolDropoutsUIProps.newSchoolDropoutButtonClick}
              >
                <FormattedMessage id="SCHOOL_DROPOUT.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={schoolDropoutsUIProps.newSchoolDropoutRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={schoolDropoutsUIProps.openSchoolDropoutImportDialog}
              >
                <FormattedMessage id="SCHOOL_DROPOUT.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {schoolDropoutsUIProps.ids.length > 0 && <SchoolDropoutGrouping />}
          <SchoolDropoutsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default SchoolDropoutCard
