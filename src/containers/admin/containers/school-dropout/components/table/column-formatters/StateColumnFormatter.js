/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import {TRACKING_STATUS} from "../../../../../UIHelpers"

const StateColumnFormatter = (
  cellContent,
  row,
) => (
  <div className={`label label-lg label-light-${row.isActive ? 'success' : 'danger'} label-inline`}>
    <FormattedMessage id={ TRACKING_STATUS[cellContent] || "GENERAL.EMPTY"  } />
  </div>
);


export default StateColumnFormatter
