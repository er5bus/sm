/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { EVENT_STATE, EVENT_STATE_COLOR } from "../../../../../../../UIHelpers"

const StateColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className={`label label-lg label-light-${EVENT_STATE_COLOR[cellContent]} label-inline`}>
    { EVENT_STATE[cellContent] && <FormattedMessage id={EVENT_STATE[cellContent]} />}
  </div>
);


export default StateColumnFormatter
