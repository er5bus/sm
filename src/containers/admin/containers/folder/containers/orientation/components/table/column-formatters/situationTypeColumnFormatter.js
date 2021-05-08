/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { SITUATION_TYPES } from "../../../../../../../UIHelpers"

const SituationTypeColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div>
    {SITUATION_TYPES[cellContent] && <FormattedMessage id={SITUATION_TYPES[cellContent]} />}
  </div>
);


export default SituationTypeColumnFormatter
