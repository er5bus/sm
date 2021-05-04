/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { ORIENTATION_STATE, ORIENTATION_STATE_COLOR } from "../../../../../../../UIHelpers"

const StateColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className={`label label-lg label-light- label-light-${ORIENTATION_STATE_COLOR[row.status]} label-inline`}>
    {ORIENTATION_STATE[row.status] && <FormattedMessage id={ORIENTATION_STATE[row.status]} />}
  </div>
);


export default StateColumnFormatter
