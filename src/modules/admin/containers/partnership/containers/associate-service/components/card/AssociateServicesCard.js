import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
  //CardFooter
} from "../../../../../../../../components/partials/controls"
import { isRLTLang } from "./../../../../../../../../i18n"

import AssociateServicesTable from "./../table/AssociateServicesTable"
import AssociateServicesGrouping from "./../grouping/AssociateServicesGrouping"
import { useAssociateServicesUIContext } from "./../../context/AssociateServicesUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const AssociateServiceCard = ({ partnershipParam, goBackToPartnership }) => {

  const associateServicesUIProps = useAssociateServicesUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.associateService.success,
      error: state.admin.associateService.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="ASSOCIATE_SERVICE.MSG.DELETE" /> },
          { condition: success.isStatusChanged, label: <FormattedMessage id="ASSOCIATE_SERVICE.MSG.STATUS_CHANGED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="ASSOCIATE_SERVICE.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <Button
              type="button"
              onClick={goBackToPartnership}
              className="btn btn-sm btn-light mx-2"
            >
              { isRLTLang() ?
                <>
                  <FormattedMessage id="GENERAL.BACK" />
                  <i className="fa fa-arrow-left" />
                </>
                : <>
                  <i className="fa fa-arrow-left" />
                  <FormattedMessage id="GENERAL.BACK" />
                </>
              }
            </Button>
            <ProtectedLink rule={associateServicesUIProps.newAssociateServiceRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={associateServicesUIProps.newAssociateServiceButtonClick}
              >
                <FormattedMessage id="ASSOCIATE_SERVICE.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {associateServicesUIProps.ids.length > 0 && <AssociateServicesGrouping />}
          <AssociateServicesTable partnershipParam={partnershipParam} />
        </CardBody>
      </Card>
    </>
  )
}


export default AssociateServiceCard
