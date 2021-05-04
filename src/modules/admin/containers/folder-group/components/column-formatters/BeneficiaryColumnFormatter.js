/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../constants"
import {getAttr} from "../../../../../../helpers"

const BENEFICIARY_FULL_NAME = {
  [AR]: ["firstNameAr", "lastNameAr"],
  [FR]: ["firstNameFr", "lastNameFr"]
}

const BeneficiaryColumnFormatter = (
  cellContent,
  row
) => (
  <div className="font-weight-bold">
    { getAttr(row, BENEFICIARY_FULL_NAME, <FormattedMessage id="GENERAL.EMPTY" />) }
  </div>
);


export default BeneficiaryColumnFormatter
