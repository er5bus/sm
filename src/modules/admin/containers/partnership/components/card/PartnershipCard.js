import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
  FilterFormView
} from "../../../../../../components/partials/controls"
import PartnershipsFilter from "./../form/PartnershipsFilter"
import PartnershipsTable from "./../table/PartnershipsTable"
import PartnershipsGrouping from "./../grouping/PartnershipsGrouping"
import { usePartnershipsUIContext } from "./../../context/PartnershipsUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"

import {ProtectedLink} from "../../../../../../components/wrappers"

const PartnershipCard = () => {

  const partnershipsUIProps = usePartnershipsUIContext()
  
  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.partnership.success,
      error: state.admin.partnership.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="PARTNERSHIP.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="PARTNERSHIP.MSG.DEACTIVATED" /> }
        ]}
      />
      <FilterFormView 
        title={ <FormattedMessage id="PARTNERSHIP.FILTER.TITLE" /> }
      >
        {
          ({ searchRef, resetRef }) => (
            <PartnershipsFilter searchRef={searchRef} clearSearchRef={resetRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="PARTNERSHIP.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={partnershipsUIProps.newPartnershipRule}>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={partnershipsUIProps.newPartnershipButtonClick}
            >
              <FormattedMessage id="PARTNERSHIP.NEW.TITLE" />
            </button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {partnershipsUIProps.ids.length > 0 && <PartnershipsGrouping />}
          <PartnershipsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default PartnershipCard
