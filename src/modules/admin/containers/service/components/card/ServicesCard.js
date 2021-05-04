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

import ServicesTable from "./../table/ServicesTable"
import ServiceGrouping from "./../grouping/ServiceGrouping"
import { useServicesUIContext } from "./../../context/ServicesUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const ServiceCard = () => {

  const servicesUIProps = useServicesUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.service.success,
      error: state.admin.service.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="SERVICE.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="SERVICE.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="SERVICE.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={servicesUIProps.newServiceRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={servicesUIProps.newServiceButtonClick}
              >
                <FormattedMessage id="SERVICE.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            {/*<ProtectedLink rule={servicesUIProps.newServiceRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={servicesUIProps.openServiceImportDialog}
              >
                <FormattedMessage id="SERVICE.NEW.IMPORT" />
              </Button>
            </ProtectedLink>*/}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {servicesUIProps.ids.length > 0 && <ServiceGrouping />}
          <ServicesTable />
        </CardBody>
      </Card>
    </>
  )
}


export default ServiceCard
