/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { PARTNERSHIP_ASSOCIATE_SERVICE_STATE, PARTNERSHIP_ASSOCIATE_SERVICE_STATE_COLOR } from "../../../../../../../UIHelpers"

const StateColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className={`label label-lg label-light-${PARTNERSHIP_ASSOCIATE_SERVICE_STATE_COLOR[cellContent]} label-inline`}>
    {PARTNERSHIP_ASSOCIATE_SERVICE_STATE[cellContent] && <FormattedMessage id={PARTNERSHIP_ASSOCIATE_SERVICE_STATE[cellContent]} />}
  </div>
);


export default StateColumnFormatter
