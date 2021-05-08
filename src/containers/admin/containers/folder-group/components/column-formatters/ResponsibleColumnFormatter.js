/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../constants"
import {getAttr} from "../../../../../../helpers"

const RESPONSIBLE_FULL_NAME = {
  [AR]: ["firstNameAr", "lastNameAr"],
  [FR]: ["firstName", "lastName"]
}

const ResponsibleColumnFormatter = (
  cellContent,
) => (
  <div className="label label-lg label-light-primary label-inline">
    { getAttr(cellContent, RESPONSIBLE_FULL_NAME, <FormattedMessage id="GENERAL.EMPTY" />  ) }
  </div>
);


export default ResponsibleColumnFormatter
